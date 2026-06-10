import React from "react";

function ExclusiveOffers() {
  const offers = [
    {
      image:
        "https://media.bighaat.com/anm/c7a64026-fac4-4a30-ba68-cd434f83abf8.webp",
    },
    {
      image:
        "https://media.bighaat.com/anm/45d2b50f-6585-4b6f-b544-2c76dbfac180.webp?q=80&w=1920&format=webp",
    },
    {
      image:
        "https://media.bighaat.com/anm/42e6b290-093e-443b-9093-2e393d5f6256.webp?q=80&w=1920&format=webp",
    },
    {
      image:
        "https://media.bighaat.com/anm/a1b0e993-76d9-4a38-9fb4-00ecfe68310d.webp?q=80&w=1920&format=webp",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              Exclusive Offers
            </h2>

            <p className="text-gray-500 mt-2">
              Special deals and discounts for farmers
            </p>
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition">
            View All Offers
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition duration-500"
            >
              <img
                src={offer.image}
                alt={`Offer ${index + 1}`}
                className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute top-4 left-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                  Exclusive Offer
                </span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-lg font-bold mb-2">
                  Limited Time Deal
                </h3>

                <button className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExclusiveOffers;