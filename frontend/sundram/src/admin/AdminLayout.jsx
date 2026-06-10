import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen flex">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-30 transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main */}
      <div className="flex flex-col flex-1 min-h-screen lg:ml-[260px]">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="p-4 sm:p-6 flex-1">
          {children}
        </div>
      </div>

    </div>
  );
}

export default AdminLayout;