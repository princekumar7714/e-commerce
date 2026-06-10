import { useParams } from "react-router-dom";

function SprayerDetails() {
  const { id } = useParams();

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
      description:
        "Powerful single motor battery sprayer suitable for farming, gardening and pesticide spraying.",
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
      description:
        "Dual mode battery sprayer with excellent pressure and long battery backup.",
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
      description:
        "Double motor sprayer designed for large farms and professional use.",
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
      description:
        "20 litre capacity battery sprayer with strong performance and durability.",
    },
  ];

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="text-center py-20 text-2xl">
        Product Not Found
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-5 py-10">
      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        <div>
          <p className="text-green-600 font-semibold">
            {product.brand}
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {product.name}
          </h1>

          <div className="mt-3">
            ⭐ {product.rating} ({product.reviews} Reviews)
          </div>

          <div className="mt-5">
            <span className="text-4xl font-bold text-green-700">
              ₹{product.price}
            </span>

            <span className="ml-4 text-xl line-through text-gray-400">
              ₹{product.oldPrice}
            </span>
          </div>

          <p className="text-green-600 mt-2">
            Save ₹{product.oldPrice - product.price}
          </p>

          <div className="mt-5">
            <strong>Size:</strong> {product.size}
          </div>

          <p className="mt-5 text-gray-600">
            {product.description}
          </p>

          <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl">
            Add To Cart
          </button>
        </div>

      </div>
    </section>
  );
}

export default SprayerDetails;