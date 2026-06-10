

const HeroSection = () => {
  return (
    <section className="w-full bg-[#f5fff5] py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left */}
          <div>
            <p className="text-green-700 font-semibold mb-3 uppercase tracking-widest">
              Welcome To Sundram Agri
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
              Smart Agriculture <br />
              For Better Future
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              Buy premium quality seeds, fertilizers,
              pesticides and farming products at best prices.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-md transition">
                Shop Now
              </button>

              <button className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-md transition">
                Explore More
              </button>
            </div>
          </div>

          {/* Right */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              alt="Agriculture"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;