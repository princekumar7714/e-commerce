import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
  Image,
  Ticket,
  BarChart3,
  X,
} from "lucide-react";

const Sidebar = ({ onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage clear
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("admin");

    // sessionStorage clear
    sessionStorage.clear();

    // login page redirect
    navigate("/login");
  };

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, name: "Dashboard", path: "/admin" },
    { icon: <Package size={20} />, name: "Products", path: "/admin/products" },
    { icon: <ShoppingCart size={20} />, name: "Orders", path: "/admin/orders" },
    { icon: <Users size={20} />, name: "Users", path: "/admin/users" },
    { icon: <Image size={20} />, name: "Banners", path: "/admin/banners" },
    { icon: <Ticket size={20} />, name: "Coupons", path: "/admin/coupons" },
    { icon: <BarChart3 size={20} />, name: "Analytics", path: "/admin/analytics" },
    { icon: <Settings size={20} />, name: "Settings", path: "/admin/settings" },
  ];

  return (
    <div className="w-[260px] bg-[#111827] text-white h-full flex flex-col">

      {/* Logo */}
      <div className="p-5 border-b border-gray-700 flex items-center justify-between">
        <h2 className="text-xl font-bold text-green-400">
          Sundram Admin
        </h2>

        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white p-1"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Menu */}
      <div className="p-4 flex-1 overflow-y-auto">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={onClose}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition text-sm ${
              location.pathname === item.path
                ? "bg-green-600 text-white"
                : "hover:bg-gray-800 text-gray-300"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 bg-red-500 rounded-lg hover:bg-red-600 transition text-sm"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>

    </div>
  );
};

export default Sidebar;