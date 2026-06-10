import { Link } from "react-router-dom";
import logo from "../assets/sundram-logo.png"; 

import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Phone,
} from "lucide-react";

import { useEffect, useState } from "react";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  // NEW STATES
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const { getCartCount } = useCart();
  const { user, logout, isAuthenticated } = useAuth();

  // SCROLL EFFECT
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      // background shadow
      if (currentScroll > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // hide navbar on scroll down
      if (currentScroll > lastScroll && currentScroll > 120) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setMobileMenu(false);
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500
          ${
            showNavbar
              ? "translate-y-0"
              : "-translate-y-full"
          }
          ${
            isScrolled
              ? "bg-white shadow-xl"
              : "bg-white/95 backdrop-blur-md"
          }
        `}
      >

        {/* TOP BAR */}
        <div className="hidden md:block bg-green-800 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">

            <div className="flex items-center justify-between text-xs">

              <div className="flex items-center gap-2">
                <Phone size={13} />
                <span>
                  Missed Call To Order: 1800-3000-2434
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  to="/contact"
                  className="hover:text-green-200 transition"
                >
                  Track Order
                </Link>

                <span>|</span>

                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className="hover:text-green-200 transition"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="hover:text-green-200 transition"
                  >
                    Login
                  </Link>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          <div className="flex items-center justify-between h-[75px]">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3"
            >

              <img
                src={logo}
                alt="Sundram Agri"
                className="w-14 h-14 object-contain"
              />

              <div>
                <h1 className="text-2xl font-bold text-green-800">
                  Sundram Agri
                </h1>

                <p className="text-[10px] uppercase tracking-[2px] text-gray-500">
                  Agriculture Store
                </p>
              </div>

            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-8">

              <Link
                to="/"
                className="text-[15px] font-semibold text-gray-700 hover:text-green-700 transition"
              >
                Home
              </Link>

              {/* CATEGORY DROPDOWN */}
              <div className="relative group">

                <button className="flex items-center gap-1 text-[15px] font-semibold text-gray-700 hover:text-green-700 transition">
                  Categories
                  <ChevronDown size={15} />
                </button>

                <div className="absolute top-10 left-0 bg-white shadow-2xl rounded-xl w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 overflow-hidden">

                  <Link
                    to="/products/seeds"
                    className="block px-5 py-4 hover:bg-green-50 text-sm"
                  >
                    Seeds
                  </Link>

                  <Link
                    to="/products/fertilizers"
                    className="block px-5 py-4 hover:bg-green-50 text-sm"
                  >
                    Fertilizers
                  </Link>

                  <Link
                    to="/products/pesticides"
                    className="block px-5 py-4 hover:bg-green-50 text-sm"
                  >
                    Pesticides
                  </Link>

                  <Link
                    to="/products/tools"
                    className="block px-5 py-4 hover:bg-green-50 text-sm"
                  >
                    Farming Tools
                  </Link>

                </div>
              </div>

              <Link
                to="/products"
                className="text-[15px] font-semibold text-gray-700 hover:text-green-700 transition"
              >
                Products
              </Link>

              <Link
                to="/about"
                className="text-[15px] font-semibold text-gray-700 hover:text-green-700 transition"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-[15px] font-semibold text-gray-700 hover:text-green-700 transition"
              >
                Contact
              </Link>

              {isAuthenticated && user?.isAdmin && (
                <Link
                  to="/admin"
                  className="text-[15px] font-semibold text-gray-700 hover:text-green-700 transition"
                >
                  Admin
                </Link>
              )}

            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">

              {/* SEARCH */}
              <div className="hidden md:flex items-center border border-gray-300 rounded-full overflow-hidden">

                <input
                  type="text"
                  placeholder="Search products..."
                  className="px-4 py-2 text-sm outline-none w-44"
                />

                <button className="bg-green-700 p-3 text-white hover:bg-green-800 transition">
                  <Search size={16} />
                </button>

              </div>

              {/* CART */}
              <Link
                to="/cart"
                className="relative text-gray-700 hover:text-green-700 transition"
              >

                <ShoppingCart size={24} />

                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-700 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}

              </Link>

              {/* USER */}
              <Link
                to={isAuthenticated ? "/profile" : "/login"}
                className="text-gray-700 hover:text-green-700 transition"
              >
                <User size={23} />
              </Link>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="lg:hidden text-gray-700"
              >
                {mobileMenu ? (
                  <X size={28} />
                ) : (
                  <Menu size={28} />
                )}
              </button>

            </div>

          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">

            {/* MOBILE SEARCH */}
            <div className="p-4 border-b">

              <div className="flex items-center border rounded-full overflow-hidden">

                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-3 outline-none text-sm"
                />

                <button className="bg-green-700 px-4 py-3 text-white">
                  <Search size={18} />
                </button>

              </div>
            </div>

            {/* MOBILE LINKS */}
            <nav className="flex flex-col p-5 gap-5 text-gray-700 font-medium text-sm">

              <Link to="/" onClick={() => setMobileMenu(false)}>
                Home
              </Link>

              <Link to="/products" onClick={() => setMobileMenu(false)}>
                Products
              </Link>

              <Link to="/products/seeds" onClick={() => setMobileMenu(false)}>
                Seeds
              </Link>

              <Link
                to="/products/fertilizers"
                onClick={() => setMobileMenu(false)}
              >
                Fertilizers
              </Link>

              <Link
                to="/products/pesticides"
                onClick={() => setMobileMenu(false)}
              >
                Pesticides
              </Link>

              <Link
                to="/products/tools"
                onClick={() => setMobileMenu(false)}
              >
                Farming Tools
              </Link>

              <Link to="/about" onClick={() => setMobileMenu(false)}>
                About
              </Link>

              <Link to="/contact" onClick={() => setMobileMenu(false)}>
                Contact
              </Link>

              {isAuthenticated ? (
                <>
                  <Link
                    to="/profile"
                    onClick={() => setMobileMenu(false)}
                  >
                    Profile
                  </Link>

                  {user?.isAdmin && (
                    <Link
                      to="/admin"
                      onClick={() => setMobileMenu(false)}
                    >
                      Admin
                    </Link>
                  )}

                  <button
                    onClick={handleLogout}
                    className="text-left text-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenu(false)}
                >
                  Login
                </Link>
              )}

            </nav>

          </div>
        )}
      </header>

      {/* SPACING FOR FIXED NAVBAR */}
      <div className="h-[0px]"></div>
    </>
  );
};

export default Navbar;