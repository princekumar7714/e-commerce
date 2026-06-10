
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0d1f0d] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <h2 className="text-2xl font-bold text-green-400">
              Sundram Agri
            </h2>

            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Premium agriculture products for modern farmers. India's trusted agriculture marketplace.
            </p>

            <div className="mt-4">
              <p className="text-gray-400 text-sm">
                📞 1800-3000-2434
              </p>
              <p className="text-gray-400 text-sm mt-1">
                ✉️ support@sundramagri.com
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-green-400 transition">Home</Link></li>
              <li><Link to="/products" className="hover:text-green-400 transition">Products</Link></li>
              <li><Link to="/contact" className="hover:text-green-400 transition">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-green-400 transition">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Categories
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/products/seeds" className="hover:text-green-400 transition">Seeds</Link></li>
              <li><Link to="/products/fertilizers" className="hover:text-green-400 transition">Fertilizers</Link></li>
              <li><Link to="/products/pesticides" className="hover:text-green-400 transition">Pesticides</Link></li>
              <li><Link to="/products/tools" className="hover:text-green-400 transition">Farming Tools</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Policies
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/privacy" className="hover:text-green-400 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-green-400 transition">Terms & Conditions</Link></li>
              <li><Link to="/shipping" className="hover:text-green-400 transition">Shipping Policy</Link></li>
              <li><Link to="/returns" className="hover:text-green-400 transition">Return Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-500 text-sm">
          © 2026 Sundram Agri. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;