import React from "react";
import AdminLayout from "./AdminLayout";
import {
  Image,
  Plus,
  Edit,
  Trash2,
} from "lucide-react";

function Banners() {
  const banners = [
    {
      id: 1,
      title: "Summer Farming Sale",
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
      status: "Active",
    },
    {
      id: 2,
      title: "Seeds Collection",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
      status: "Active",
    },
    {
      id: 3,
      title: "Organic Fertilizers",
      image:
        "https://images.unsplash.com/photo-1589927986089-35812388d1f4",
      status: "Inactive",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">
            Banner Management
          </h2>

          <button className="bg-green-600 text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-green-700">
            <Plus size={18} />
            Add Banner
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <Image
              size={35}
              className="text-blue-500"
            />
            <h3 className="text-3xl font-bold mt-3">
              {banners.length}
            </h3>
            <p className="text-gray-500">
              Total Banners
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-green-600">
              2
            </h3>
            <p className="text-gray-500">
              Active Banners
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-red-500">
              1
            </h3>
            <p className="text-gray-500">
              Inactive Banners
            </p>
          </div>

        </div>

        {/* Banner List */}
        <div className="bg-white rounded-xl shadow p-6">

          <h3 className="text-xl font-semibold mb-6">
            All Banners
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {banners.map((banner) => (
              <div
                key={banner.id}
                className="border rounded-xl overflow-hidden shadow-sm"
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">

                  <h4 className="font-bold text-lg">
                    {banner.title}
                  </h4>

                  <div className="mt-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        banner.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {banner.status}
                    </span>
                  </div>

                  <div className="flex gap-3 mt-4">

                    <button className="flex-1 bg-blue-100 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition flex items-center justify-center gap-2">
                      <Edit size={16} />
                      Edit
                    </button>

                    <button className="flex-1 bg-red-100 text-red-600 py-2 rounded-lg hover:bg-red-600 hover:text-white transition flex items-center justify-center gap-2">
                      <Trash2 size={16} />
                      Delete
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </AdminLayout>
  );
}

export default Banners;