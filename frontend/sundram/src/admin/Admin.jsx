import { useState, useEffect } from "react";
import axios from "axios";
import { Trash2, Edit, Plus, Save, X, Upload, Image as ImageIcon } from "lucide-react";

const API_URL = "https://sundram-backend-1.onrender.com/products";
const UPLOAD_URL = "https://sundram-backend-1.onrender.com/api/upload";


const Admin = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageSource, setImageSource] = useState("url");
  const [previewImage, setPreviewImage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    category: "seeds", // ✅ wapas add kiya
    description: "",
    stock: 0,
    rating: 0,
    featured: false,
    discount: 0,
  });

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/getallproducts`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    if (name === "image") setPreviewImage(value);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const uploadData = new FormData();
    uploadData.append("image", file);
    try {
      const response = await axios.post(UPLOAD_URL, uploadData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const fullImageUrl = `https://sundram-backend-1.onrender.com${response.data.imagePath}`;
      setFormData((prev) => ({ ...prev, image: fullImageUrl }));
      setPreviewImage(fullImageUrl);
    } catch (error) {
      alert("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        name: formData.name,
        price: Number(formData.price),
        image: formData.image,
        category: formData.category, // ✅ wapas add kiya
        description: formData.description,
        stock: Number(formData.stock),
        rating: Number(formData.rating),
        featured: formData.featured,
        discount: Number(formData.discount),
      };
      if (editingProduct) {
        await axios.put(`${API_URL}/updateproduct/${editingProduct._id}`, productData);
      } else {
        await axios.post(`${API_URL}/addproduct`, productData);
      }
      alert("Product Saved Successfully");
      fetchProducts();
      closeModal();
    } catch (error) {
      alert(error?.response?.data?.message || "Failed to save product");
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category, // ✅ wapas add kiya
      description: product.description,
      stock: product.stock,
      rating: product.rating,
      featured: product.featured,
      discount: product.discount,
    });
    setPreviewImage(product.image);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    const deleteId = id || "";
    try {
      const resp = await axios.delete(`${API_URL}/deleteproduct/${deleteId}`);
      console.log("delete response:", resp?.data);
      await fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      alert(error?.response?.data?.message || "Failed to delete product");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingProduct(null);
    setPreviewImage("");
    setImageSource("url");
    setFormData({
      name: "",
      price: "",
      image: "",
      category: "seeds", // ✅ wapas add kiya
      description: "",
      stock: 0,
      rating: 0,
      featured: false,
      discount: 0,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* TOP */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-1">Admin Dashboard</h1>
            <p className="text-gray-500">{products.length} total products</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            <Plus size={20} /> Add Product
          </button>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-green-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Product</th>
                  <th className="px-6 py-4 text-left">Price</th>
                  <th className="px-6 py-4 text-left">Stock</th>
                  <th className="px-6 py-4 text-left">Rating</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product._id || index} className="border-b hover:bg-gray-50 transition">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-xl border" />
                        <div>
                          <h3 className="font-bold text-gray-900">{product.name}</h3>
                          {product.featured && (
                            <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full mt-1 inline-block">Featured</span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 font-bold text-gray-900">
                      ₹{product.price}
                      {product.discount > 0 && <div className="text-sm text-green-600">{product.discount}% OFF</div>}
                    </td>
                    <td className="px-6 py-5">
                      <span className={product.stock > 0 ? "text-green-600" : "text-red-600"}>{product.stock}</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="font-semibold">{product.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex justify-end gap-3">
                        <button onClick={() => handleEdit(product)} className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center hover:bg-blue-700 hover:text-white transition">
                          <Edit size={20} />
                        </button>
                        <button onClick={() => handleDelete(product._id || product.id)} className="w-11 h-11 rounded-xl bg-red-100 text-red-700 flex items-center justify-center hover:bg-red-700 hover:text-white transition">
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {products.length === 0 && (
              <div className="text-center py-16 text-gray-500">
                <p className="text-lg mb-2">No products found</p>
                <button onClick={() => setShowModal(true)} className="text-green-700 font-semibold hover:underline">Add your first product</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-3xl shadow-2xl my-6">

            <div className="flex items-center justify-between border-b px-8 py-5">
              <h2 className="text-2xl font-bold text-gray-900">{editingProduct ? "Edit Product" : "Add Product"}</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-red-600 transition"><X size={28} /></button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-5">

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">Product Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600" />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">Category</label>
                  <select name="category" value={formData.category} onChange={handleInputChange} className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600">
                    <option value="seeds">Seeds</option>
                    <option value="fertilizers">Fertilizers</option>
                    <option value="pesticides">Pesticides</option>
                    <option value="tools">Farming Tools</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">Price</label>
                  <input type="number" name="price" value={formData.price} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600" />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">Stock</label>
                  <input type="number" name="stock" value={formData.stock} onChange={handleInputChange} required className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">Rating</label>
                  <input type="number" name="rating" value={formData.rating} onChange={handleInputChange} step="0.1" className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600" />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">Discount %</label>
                  <input type="number" name="discount" value={formData.discount} onChange={handleInputChange} className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600" />
                </div>
              </div>

              {/* IMAGE */}
              <div>
                <label className="block mb-3 font-semibold text-gray-700">Product Image</label>
                <div className="flex gap-3 mb-4">
                  <button type="button" onClick={() => setImageSource("url")} className={`px-5 py-3 rounded-xl flex items-center gap-2 transition ${imageSource === "url" ? "bg-green-700 text-white" : "bg-gray-200 text-gray-700"}`}>
                    <ImageIcon size={18} /> URL
                  </button>
                  <button type="button" onClick={() => setImageSource("upload")} className={`px-5 py-3 rounded-xl flex items-center gap-2 transition ${imageSource === "upload" ? "bg-green-700 text-white" : "bg-gray-200 text-gray-700"}`}>
                    <Upload size={18} /> Upload
                  </button>
                </div>
                {imageSource === "url" ? (
                  <input type="url" name="image" value={formData.image} onChange={handleInputChange} required placeholder="Enter Image URL" className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600" />
                ) : (
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600" />
                )}
                {uploading && <p className="text-sm text-gray-500 mt-2">Uploading image...</p>}
                {previewImage && <img src={previewImage} alt="preview" className="w-full h-64 object-cover rounded-2xl mt-5 border" />}
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="block mb-2 font-semibold text-gray-700">Description</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange} rows="4" required className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600 resize-none" />
              </div>

              {/* FEATURED */}
              <div className="flex items-center gap-3">
                <input type="checkbox" name="featured" checked={formData.featured} onChange={handleInputChange} className="w-5 h-5" />
                <label className="font-medium text-gray-700">Featured Product</label>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 pt-4">
                <button type="button" onClick={closeModal} className="flex-1 border border-gray-300 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition">Cancel</button>
                <button type="submit" disabled={uploading} className="flex-1 bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition disabled:opacity-50">
                  <Save size={20} /> {editingProduct ? "Update Product" : "Add Product"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;