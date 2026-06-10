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

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
  `http://localhost:5000/products/getsingleproduct/${id}`
);

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl p-8 shadow-lg">

          {/* Image */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-contain"
            />
          </div>

          {/* Content */}
          <div>

            {product.discount > 0 && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                {product.discount}% OFF
              </span>
            )}

            <h1 className="text-4xl font-bold text-gray-900 mt-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-4">
              <Star
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
              <span>{product.rating || 4.5}</span>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-4xl font-bold text-green-700">
                ₹{Math.round(discountedPrice)}
              </span>

              {product.discount > 0 && (
                <span className="text-xl text-gray-400 line-through">
                  ₹{product.price}
                </span>
              )}
            </div>

            <div className="mt-4">
              <span
                className={`font-semibold ${
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

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">
                Description
              </h3>

              <p className="text-gray-600 leading-7">
                {product.description}
              </p>
            </div>

            <button
              onClick={() => addToCart(product)}
              disabled={product.stock === 0}
              className={`mt-8 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 ${
                product.stock > 0
                  ? "bg-green-700 hover:bg-green-800 text-white"
                  : "bg-gray-300 text-gray-500"
              }`}
            >
              <ShoppingCart size={20} />
              Add To Cart
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;