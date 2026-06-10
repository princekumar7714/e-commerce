import React from "react";
import { Link } from "react-router-dom";

const pestData = [
  {
    id: 1,
    name: "Insecticides",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500",
  },
  {
    id: 2,
    name: "Fungicides",
    image:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=500",
  },
  {
    id: 3,
    name: "Herbicides",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500",
  },
  {
    id: 4,
    name: "Plant Growth",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=500",
  },
  {
    id: 5,
    name: "Bio Products",
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=500",
  },
  {
    id: 6,
    name: "Micronutrients",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500",
  },
];

const PestDisease = () => {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Heading */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Shop By PestDisease
            </h2>
            <p className="text-gray-500 mt-2">
              Explore top agricultural products for better crop yield
            </p>
          </div>

          <Link
            to="/products"
            className="text-green-700 font-semibold hover:text-green-800"
          >
            View All →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

          {pestData.map((item) => (
            <Link
              key={item.id}
              to="/products"
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 group"
            >
              <div className="h-44 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800 group-hover:text-green-700 transition">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PestDisease;