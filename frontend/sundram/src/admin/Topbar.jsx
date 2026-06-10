import { Bell, Search, Menu } from "lucide-react";

function Topbar({ onMenuClick }) {
  return (
    <div className="bg-white shadow px-4 sm:px-6 py-3 flex justify-between items-center sticky top-0 z-10">

      <div className="flex items-center gap-3">
        {/* Hamburger — only on mobile */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
        >
          <Menu size={22} />
        </button>

        <h1 className="text-lg sm:text-2xl font-bold text-gray-800">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search — hidden on small mobile, visible sm+ */}
        <div className="relative hidden sm:block">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 border rounded-lg outline-none text-sm w-40 lg:w-56 focus:border-green-400"
          />
        </div>

        <Bell size={20} className="cursor-pointer text-gray-600" />

        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full"
        />
      </div>

    </div>
  );
}

export default Topbar;