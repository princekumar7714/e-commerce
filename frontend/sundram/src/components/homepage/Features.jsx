import React from "react";
import {
  Truck,
  ShieldCheck,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    title: "Fast Delivery",
    icon: <Truck size={35} />,
  },
  {
    title: "Secure Payment",
    icon: <ShieldCheck size={35} />,
  },
  {
    title: "Premium Quality",
    icon: <BadgeCheck size={35} />,
  },
  {
    title: "24/7 Support",
    icon: <Headphones size={35} />,
  },
];

const Features = () => {
  return (
    <section className="bg-green-700 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-2xl p-8 text-center backdrop-blur-sm"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;