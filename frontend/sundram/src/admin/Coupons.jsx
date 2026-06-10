import React from "react";
import AdminLayout from "./AdminLayout";
import {
  Ticket,
  Plus,
  Edit,
  Trash2,
  Copy,
} from "lucide-react";

function Coupons() {
  const coupons = [
    {
      id: 1,
      code: "WELCOME10",
      discount: 10,
      expiry: "31 Dec 2026",
      status: "Active",
    },
    {
      id: 2,
      code: "FARM20",
      discount: 20,
      expiry: "15 Jul 2026",
      status: "Active",
    },
    {
      id: 3,
      code: "OLD50",
      discount: 50,
      expiry: "01 Jan 2025",
      status: "Expired",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">
            Coupon Management
          </h2>

          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg flex items-center gap-2">
            <Plus size={18} />
            Add Coupon
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <Ticket
              size={35}
              className="text-blue-500"
            />
            <h3 className="text-3xl font-bold mt-3">
              {coupons.length}
            </h3>
            <p className="text-gray-500">
              Total Coupons
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-green-600">
              2
            </h3>
            <p className="text-gray-500">
              Active Coupons
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-red-600">
              1
            </h3>
            <p className="text-gray-500">
              Expired Coupons
            </p>
          </div>

        </div>

        {/* Coupon Table */}
        <div className="bg-white rounded-xl shadow p-6">

          <h3 className="text-xl font-semibold mb-6">
            All Coupons
          </h3>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">
                    Coupon Code
                  </th>

                  <th className="text-left py-3">
                    Discount
                  </th>

                  <th className="text-left py-3">
                    Expiry Date
                  </th>

                  <th className="text-left py-3">
                    Status
                  </th>

                  <th className="text-left py-3">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>

                {coupons.map((coupon) => (
                  <tr
                    key={coupon.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="py-4 font-semibold flex items-center gap-2">
                      {coupon.code}

                      <button className="text-gray-500 hover:text-black">
                        <Copy size={16} />
                      </button>
                    </td>

                    <td>
                      {coupon.discount}% OFF
                    </td>

                    <td>
                      {coupon.expiry}
                    </td>

                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          coupon.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {coupon.status}
                      </span>
                    </td>

                    <td>
                      <div className="flex gap-2">

                        <button className="bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
                          <Edit size={16} />
                        </button>

                        <button className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-600 hover:text-white transition">
                          <Trash2 size={16} />
                        </button>

                      </div>
                    </td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </AdminLayout>
  );
}

export default Coupons;