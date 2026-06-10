import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
// import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Dashboard from "./admin/Dashboard";
// import Products from "./admin/Products";
import Orders from "./admin/Orders";
import Users from "./admin/Users";
import Banners from "./admin/Banners";
import Coupons from "./admin/Coupons";
import Analytics from "./admin/Analytics";
import Settings from "./admin/Settings";
import ProductsPage from "./pages/Products";
import AdminProducts from "./admin/Products";
import SprayerDetails from "./components/homepage/SprayerDetails";


function AppContent() {
  const location = useLocation();

  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Navbar />}

      <Routes>
        {/* <Route path="/admin" element={<Dashboard />} /> */}
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/banners" element={<Banners />} />
        <Route path="/admin/coupons" element={<Coupons />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Admin */}
        <Route path="/admin" element={<Dashboard />} />

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
