import React from "react";

function AgricultureStats() {
  const stats = [
    {
      number: "400+",
      label: "Brands",
    },
    {
      number: "30M+",
      label: "Farmers Served",
    },
    {
      number: "9K+",
      label: "Products",
    },
    {
      number: "95%+",
      label: "Pincodes Served",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-700 to-green-500">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <p className="text-yellow-300 font-semibold uppercase tracking-widest">
            INDIA'S LARGEST AGRICULTURE PLATFORM
          </p>

          <h2 className="text-4xl font-bold text-white mt-3">
            Empowering Farmers Across India
          </h2>

          <p className="text-green-100 mt-4 max-w-2xl mx-auto">
            Delivering quality agricultural products, trusted brands,
            and innovative farming solutions to every corner of India.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center hover:scale-105 transition duration-300"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                {item.number}
              </h3>

              <p className="text-green-100 mt-3 text-lg">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AgricultureStats;