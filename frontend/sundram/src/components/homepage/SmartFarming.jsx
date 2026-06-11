import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Star, ArrowRight, ShoppingCart, Leaf } from "lucide-react";
import { useCart } from "../../context/CartContext";

const SmartFarming = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://sundram-backend-1.onrender.com/products/getallproducts"
      );
      setProducts(response.data.slice(0, 4));
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-2xl h-[360px] animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Leaf size={15} className="text-green-600" />
              <span className="text-green-600 font-semibold uppercase tracking-widest text-xs">
                Smart Farming
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Modern Tools For <br className="hidden md:block" />
              <span className="text-green-700">Today's Farming</span>
            </h2>
          </div>

          <Link
            to="/products"
            className="flex items-center gap-2 text-sm text-green-700 font-semibold border border-green-200 hover:border-green-600 hover:bg-green-50 px-4 py-2 rounded-full transition duration-200 whitespace-nowrap"
          >
            View All <ArrowRight size={15} />
          </Link>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => {
            const discountedPrice =
              product.discount > 0
                ? Math.round(product.price - (product.price * product.discount) / 100)
                : product.price;

            return (
              <div
                key={product._id}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
              >
                {/* IMAGE */}
                <Link to={`/product/${product._id}`} className="block">
                  <div className="relative bg-gray-50 overflow-hidden">
                    {product.discount > 0 && (
                      <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                        -{product.discount}%
                      </span>
                    )}

                    {product.stock === 0 && (
                      <div className="absolute inset-0 bg-white/60 z-10 flex items-center justify-center">
                        <span className="text-xs font-semibold text-gray-400 border border-gray-300 px-3 py-1 rounded-full bg-white">
                          Out of Stock
                        </span>
                      </div>
                    )}

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[190px] object-contain p-4 group-hover:scale-[1.04] transition-transform duration-400"
                    />
                  </div>
                </Link>

                {/* BODY */}
                <div className="p-4 flex flex-col flex-grow">

                  {/* CATEGORY + RATING */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-green-600 bg-green-50 px-2 py-0.5 rounded-md">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
                      <Star size={12} fill="currentColor" />
                      {product.rating?.toFixed(1) || "0.0"}
                    </div>
                  </div>

                  {/* NAME */}
                  <Link to={`/product/${product._id}`}>
                    <h3 className="text-[15px] font-bold text-gray-800 leading-snug line-clamp-2 hover:text-green-700 transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  {/* DESCRIPTION */}
                  <p className="text-[12.5px] text-gray-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* PRICE + STOCK */}
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-extrabold text-gray-900">
                        ₹{discountedPrice}
                      </span>
                      {product.discount > 0 && (
                        <span className="text-sm text-gray-400 line-through">
                          ₹{product.price}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-gray-400">
                      {product.stock > 0 ? `${product.stock} left` : ""}
                    </span>
                  </div>

                  {/* ADD TO CART */}
                  <div className="mt-auto pt-3">
                    <button
                      onClick={() => addToCart(product)}
                      disabled={product.stock === 0}
                      className={`w-full py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
                        product.stock > 0
                          ? "bg-green-700 hover:bg-green-800 text-white active:scale-[0.98]"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <ShoppingCart size={15} />
                      {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SmartFarming;