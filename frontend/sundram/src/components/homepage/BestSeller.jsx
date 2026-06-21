import  { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "../../context/CartContext";

const BestSeller = () => {
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
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-xl font-semibold">
            Loading Products...
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Best Selling
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Best prices available today.
            </p>
          </div>

          <Link
            to="/products"
            className="text-green-700 hover:text-green-800 font-semibold text-sm"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

          {products.map((product) => {
            const discountedPrice =
              product.discount > 0
                ? product.price -
                  (product.price * product.discount) / 100
                : product.price;

            const savings =
              product.discount > 0
                ? product.price - discountedPrice
                : 0;

            return (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col h-[380px]"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative">
                    <img
                      src={getProductImage(product)}
                      alt={product.name}
                      className="w-full h-44 object-cover"
                    />

                    {product.discount > 0 && (
                      <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                        {product.discount}% OFF
                      </div>
                    )}
                  </div>
                </Link>

                <div className="p-3 flex flex-col flex-1">

                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-sm font-semibold text-gray-800 h-10 overflow-hidden hover:text-green-700">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-1 mt-2">
                    <Star
                      size={12}
                      className="text-yellow-400 fill-yellow-400"
                    />
                    <span className="text-xs text-gray-600">
                      {product.rating || 0} ★
                    </span>
                  </div>

                  <div className="mt-3">
                    <span className="text-lg font-bold text-green-700">
                      ₹{discountedPrice}
                    </span>

                    {product.discount > 0 && (
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500 line-through">
                          ₹{product.price}
                        </span>

                        <span className="text-xs text-green-600">
                          Save ₹{Math.round(savings)}
                        </span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    disabled={product.stock === 0}
                    className={`mt-auto w-full flex items-center justify-center gap-2 py-2 rounded text-sm font-semibold transition ${
                      product.stock > 0
                        ? "bg-green-700 hover:bg-green-800 text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <ShoppingCart size={15} />
                    {product.stock > 0
                      ? "Add to Cart"
                      : "Out of Stock"}
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

export default BestSeller;