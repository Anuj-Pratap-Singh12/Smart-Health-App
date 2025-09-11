import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  MapPin,
  Activity,
  Droplets,
  FlaskConical,
  Wind,
  ThermometerSun,
  ClipboardList,
} from "lucide-react";

const Form = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 flex items-center justify-center px-6 py-16 relative">
      <div className="bg-white shadow-2xl rounded-3xl max-w-4xl w-full p-10 border-2 border-green-300 relative z-10">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center text-green-800 mb-4">
          🩺 Smart Health Surveillance Form 🌍
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Help us monitor health and water conditions in your community.  
          Your inputs power AI-based outbreak prediction.
        </p>

        {/* Form */}
        <form className="space-y-12">
          {/* Section: Personal Info */}
          <div>
            <h2 className="flex items-center text-2xl font-bold text-black mb-6">
              <User className="w-7 h-7 text-green-700 mr-2" /> Personal Details
            </h2>

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2 flex items-center">
                  <User className="w-4 h-4 mr-1" /> Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2 flex items-center">
                  <Mail className="w-4 h-4 mr-1" /> Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
            </div>

            {/* Phone + Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2 flex items-center">
                  <Phone className="w-4 h-4 mr-1" /> Phone Number
                </label>
                <PhoneInput
                  country={"in"}
                  inputClass="!w-full !px-4 !py-3 !rounded-xl !border !border-green-300 focus:!ring-2 focus:!ring-green-500 !outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2 flex items-center">
                  <Briefcase className="w-4 h-4 mr-1" /> Role
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 outline-none">
                  <option>Doctor</option>
                  <option>ASHA Worker</option>
                  <option>Community Volunteer</option>
                  <option>Local Resident</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> Village / Town
                </label>
                <input
                  type="text"
                  placeholder="Enter village or town"
                  className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" /> District
                </label>
                <input
                  type="text"
                  placeholder="Enter district"
                  className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t-2 border-green-200 my-6" />

          {/* Section: Health Info */}
          <div>
            <h2 className="flex items-center text-2xl font-bold text-black mb-6">
              <Activity className="w-8 h-8 text-green-700 mr-2" /> Health Details
            </h2>
            <div>
              <label className="block text-sm font-semibold text-green-800 mb-2 flex items-center">
                <Activity className="w-4 h-4 mr-1" /> Symptoms Observed
              </label>
              <textarea
                rows="3"
                placeholder="E.g., diarrhea, fever, vomiting..."
                className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 outline-none"
              ></textarea>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t-2 border-green-200 my-6" />

          {/* Section: Environmental Info */}
          <div>
            <h2 className="flex items-center text-2xl font-bold text-black mb-6">
              <Droplets className="w-7 h-7 text-green-700 mr-2" /> Environmental
              Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2 flex items-center">
                  <FlaskConical className="w-4 h-4 mr-1" /> pH Level
                </label>
                <input
                  type="number"
                  step="0.1"
                  placeholder="e.g. 7.2"
                  className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2 flex items-center">
                  <Droplets className="w-4 h-4 mr-1" /> Turbidity (NTU)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 5"
                  className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2 flex items-center">
                  <FlaskConical className="w-4 h-4 mr-1" /> Contamination
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 outline-none">
                  <option>None</option>
                  <option>Bacterial</option>
                  <option>Chemical</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* AQI + Temp */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2 flex items-center">
                  <Wind className="w-4 h-4 mr-1" /> AQI Level
                </label>
                <input
                  type="number"
                  placeholder="e.g. 120"
                  className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2 flex items-center">
                  <ThermometerSun className="w-4 h-4 mr-1" /> Temperature (°C)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 36.5"
                  className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t-2 border-green-200 my-6" />

          {/* Section: Additional Info */}
          <div>
            <h2 className="flex items-center text-2xl font-bold text-black mb-6">
              <ClipboardList className="w-7 h-7 text-green-700 mr-2" /> Additional Details
            </h2>
            <div>
              <label className="block text-sm font-semibold text-green-800 mb-2">
                Notes
              </label>
              <textarea
                rows="3"
                placeholder="Add any extra information..."
                className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 outline-none"
              ></textarea>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-2xl font-semibold shadow-lg transition transform hover:scale-105"
            >
              ✅ Submit Report
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
