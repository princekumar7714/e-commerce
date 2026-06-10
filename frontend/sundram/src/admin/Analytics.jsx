import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";
import {
  IndianRupee,
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
} from "lucide-react";

function Analytics() {
  const [analytics, setAnalytics] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalProducts: 0,
  });

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/analytics"
      );

      setAnalytics(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold">
            Analytics Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Monitor your store performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl p-6 shadow">
            <IndianRupee
              size={35}
              className="text-green-600"
            />

            <h2 className="text-3xl font-bold mt-4">
              ₹{analytics.totalRevenue}
            </h2>

            <p className="text-gray-500">
              Total Revenue
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <ShoppingCart
              size={35}
              className="text-blue-600"
            />

            <h2 className="text-3xl font-bold mt-4">
              {analytics.totalOrders}
            </h2>

            <p className="text-gray-500">
              Total Orders
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <Users
              size={35}
              className="text-purple-600"
            />

            <h2 className="text-3xl font-bold mt-4">
              {analytics.totalUsers}
            </h2>

            <p className="text-gray-500">
              Registered Users
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <Package
              size={35}
              className="text-orange-600"
            />

            <h2 className="text-3xl font-bold mt-4">
              {analytics.totalProducts}
            </h2>

            <p className="text-gray-500">
              Products
            </p>
          </div>

        </div>

        <div className="bg-white rounded-xl p-6 shadow">

          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="text-green-600" />

            <h2 className="text-xl font-semibold">
              Revenue Overview
            </h2>
          </div>

          <div className="text-5xl font-bold text-green-600">
            ₹{analytics.totalRevenue}
          </div>

          <p className="text-gray-500 mt-2">
            Total Revenue Generated
          </p>

        </div>

      </div>
    </AdminLayout>
  );
}

export default Analytics;