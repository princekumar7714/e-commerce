import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Dashboard from "./admin/Dashboard";
import Orders from "./admin/Orders";
import Users from "./admin/Users";
import Banners from "./admin/Banners";
import Coupons from "./admin/Coupons";
import Analytics from "./admin/Analytics";
import Settings from "./admin/Settings";
import ProductsPage from "./pages/Products";
import AdminProducts from "./admin/Products";
import SprayerDetails from "./components/homepage/SprayerDetails";
import AdminLogin from "./admin/AdminLogin";
import ProtectedAdminRoute from "./admin/ProtectedAdminRoute";
import WhatsAppBotWidget from "./components/WhatsAppBotWidget";


function AppContent() {
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Navbar />}
      {!isAdminPage && <WhatsAppBotWidget />}

      <Routes>

        {/* Admin Auth (NOT protected — this is the login page itself) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Pages (protected — redirects to /admin/login if not an admin) */}
        <Route
          path="/admin/products"
          element={
            <ProtectedAdminRoute>
              <AdminProducts />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <ProtectedAdminRoute>
              <Orders />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedAdminRoute>
              <Users />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/banners"
          element={
            <ProtectedAdminRoute>
              <Banners />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/coupons"
          element={
            <ProtectedAdminRoute>
              <Coupons />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/analytics"
          element={
            <ProtectedAdminRoute>
              <Analytics />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <ProtectedAdminRoute>
              <Settings />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <Dashboard />
            </ProtectedAdminRoute>
          }
        />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />

        {/* Products */}
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Other Pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/sprayer/:id" element={<SprayerDetails />} />
      </Routes>

      {!isAdminPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;