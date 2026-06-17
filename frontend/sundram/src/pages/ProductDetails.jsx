import  { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    fetchProduct();
  }, [id]);

  async function fetchProduct() {
    try {
      const response = await axios.get(
  `https://sundram-backend-1.onrender.com/products/getsingleproduct/${id}`
);

      setProduct(response.data);
      const productImages =
        response.data?.images?.length > 0
          ? response.data.images
          : response.data?.image
          ? [response.data.image]
          : [];
      setSelectedImage(productImages[0] || "");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="text-center py-20 text-xl">
        Loading Product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20 text-xl">
        Product Not Found
      </div>
    );
  }

  const discountedPrice =
    product.discount > 0
      ? product.price -
        (product.price * product.discount) / 100
      : product.price;

  const productImages =
    product?.images?.length > 0
      ? product.images
      : product?.image
      ? [product.image]
      : [];

  const mainImage = selectedImage || productImages[0] || "";

  const handleAddToCart = () => {
    addToCart({
      ...product,
      image: mainImage || product.image,
    });
  };

  return (
    <section className="py-10 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl p-5 md:p-8 shadow-sm">
          <div>
            <div className="bg-gray-100 rounded-2xl p-5 md:p-8 min-h-[380px] flex items-center justify-center">
              {mainImage ? (
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-[360px] md:h-[440px] object-contain"
                />
              ) : (
                <div className="text-gray-400">No image available</div>
              )}
            </div>

            {productImages.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                {productImages.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    className={`w-20 h-20 shrink-0 rounded-xl border-2 overflow-hidden transition ${
                      image === mainImage
                        ? "border-green-700"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name}-${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            {product.discount > 0 && (
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-md text-xs font-semibold inline-block">
                {product.discount}% OFF
              </span>
            )}

            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-3 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <Star
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />
              <span className="text-sm text-gray-700">{product.rating || 4.5}</span>
              <span className="text-sm text-gray-400">| 320 reviews</span>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">
                ₹{Math.round(discountedPrice)}
              </span>

              {product.discount > 0 && (
                <span className="text-lg text-gray-400 line-through">
                  ₹{product.price}
                </span>
              )}
            </div>

            <div className="mt-3">
              <span
                className={`text-sm font-semibold ${
                  product.stock > 0
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {product.stock > 0
                  ? `In Stock (${product.stock})`
                  : "Out Of Stock"}
              </span>
            </div>

            <div className="mt-6 border-t pt-5">
              <h3 className="text-lg font-semibold mb-2">
                Description
              </h3>

              <p className="text-gray-600 leading-7 text-sm md:text-base">
                {product.description}
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 ${
                  product.stock > 0
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-gray-300 text-gray-500"
                }`}
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`px-8 py-3 rounded-lg font-semibold ${
                  product.stock > 0
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-gray-300 text-gray-500"
                }`}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;