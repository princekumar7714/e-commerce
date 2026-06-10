import React from "react";
import { Link } from "react-router-dom";

const OrganicSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          <div>
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=500&fit=crop"
              alt="Organic Farming"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
          </div>

          <div>
            <p className="text-green-700 font-semibold uppercase tracking-wider text-sm">
              Organic Farming
            </p>

            <h2 className="text-3xl font-bold mt-2 text-gray-800">
              Healthy Crops, Healthy Future
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We provide eco-friendly and organic farming products that improve crop quality and productivity while protecting the environment.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">100% Organic Products</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">Chemical-Free Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700">Expert Guidance</span>
              </div>
            </div>

            <Link
              to="/products/seeds"
              className="inline-block mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-semibold transition"
            >
              Explore Organic Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganicSection;