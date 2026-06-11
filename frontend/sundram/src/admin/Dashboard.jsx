import AdminLayout from "./AdminLayout";
import {
  Package,
  ShoppingCart,
  Users,
  IndianRupee,
  TrendingUp,
} from "lucide-react";

import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [statsData, setStatsData] = useState({
    totalProducts: 0,
    totalUsers: 0,
    totalOrders: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const res = await axios.get("https://sundram-backend-1.onrender.com/api/dashboard/stats");
      setStatsData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const stats = [
    {
      title: "Total Products",
      value: statsData.totalProducts,
      icon: <Package size={24} />,
      color: "bg-blue-500",
      growth: "+12%",
    },
    {
      title: "Total Orders",
      value: statsData.totalOrders,
      icon: <ShoppingCart size={24} />,
      color: "bg-green-500",
      growth: "+18%",
    },
    {
      title: "Customers",
      value: statsData.totalUsers,
      icon: <Users size={24} />,
      color: "bg-purple-500",
      growth: "+8%",
    },
    {
      title: "Revenue",
      value: `₹${statsData.totalRevenue.toLocaleString("en-IN")}`,
      icon: <IndianRupee size={24} />,
      color: "bg-orange-500",
      growth: "+25%",
    },
  ];

  return (
    <AdminLayout>
      <div className="w-full px-0">

        {/* HEADER */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Dashboard Overview
          </h1>
          <p className="text-gray-500 mt-1 text-sm sm:text-base">
            Welcome back 👋 Here's what's happening today.
          </p>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-5 mb-6 sm:mb-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4 sm:p-5 border border-gray-100"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-gray-500 text-xs sm:text-sm truncate">
                    {item.title}
                  </p>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-1 sm:mt-2 text-gray-900 truncate">
                    {item.value}
                  </h2>
                  <div className="flex items-center gap-1 mt-2 sm:mt-3 text-green-600 text-xs sm:text-sm font-medium">
                    <TrendingUp size={13} />
                    {item.growth}
                  </div>
                </div>
                <div
                  className={`${item.color} w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex-shrink-0 flex items-center justify-center text-white`}
                >
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* OVERVIEW CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
            <h2 className="text-base sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              Revenue Overview
            </h2>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-600 truncate">
              ₹{statsData.totalRevenue.toLocaleString("en-IN")}
            </div>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Total Revenue Generated
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
            <h2 className="text-base sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              Orders Overview
            </h2>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600">
              {statsData.totalOrders}
            </div>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Total Orders Received
            </p>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}

export default Dashboard;