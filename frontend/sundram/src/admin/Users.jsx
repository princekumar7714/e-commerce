import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";
import { Users as UsersIcon, Mail, Phone, Trash2 } from "lucide-react";

function Users() {
  const [users, setUsers] = useState([]);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://sundram-backend-1.onrender.com/api/auth/allusers");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    setDeletingId(userId);
    try {
      await axios.delete(`https://sundram-backend-1.onrender.com/api/auth/deleteuser/${userId}`);
      setUsers((prev) => prev.filter((u) => u._id !== userId));
    } catch (error) {
      console.log(error);
      alert("Failed to delete user. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <AdminLayout>
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow">

        {/* HEADER */}
        <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Users Management
          </h2>
          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold text-sm">
            Total Users: {users.length}
          </div>
        </div>

        {/* TABLE — desktop */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left py-3 px-3 font-semibold text-gray-600">User</th>
                <th className="text-left py-3 px-3 font-semibold text-gray-600">Email</th>
                <th className="text-left py-3 px-3 font-semibold text-gray-600">Phone</th>
                <th className="text-left py-3 px-3 font-semibold text-gray-600">Role</th>
                <th className="text-left py-3 px-3 font-semibold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b hover:bg-gray-50 transition">

                  <td className="py-4 px-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <UsersIcon size={16} className="text-green-600" />
                      </div>
                      <span className="font-medium text-gray-800">{user.name}</span>
                    </div>
                  </td>

                  <td className="py-4 px-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail size={14} />
                      {user.email}
                    </div>
                  </td>

                  <td className="py-4 px-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone size={14} />
                      {user.phone || "N/A"}
                    </div>
                  </td>

                  <td className="py-4 px-3">
                    {user.isAdmin ? (
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                        Admin
                      </span>
                    ) : (
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                        User
                      </span>
                    )}
                  </td>

                  <td className="py-4 px-3">
                    {!user.isAdmin && (
                      <button
                        onClick={() => handleDelete(user._id)}
                        disabled={deletingId === user._id}
                        className="flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-600 px-3 py-1.5 rounded-lg text-xs font-semibold transition disabled:opacity-50"
                      >
                        <Trash2 size={13} />
                        {deletingId === user._id ? "Deleting..." : "Delete"}
                      </button>
                    )}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CARDS — mobile */}
        <div className="sm:hidden space-y-3">
          {users.map((user) => (
            <div key={user._id} className="border border-gray-100 rounded-xl p-4 shadow-sm">

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <UsersIcon size={16} className="text-green-600" />
                  </div>
                  <span className="font-semibold text-gray-800">{user.name}</span>
                </div>
                {user.isAdmin ? (
                  <span className="bg-red-100 text-red-600 px-2.5 py-1 rounded-full text-xs font-semibold">
                    Admin
                  </span>
                ) : (
                  <span className="bg-green-100 text-green-600 px-2.5 py-1 rounded-full text-xs font-semibold">
                    User
                  </span>
                )}
              </div>

              <div className="space-y-1.5 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-2">
                  <Mail size={13} />
                  <span className="truncate">{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} />
                  <span>{user.phone || "N/A"}</span>
                </div>
              </div>

              {!user.isAdmin && (
                <button
                  onClick={() => handleDelete(user._id)}
                  disabled={deletingId === user._id}
                  className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 py-2 rounded-lg text-sm font-semibold transition disabled:opacity-50"
                >
                  <Trash2 size={14} />
                  {deletingId === user._id ? "Deleting..." : "Delete User"}
                </button>
              )}

            </div>
          ))}
        </div>

      </div>
    </AdminLayout>
  );
}

export default Users;