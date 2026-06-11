import AdminLayout from "./AdminLayout";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  ShoppingCart,
  Eye,
  CheckCircle,
  Clock,
  Truck,
  X,
} from "lucide-react";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "https://sundram-backend-1.onrender.com/api/orders/all"
      );

      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

 const updateOrderStatus = async (orderId, status) => {
  try {
    await axios.put(
      `https://sundram-backend-1.onrender.com/api/orders/${orderId}/status`,
      {
        orderStatus: status,
      }
    );

    fetchOrders();

    setSelectedOrder({
      ...selectedOrder,
      orderStatus: status,
    });

    alert("Order Status Updated");
  } catch (error) {
    console.log(error);
  }
};
  return (
    <>
      <AdminLayout>
        <div className="space-y-6">

          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">
              Orders Management
            </h2>

            <div className="bg-green-600 text-white px-4 py-2 rounded-lg">
              Total Orders: {orders.length}
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <CheckCircle
                size={35}
                className="text-green-500"
              />
              <h3 className="text-3xl font-bold mt-3">
                {
                  orders.filter(
                    (o) => o.orderStatus === "Completed"
                  ).length
                }
              </h3>
              <p className="text-gray-500">
                Completed Orders
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <Clock
                size={35}
                className="text-yellow-500"
              />
              <h3 className="text-3xl font-bold mt-3">
                {
                  orders.filter(
                    (o) => o.orderStatus === "Pending"
                  ).length
                }
              </h3>
              <p className="text-gray-500">
                Pending Orders
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <Truck
                size={35}
                className="text-blue-500"
              />
              <h3 className="text-3xl font-bold mt-3">
                {
                  orders.filter(
                    (o) => o.orderStatus === "Shipped"
                  ).length
                }
              </h3>
              <p className="text-gray-500">
                Shipped Orders
              </p>
            </div>

          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-xl shadow p-6">

            <div className="flex items-center gap-3 mb-6">
              <ShoppingCart className="text-green-600" />
              <h3 className="text-xl font-semibold">
                Recent Orders
              </h3>
            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3">
                      Order ID
                    </th>

                    <th className="text-left py-3">
                      Customer
                    </th>

                    <th className="text-left py-3">
                      Amount
                    </th>

                    <th className="text-left py-3">
                      Date
                    </th>

                    <th className="text-left py-3">
                      Status
                    </th>

                    <th className="text-left py-3">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {orders.map((order) => (
                    <tr
                      key={order._id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="py-4">
                        #{order._id.slice(-6)}
                      </td>

                      <td>
                        {order.shippingAddress?.fullName}
                      </td>

                      <td>
                        ₹{order.totalPrice}
                      </td>

                      <td>
                        {new Date(
                          order.createdAt
                        ).toLocaleDateString()}
                      </td>

                      <td>
                        <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">
                          {order.orderStatus}
                        </span>
                      </td>

                      <td>
                        <button
                          onClick={() => {
                            setSelectedOrder(order);
                            setShowModal(true);
                          }}
                          className="bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
                        >
                          <Eye size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>
      </AdminLayout>

      {/* ORDER DETAILS MODAL */}

      {showModal && selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-2xl w-full max-w-3xl p-6 max-h-[90vh] overflow-y-auto">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold">
                Order Details
              </h2>

              <button
                onClick={() =>
                  setShowModal(false)
                }
              >
                <X className="text-red-500" />
              </button>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <h3 className="font-bold mb-3">
                  Customer Details
                </h3>

                <p>
                  <strong>Name:</strong>{" "}
                  {selectedOrder.shippingAddress?.fullName}
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  {selectedOrder.shippingAddress?.phone}
                </p>

                <p>
                  <strong>Address:</strong>{" "}
                  {selectedOrder.shippingAddress?.address}
                </p>

                <p>
                  <strong>City:</strong>{" "}
                  {selectedOrder.shippingAddress?.city}
                </p>

                <p>
                  <strong>State:</strong>{" "}
                  {selectedOrder.shippingAddress?.state}
                </p>

                <p>
                  <strong>Pincode:</strong>{" "}
                  {selectedOrder.shippingAddress?.pincode}
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-3">
                  Order Info
                </h3>

                <p>
                  <strong>Payment:</strong>{" "}
                  {selectedOrder.paymentMethod}
                </p>

              <div className="mt-3">
  <label className="font-bold block mb-2">
    Order Status
  </label>

  <select
    value={selectedOrder.orderStatus}
    onChange={(e) =>
      updateOrderStatus(
        selectedOrder._id,
        e.target.value
      )
    }
    className="border p-2 rounded-lg w-full"
  >
    <option value="Pending">
      Pending
    </option>

    <option value="Processing">
      Processing
    </option>

    <option value="Shipped">
      Shipped
    </option>

    <option value="Completed">
      Completed
    </option>

    <option value="Cancelled">
      Cancelled
    </option>
  </select>
</div>

                <p>
                  <strong>Total:</strong> ₹
                  {selectedOrder.totalPrice}
                </p>

                <p>
                  <strong>Paid:</strong>{" "}
                  {selectedOrder.isPaid
                    ? "Yes"
                    : "No"}
                </p>
              </div>

            </div>

            <div className="mt-6">

              <h3 className="font-bold mb-3">
                Ordered Products
              </h3>

              {selectedOrder.orderItems?.map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 border p-3 rounded-xl mb-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />

                    <div>
                      <h4 className="font-semibold">
                        {item.name}
                      </h4>

                      <p>
                        Qty : {item.qty}
                      </p>

                      <p>
                        ₹{item.price}
                      </p>
                    </div>
                  </div>
                )
              )}

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default Orders;