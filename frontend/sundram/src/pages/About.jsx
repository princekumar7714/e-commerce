import React from "react";
import {
  Leaf, Tractor, Users, Award, CheckCircle,
  Sprout, Globe, Shield, ArrowRight,
} from "lucide-react";

const About = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white overflow-hidden">

        <div className="absolute inset-0 opacity-15">
          <img src="/banner-img/banner1.jpg" alt="about" className="w-full h-full object-cover" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="max-w-4xl">

            <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 tracking-wide uppercase">
              About Sundram Agri
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
              Empowering Farmers With Modern Agriculture Solutions 🌱
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-green-100 leading-relaxed max-w-3xl">
              Sundram Agri is India's trusted agriculture platform offering premium seeds, fertilizers,
              pesticides, farming tools, and smart farming solutions to help farmers increase productivity and grow better.
            </p>

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-14 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* LEFT IMAGE */}
            <div className="relative">
              <img
                src="/banner-img/banner2.jpg"
                alt="farm"
                className="rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] shadow-2xl w-full h-[260px] sm:h-[380px] lg:h-[520px] object-cover"
              />

              <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-6 bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-7 max-w-[200px] sm:max-w-xs border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Award className="text-green-700" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">15+</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">Years Experience</p>
                  </div>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-6">
                  Helping farmers with trusted agricultural products and expert support across India.
                </p>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="mt-10 lg:mt-0">

              <span className="text-green-700 font-semibold uppercase tracking-[2px] text-xs sm:text-sm">
                Who We Are
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 leading-tight mb-4 sm:mb-6">
                India's Modern Agriculture Marketplace
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 mb-4">
                At Sundram Agri, we believe every farmer deserves access to high-quality products,
                modern technology, and trusted farming guidance.
              </p>

              <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 mb-8">
                Our mission is to connect farmers with premium agriculture products including seeds,
                fertilizers, pesticides, irrigation systems, farming equipment, and crop protection solutions.
              </p>

              <div className="space-y-4 sm:space-y-5">
                {[
                  {
                    title: "Trusted Agriculture Products",
                    desc: "We provide only genuine and trusted farming products from top agricultural brands.",
                  },
                  {
                    title: "Fast Delivery Across India",
                    desc: "Quick and reliable delivery service to thousands of pin codes across the country.",
                  },
                  {
                    title: "Expert Farming Guidance",
                    desc: "Our agriculture experts help farmers choose the right products for better crop growth.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 sm:gap-4">
                    <CheckCircle className="text-green-700 mt-0.5 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-14 sm:py-20 bg-[#f8faf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10 sm:mb-14">
            <span className="text-green-700 font-semibold uppercase tracking-[2px] text-xs sm:text-sm">
              Our Achievements
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 sm:mt-4">
              Growing With Farmers Across India
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: <Users size={28} />, color: "bg-green-100 text-green-700", value: "100K+", label: "Happy Farmers" },
              { icon: <Leaf size={28} />, color: "bg-yellow-100 text-yellow-600", value: "400+", label: "Agriculture Brands" },
              { icon: <Globe size={28} />, color: "bg-blue-100 text-blue-700", value: "9K+", label: "Pin Codes Served" },
              { icon: <Shield size={28} />, color: "bg-red-100 text-red-600", value: "95%", label: "Customer Satisfaction" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl sm:rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-xl transition duration-300 text-center"
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full ${stat.color} flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                  {stat.icon}
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-1 sm:mb-3">
                  {stat.value}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10 sm:mb-16">
            <span className="text-green-700 font-semibold uppercase tracking-[2px] text-xs sm:text-sm">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 sm:mt-4">
              Trusted By Modern Farmers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {[
              {
                icon: <Tractor size={28} />, color: "bg-green-100 text-green-700",
                title: "Modern Farming Tools",
                desc: "Advanced farming equipment and smart solutions for better productivity and efficiency.",
              },
              {
                icon: <Sprout size={28} />, color: "bg-yellow-100 text-yellow-600",
                title: "Premium Crop Solutions",
                desc: "High-quality seeds, fertilizers, pesticides, and crop protection products.",
              },
              {
                icon: <Users size={28} />, color: "bg-blue-100 text-blue-700",
                title: "Expert Farmer Support",
                desc: "Dedicated support team and agriculture experts always ready to help farmers.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#f8faf8] rounded-2xl sm:rounded-[28px] p-7 sm:p-10 hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <div className={`w-13 h-13 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${card.color} flex items-center justify-center mb-4 sm:mb-6 p-3`}>
                  {card.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-7">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-r from-green-800 to-green-700 overflow-hidden text-white">

        <div className="absolute inset-0 opacity-10">
          <img src="/banner-img/banner3.jpg" alt="cta" className="w-full h-full object-cover" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">

          <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
            Join With Us
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
            Let's Build The Future Of Farming Together
          </h2>

          <p className="text-green-100 text-base sm:text-lg md:text-xl leading-7 sm:leading-8 max-w-3xl mx-auto mb-8 sm:mb-10">
            Explore premium agriculture products and smart farming solutions designed for modern farmers.
          </p>

          <button className="bg-white hover:bg-gray-100 text-green-800 px-7 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg inline-flex items-center gap-2 sm:gap-3 transition duration-300 shadow-2xl">
            Explore Products
            <ArrowRight size={20} />
          </button>

        </div>
      </section>
    </>
  );
};

export default About;