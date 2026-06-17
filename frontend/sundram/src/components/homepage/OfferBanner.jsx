
import  { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, Zap } from "lucide-react";
import { useCart } from "../../context/CartContext";

const OfferBanner = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const getProductImage = (product) =>
    product?.image ||
    (Array.isArray(product?.images) ? product.images[0] : "") ||
    "https://via.placeholder.com/300x300?text=No+Image";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `https://sundram-backend-1.onrender.com/products/getallproducts?t=${Date.now()}`
      );

      const sortedProducts = [...(response.data || [])].sort(
        (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
      );
      setProducts(sortedProducts.slice(0, 5));
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-lg font-semibold text-gray-600">
            Loading Offers...
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Heading */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap size={22} className="text-yellow-500" />
              <span className="text-green-700 font-semibold uppercase tracking-wider text-sm">
                Special Offers
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Today's Best Deals
            </h2>
          </div>

          <Link
            to="/products"
            className="text-green-700 font-semibold hover:text-green-800"
          >
            View All →
          </Link>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {products.map((product) => {
            const discountedPrice =
              product.discount > 0
                ? product.price -
                  (product.price * product.discount) / 100
                : product.price;

            return (
              <div
                key={product._id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <Link to={`/product/${product._id}`}>
                  <div className="relative bg-gray-50">
                    {product.discount > 0 && (
                      <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md z-10">
                        {product.discount}% OFF
                      </span>
                    )}

                    <img
                      src={getProductImage(product)}
                      alt={product.name}
                      className="w-full h-44 object-contain p-4 hover:scale-105 transition duration-300"
                    />
                  </div>
                </Link>

                <div className="p-4 flex flex-col grow">
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                      <Star size={12} fill="currentColor" />
                      {product.rating || 4.5}
                    </div>

                    <span className="text-xs text-gray-500">
                      Stock: {product.stock}
                    </span>
                  </div>

                  {/* Name */}
                  <Link to={`/product/${product._id}`}>
                    <h3 className="font-semibold text-gray-800 text-sm leading-6 line-clamp-2 min-h-[48px] hover:text-green-700 transition">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Description */}
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2 min-h-[36px]">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="mt-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xl font-bold text-gray-900">
                        ₹{Math.round(discountedPrice)}
                      </span>

                      {product.discount > 0 && (
                        <span className="text-sm text-gray-400 line-through">
                          ₹{product.price}
                        </span>
                      )}
                    </div>

                    {product.discount > 0 && (
                      <p className="text-green-600 text-xs font-medium mt-1">
                        Save ₹
                        {Math.round(
                          product.price - discountedPrice
                        )}
                      </p>
                    )}
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => addToCart(product)}
                    disabled={product.stock === 0}
                    className={`mt-auto w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                      product.stock > 0
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <ShoppingCart size={16} />
                    {product.stock > 0
                      ? "Add To Cart"
                      : "Out Of Stock"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;

