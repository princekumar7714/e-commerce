import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Tractor,
  Headphones,
} from "lucide-react";

import WhatsAppBotWidget from "../components/WhatsAppBotWidget";

const Contact = () => {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <WhatsAppBotWidget />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
        
        <div className="absolute inset-0 opacity-10">
          <img
            src="/banner-img/banner1.jpg"
            alt="contact"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
          
          <div className="max-w-3xl">
            
            <span className="inline-block bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6">
              CONTACT SUNDRAM AGRI
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              We’re Here To Help Farmers Grow Better 🌱
            </h1>

            <p className="text-lg md:text-xl text-green-100 leading-relaxed">
              Get in touch with our agriculture experts for product support,
              farming guidance, bulk orders, and any assistance related to your crops.
            </p>

          </div>

        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-16 bg-gray-50">
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* CARD */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-xl transition duration-300">
              
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-5">
                <Phone className="text-green-700" size={30} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Call Us
              </h3>

              <p className="text-gray-600 mb-2">
                Customer Support
              </p>

              <a
                href="tel:+919999999999"
                className="text-green-700 font-semibold"
              >
                +91 99999 99999
              </a>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-xl transition duration-300">
              
              <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center mb-5">
                <Mail className="text-yellow-600" size={30} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Email Us
              </h3>

              <p className="text-gray-600 mb-2">
                We reply within 24 hours
              </p>

              <a
                href="mailto:support@sundramagri.com"
                className="text-green-700 font-semibold"
              >
                support@sundramagri.com
              </a>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-xl transition duration-300">
              
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-5">
                <MapPin className="text-blue-700" size={30} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Office Address
              </h3>

              <p className="text-gray-600 leading-7">
                Sundram Agri Pvt. Ltd. <br />
                Sector 62, Noida <br />
                Uttar Pradesh, India
              </p>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-xl transition duration-300">
              
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mb-5">
                <Clock className="text-red-600" size={30} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Working Hours
              </h3>

              <p className="text-gray-600 leading-7">
                Monday - Saturday <br />
                9:00 AM - 7:00 PM
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT FORM + IMAGE */}
      <section className="py-20 bg-white">
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>

              <span className="text-green-700 font-semibold uppercase tracking-wider">
                Contact Form
              </span>

              <h2 className="text-4xl font-extrabold text-gray-900 mt-3 mb-5 leading-tight">
                Send Us A Message
              </h2>

              <p className="text-gray-600 text-lg leading-8 mb-10">
                Need help selecting the right products for your farm? 
                Fill out the form and our agriculture experts will contact you shortly.
              </p>

              <form
                className="space-y-6"
                onSubmit={handleSubmit}
              >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600"
                    required
                  />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600"
                    required
                  />

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600"
                    required
                  />

                </div>

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write Your Message..."
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600 resize-none"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition duration-300 shadow-lg"
                >
                  Send Message
                  <Send size={18} />
                </button>

              </form>

            </div>

            {/* RIGHT */}
            <div className="relative">

              <img
                src="/banner-img/banner2.jpg"
                alt="contact"
                className="rounded-[40px] shadow-2xl w-full h-[650px] object-cover"
              />

              {/* FLOATING CARD */}
              <div className="absolute bottom-8 left-8 bg-white rounded-3xl shadow-2xl p-6 max-w-sm">

                <div className="flex items-center gap-4 mb-4">

                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                    <Headphones className="text-green-700" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      24/7 Farming Support
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Expert agricultural guidance
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-3 text-gray-700 mb-3">
                  <Tractor size={18} className="text-green-700" />
                  Crop Protection Guidance
                </div>

                <div className="flex items-center gap-3 text-gray-700 mb-3">
                  <MessageCircle size={18} className="text-green-700" />
                  Product Recommendations
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Phone size={18} className="text-green-700" />
                  Instant Customer Assistance
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MAP SECTION */}
      <section className="bg-gray-100 py-20">
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          <div className="text-center mb-12">

            <span className="text-green-700 font-semibold uppercase tracking-wider">
              Visit Our Office
            </span>

            <h2 className="text-4xl font-extrabold text-gray-900 mt-3">
              Find Us On Map
            </h2>

          </div>

          <div className="rounded-[35px] overflow-hidden shadow-2xl border border-gray-200">

            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923093235!2d77.06889957917096!3d28.527280343762467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c06bffffff%3A0x2b4a5f6bff!2sNoida!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="500"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>

          </div>

        </div>

      </section>
    </>
  );
};

export default Contact;