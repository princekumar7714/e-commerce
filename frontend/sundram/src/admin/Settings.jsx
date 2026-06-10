import  { useState } from "react";
import AdminLayout from "./AdminLayout";
import {
  Save,
  Globe,
  Mail,
  Phone,
  MapPin,
  
} from "lucide-react";
function Settings() {
  const [settings, setSettings] = useState({
    websiteName: "Sundram Agri",
    email: "info@sundramagri.com",
    phone: "+91 9876543210",
    address: "Delhi, India",
    facebook: "",
    instagram: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    alert("Settings Saved Successfully");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">
            Website Settings
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your website information
          </p>
        </div>

        {/* Settings Form */}
        <div className="bg-white rounded-xl shadow p-8">

          <div className="grid md:grid-cols-2 gap-6">

            {/* Website Name */}
            <div>
              <label className="font-semibold mb-2 block">
                Website Name
              </label>

              <div className="relative">
                <Globe
                  size={18}
                  className="absolute left-3 top-4 text-gray-400"
                />

                <input
                  type="text"
                  name="websiteName"
                  value={settings.websiteName}
                  onChange={handleChange}
                  className="w-full border rounded-lg pl-10 pr-4 py-3"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="font-semibold mb-2 block">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-4 text-gray-400"
                />

                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg pl-10 pr-4 py-3"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="font-semibold mb-2 block">
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-3 top-4 text-gray-400"
                />

                <input
                  type="text"
                  name="phone"
                  value={settings.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg pl-10 pr-4 py-3"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="font-semibold mb-2 block">
                Address
              </label>

              <div className="relative">
                <MapPin
                  size={18}
                  className="absolute left-3 top-4 text-gray-400"
                />

                <input
                  type="text"
                  name="address"
                  value={settings.address}
                  onChange={handleChange}
                  className="w-full border rounded-lg pl-10 pr-4 py-3"
                />
              </div>
            </div>

          </div>

          {/* Social Media */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">
              Social Media Links
            </h2>

            <div className="space-y-4">

              <div className="relative">
                {/* <Facebook
                  size={18}
                  className="absolute left-3 top-4 text-blue-600"
                /> */}

                <input
                  type="text"
                  name="facebook"
                  placeholder="Facebook URL"
                  value={settings.facebook}
                  onChange={handleChange}
                  className="w-full border rounded-lg pl-10 pr-4 py-3"
                />
              </div>

              <div className="relative">
                {/* <Instagram
                  size={18}
                  className="absolute left-3 top-4 text-pink-500"
                /> */}

                <input
                  type="text"
                  name="instagram"
                  placeholder="Instagram URL"
                  value={settings.instagram}
                  onChange={handleChange}
                  className="w-full border rounded-lg pl-10 pr-4 py-3"
                />
              </div>

              <div className="relative">
                {/* <Linkedin
                  size={18}
                  className="absolute left-3 top-4 text-blue-700"
                /> */}

                <input
                  type="text"
                  name="linkedin"
                  placeholder="LinkedIn URL"
                  value={settings.linkedin}
                  onChange={handleChange}
                  className="w-full border rounded-lg pl-10 pr-4 py-3"
                />
              </div>

            </div>
          </div>

          {/* Save Button */}
          <div className="mt-8">
            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <Save size={18} />
              Save Settings
            </button>
          </div>

        </div>

      </div>
    </AdminLayout>
  );
}

export default Settings;