import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SprayersSection() {
    const navigate = useNavigate();
const products = [
{
id: 1,
name: "Tapas Pahalwaan 101 - Single Motor Battery Sprayer",
brand: "Tapas",
image:
"https://media.bighaat.com/anm/42e6b290-093e-443b-9093-2e393d5f6256.webp?q=80&w=1920&format=webp",
rating: 4.1,
reviews: 82,
price: 2599,
oldPrice: 4999,
size: "1 Unit",
discount: "48% OFF",
},
{
id: 2,
name: "Tapas Pahalwaan 102 2-in-1 Battery Sprayer",
brand: "Tapas",
image:
"https://media.bighaat.com/anm/c7a64026-fac4-4a30-ba68-cd434f83abf8.webp",
rating: 4.2,
reviews: 45,
price: 2600,
oldPrice: 5499,
size: "One Unit",
discount: "53% OFF",
},
{
id: 3,
name: "Tapas Pahalwaan 202 Double Motor Battery Sprayer",
brand: "Tapas",
image:
"https://media.bighaat.com/anm/45d2b50f-6585-4b6f-b544-2c76dbfac180.webp?q=80&w=1920&format=webp",
rating: 4.3,
reviews: 87,
price: 3250,
oldPrice: 6499,
size: "One Unit",
discount: "50% OFF",
},
{
id: 4,
name: "Tapas Pahalwaan 201 Battery Sprayer – 20L",
brand: "Tapas",
image:
"https://media.bighaat.com/anm/a1b0e993-76d9-4a38-9fb4-00ecfe68310d.webp?q=80&w=1920&format=webp",
rating: 4.5,
reviews: 10,
price: 2383,
oldPrice: 4999,
size: "1 Unit",
discount: "52% OFF",
},
];

return ( <section className="py-16 bg-gray-50"> <div className="max-w-[1400px] mx-auto px-4">

```
    <div className="flex flex-col md:flex-row justify-between items-center mb-10">
      <div>
        <h2 className="text-4xl font-bold text-gray-800">
          Sprayers
        </h2>

        <p className="text-gray-500 mt-2">
          Reliable Sprayers Built for Indian Farms
        </p>
      </div>

      <button className="mt-4 md:mt-0 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition">
        View All
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {products.map((product) => (
  <div
    key={product.id}
    onClick={() => navigate(`/sprayer/${product.id}`)}
    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group cursor-pointer"
  >
          <div className="relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />

            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">
              {product.discount}
            </span>
          </div>

          <div className="p-5">

            <div className="flex items-center gap-2 text-sm mb-2">
              <span className="text-yellow-500 font-semibold">
                ★ {product.rating}
              </span>

              <span className="text-gray-500">
                | {product.reviews} Reviews
              </span>
            </div>

            <h3 className="font-semibold text-gray-800 min-h-[60px]">
              {product.name}
            </h3>

            <p className="text-green-700 text-sm font-medium mt-2">
              {product.brand}
            </p>

            <div className="mt-4">
              <span className="text-2xl font-bold text-gray-900">
                ₹{product.price}
              </span>

              <span className="ml-3 text-gray-400 line-through">
                ₹{product.oldPrice}
              </span>
            </div>

            <p className="text-green-600 text-sm font-medium mt-1">
              Save ₹{product.oldPrice - product.price}
            </p>

            <div className="mt-4 flex justify-between items-center">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {product.size}
              </span>

              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
                Add To Cart
              </button>
            </div>

          </div>
        </div>
      ))}

    </div>
  </div>
</section>

);
}

export default SprayersSection;
