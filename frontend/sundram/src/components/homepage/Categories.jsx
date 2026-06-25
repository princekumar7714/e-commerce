
import { Link } from "react-router-dom";

const categories = [
  {
    title: "others",
    image: "https://media.bighaat.com/wsfbanners/ec9db2d0-d70c-41ae-abf0-83a286c1de05.webp?w=1920&q=80&format=webp",
    path: "/products/seeds",
    itemCount: "500+"
  },
  {
    title: "Urban Gardening",
    image: "https://media.bighaat.com/wsfbanners/fd346170-e4c2-42bb-a47c-f5a91b2116d3.webp?w=1920&q=80&format=webp",
    path: "/products/pesticides",
    itemCount: "300+"
  },
  {
    title: "Sprayers",
    image: "https://media.bighaat.com/wsfbanners/SPRAYERS_Image.webp?w=1920&q=80&format=webp",
    path: "/products/fertilizers",
    itemCount: "400+"
  },
  {
    title: "Insecticides",
    image: "https://media.bighaat.com/wsfbanners/f74bb722-23ff-4cfa-8a4f-09a817617c5f.webp?w=1920&q=80&format=webp",
    path: "/products/tools",
    itemCount: "200+"
  },
  {
    title: "Organic Farming",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop",
    path: "/products/seeds",
    itemCount: "150+"
  },
  {
    title: "Herbicides",
    image: "https://media.bighaat.com/wsfbanners/f294b1e7-1cd2-4895-8b6f-d50fe172ddd1.webp?w=1920&q=80&format=webp",
    path: "/products/fertilizers",
    itemCount: "100+"
  },
  {
    title: "Nutrients",
    image: "https://media.bighaat.com/wsfbanners/45e90225-8767-44f7-a3de-c1f5d186ae16.webp?w=1920&q=80&format=webp",
    path: "/products/tools",
    itemCount: "80+"
  },
  {
    title: "Fungicides",
    image: "https://media.bighaat.com/wsfbanners/97c1397e-0e1a-4c66-8d63-229a983de12b.webp?w=1920&q=80&format=webp",
    path: "/products/seeds",
    itemCount: "250+"
  },
];

const Categories = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
          <Link
            to={`/products`}
            className="text-green-700 hover:text-green-800 font-semibold text-sm"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {categories.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="text-white font-semibold text-sm">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-xs">{item.itemCount}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;