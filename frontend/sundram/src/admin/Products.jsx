import React, { useEffect, useState } from "react";
import axios from "axios";
import { Plus, Edit, Trash2, X, Save } from "lucide-react";

const API_URL = "https://sundram-backend-1.onrender.com/products";
const UPLOAD_URL = "https://sundram-backend-1.onrender.com/api/upload";

function Products() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [existingImages, setExistingImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    images: [],
    category: "seeds",
    description: "",
    stock: 0,
    rating: 0,
    featured: false,
    discount: 0,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await axios.get(`${API_URL}/getallproducts?t=${Date.now()}`);
      const sortedProducts = [...(res.data || [])].sort(
        (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0),
      );
      setProducts(sortedProducts);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const getProductImages = (product) => {
    if (Array.isArray(product?.images) && product.images.length > 0) {
      return product.images;
    }
    if (product?.image) {
      return [product.image];
    }
    return [];
  };

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length > 5) {
      alert("You can upload maximum 5 images.");
      return;
    }
    setFormData((prev) => ({
      ...prev,
      images: selectedFiles,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const form = new FormData();

    form.append("name", formData.name);
    form.append("price", formData.price);
    form.append("category", formData.category);
    form.append("description", formData.description);
    form.append("stock", formData.stock);
    form.append("rating", formData.rating);
    form.append("featured", formData.featured);
    form.append("discount", formData.discount);

    if (formData.images?.length > 0) {
      formData.images.forEach((file) => {
        form.append("images", file);
      });
    }

    if (editingProduct) {
      await axios.put(
        `${API_URL}/updateproduct/${editingProduct._id}`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } else {
      await axios.post(
        `${API_URL}/addproduct`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    }

    alert("Product Saved Successfully");

    fetchProducts();
    closeModal();

  } catch (error) {
    console.log(error);
    alert(
      error?.response?.data?.message ||
      "Failed to save product"
    );
  }
};
 const handleEdit = (product) => {
  setEditingProduct(product);
  const productImages = getProductImages(product);

  setFormData({
    name: product.name || "",
    price: product.price || "",
    images: [],
    category: product.category || "seeds",
    description: product.description || "",
    stock: product.stock || 0,
    rating: product.rating || 0,
    featured: product.featured || false,
    discount: product.discount || 0,
  });
  setExistingImages(productImages);

  setShowModal(true);
};
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this product?");

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/deleteproduct/${id}`);

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingProduct(null);
    setExistingImages([]);

   setFormData({
  name: "",
  price: "",
  images: [],
  category: "seeds",
  description: "",
  stock: 0,
  rating: 0,
  featured: false,
  discount: 0,
});
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Product Management
            </h1>

            <p className="text-slate-500 mt-1">
              Manage your products professionally
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition"
          >
            <Plus size={18} />
            Add Product
          </button>
        </div>
      </div>

        {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
        <div className="bg-white p-5 rounded-2xl shadow-sm border">
          <h3 className="text-slate-500 text-sm">Total Products</h3>

          <h2 className="text-3xl font-bold mt-2">{products.length}</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border">
          <h3 className="text-slate-500 text-sm">Categories</h3>

          <h2 className="text-3xl font-bold mt-2">4</h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border">
          <h3 className="text-slate-500 text-sm">Featured Products</h3>

          <h2 className="text-3xl font-bold mt-2">
            {products.filter((p) => p.featured).length}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border">
          <h3 className="text-slate-500 text-sm">In Stock</h3>

          <h2 className="text-3xl font-bold mt-2">
            {products.filter((p) => p.stock > 0).length}
          </h2>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">
        <div className="p-5 border-b">
          <h2 className="font-semibold text-lg">Product List</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left">Product</th>

                <th className="px-6 py-4 text-left">Category</th>

                <th className="px-6 py-4 text-left">Price</th>

                <th className="px-6 py-4 text-left">Stock</th>

                <th className="px-6 py-4 text-left">Status</th>

                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b hover:bg-slate-50 transition"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={
                          product.images?.[0] ||
                          product.image ||
                          "https://via.placeholder.com/150"
                        }
                        alt=""
                        className="w-14 h-14 rounded-xl object-cover border"
                      />

                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-slate-500">
                          ID : {product?._id ? product._id.slice(0, 8) : "N/A"}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 capitalize">{product.category}</td>

                  <td className="px-6 py-4 font-semibold text-green-600">
                    ₹{product.price}
                  </td>

                  <td className="px-6 py-4">{product.stock}</td>

                  <td className="px-6 py-4">
                    {product.stock > 0 ? (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                        In Stock
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">
                        Out of Stock
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                      >
                        <Edit size={18} />
                      </button>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center hover:bg-red-600 hover:text-white transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showModal && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-linear-to-r from-green-600 to-emerald-500 px-8 py-5 flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {editingProduct ? "Update Product" : "Add New Product"}
                    </h2>

                    <p className="text-green-100 text-sm">
                      Manage your store inventory
                    </p>
                  </div>

                  <button
                    onClick={closeModal}
                    className="text-white hover:bg-white/20 p-2 rounded-lg"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="p-8 max-h-[80vh] overflow-y-auto"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Product Name */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-700">
                        Product Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter product name"
                        className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                        required
                      />
                    </div>

                    {/* Price */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-700">
                        Product Price
                      </label>

                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Enter price"
                        className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                        required
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-700">
                        Category
                      </label>

                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                      >
                        <option value="seeds">Seeds</option>
                        <option value="fertilizers">Fertilizers</option>
                        <option value="pesticides">Pesticides</option>
                        <option value="tools">Tools</option>
                      </select>
                    </div>

                    {/* Stock */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-700">
                        Stock Quantity
                      </label>

                      <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        placeholder="Available stock"
                        className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                      />
                    </div>

                    {/* Rating */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-700">
                        Rating
                      </label>

                      <input
                        type="number"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        placeholder="0 - 5"
                        className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                      />
                    </div>

                    {/* Discount */}
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-700">
                        Discount %
                      </label>

                      <input
                        type="number"
                        name="discount"
                        value={formData.discount}
                        onChange={handleChange}
                        placeholder="Discount"
                        className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                      />
                    </div>
                  </div>

                  {/* Image URL */}
                  <div className="mt-5">
                    <label className="block text-sm font-semibold mb-2 text-slate-700">
                      Product Images (up to 5)
                    </label>

                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                      onChange={handleImageChange}
                    />
                    <p className="text-xs text-slate-500 mt-1">
                      Select 4-5 product images for best results.
                    </p>
                  </div>

                  {existingImages.length > 0 && formData.images.length === 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-slate-700 mb-2">
                        Existing Images
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {existingImages.map((image, index) => (
                          <img
                            key={`${image}-${index}`}
                            src={image}
                            alt=""
                            className="w-24 h-24 object-cover rounded-xl border"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {formData.images && formData.images.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {Array.from(formData.images).map((file, index) => (
                        <img
                          key={index}
                          src={URL.createObjectURL(file)}
                          alt=""
                          className="w-24 h-24 object-cover rounded-xl border"
                        />
                      ))}
                    </div>
                  )}

                  {/* Description */}
                  <div className="mt-5">
                    <label className="block text-sm font-semibold mb-2 text-slate-700">
                      Product Description
                    </label>

                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Write product description..."
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none resize-none"
                    />
                  </div>

                  {/* Featured */}
                  <div className="mt-5 flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleChange}
                      className="w-5 h-5 accent-green-600"
                    />

                    <label className="font-medium text-slate-700">
                      Mark as Featured Product
                    </label>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-end gap-3 mt-8">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-6 py-3 rounded-xl border border-slate-300 font-medium hover:bg-slate-100"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      disabled={uploading}
                      className="px-8 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium flex items-center gap-2"
                    >
                      <Save size={18} />
                      {uploading
                        ? "Uploading..."
                        : editingProduct
                        ? "Update Product"
                        : "Save Product"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
