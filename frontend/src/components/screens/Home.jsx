import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Droplets,
  BellRing,
  Cpu,
  ClipboardCheck,
  LineChart,
  ShieldCheck,
  Activity,
} from "lucide-react";

const features = [
  {
    title: "Community Data Collection",
    desc: "Collect health data via mobile apps, SMS, and local clinics.",
    icon: <HeartPulse className="w-12 h-12 text-green-600" />,
  },
  {
    title: "AI/ML Prediction",
    desc: "Detect patterns and predict outbreaks from symptoms & trends.",
    icon: <Cpu className="w-12 h-12 text-green-600" />,
  },
  {
    title: "Water Quality Monitoring",
    desc: "Integrate with IoT sensors to track turbidity, pH, contamination.",
    icon: <Droplets className="w-12 h-12 text-green-600" />,
  },
  {
    title: "Real-Time Alerts",
    desc: "Instant notifications to health officials & governance bodies.",
    icon: <BellRing className="w-12 h-12 text-green-600" />,
  },
];

const steps = [
  {
    title: "Collect Data",
    icon: <ClipboardCheck className="w-12 h-12 text-green-600" />,
    desc: "Health and water data gathered from communities.",
  },
  {
    title: "AI Analysis",
    icon: <LineChart className="w-12 h-12 text-green-600" />,
    desc: "AI detects patterns and predicts outbreaks.",
  },
  {
    title: "Monitoring",
    icon: <Activity className="w-12 h-12 text-green-600" />,
    desc: "Continuous monitoring of health & water quality.",
  },
  {
    title: "Real-Time Alerts",
    icon: <ShieldCheck className="w-12 h-12 text-green-600" />,
    desc: "Instant alerts sent to health officials & communities.",
  },
];

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      {/* Hero Section */}
<section className="bg-gradient-to-br from-green-50 via-green-100 to-green-200 text-gray-900 min-h-screen flex items-center px-6">
  <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center mx-auto py-16">
    {/* Left Content */}
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-700">
          Smart Health
        </span>{" "}
        <span className="text-black">Surveillance</span>{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-700">
          & Early Warning
        </span>
      </h1>

      <p className="text-gray-700 text-lg max-w-md font-medium">
        Detect, monitor, and prevent water-borne disease outbreaks in
        vulnerable communities with AI-powered insights and IoT-driven data.
      </p>

      <div className="flex space-x-4">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition transform hover:scale-105">
          Get Started
        </button>
        <button className="border border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition transform hover:scale-105">
          Learn More
        </button>
      </div>
    </motion.div>

    {/* Right Illustration */}
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        src="https://thumbs.dreamstime.com/z/smart-healthcare-mobile-application-medical-app-heart-beat-pulse-control-walk-man-using-smartwatch-fitness-bracelet-177168995.jpg"
        alt="Smart Healthcare App Illustration"
        className="w-[95%] md:w-[100%] max-w-lg rounded-2xl shadow-2xl object-cover object-top transform hover:scale-105 transition duration-500"
      />
    </motion.div>
  </div>
</section>


      {/* Core Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-extrabold text-center text-green-800 mb-12"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Core Features
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-3xl shadow-md p-8 text-center border border-green-100 hover:border-green-400 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group"
                whileHover={{ scale: 1.08 }}
              >
                <div className="flex justify-center mb-4 transition-transform group-hover:scale-110">
                  {f.icon}
                </div>
                <h3 className="text-xl text-green-700 mb-3 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed font-medium group-hover:text-green-800">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-green-100 to-green-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-extrabold text-green-800 mb-10"
            whileHover={{ scale: 1.05 }}
          >
            How It Works
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="bg-green-50 rounded-2xl p-8 shadow-lg border border-green-200 hover:border-green-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                whileHover={{ scale: 1.08 }}
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-2xl font-extrabold text-green-900 mb-3 uppercase tracking-wide">
                  Step {i + 1}
                </h3>
                <p className="text-lg font-bold text-green-700 mb-2">
                  {step.title}
                </p>
                <p className="text-gray-700 text-base font-medium">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              Real-Time Dashboard
            </h2>
            <p className="text-gray-600 mb-6 font-medium">
              Track water contamination, disease cases, and AI predictions with
              interactive maps and analytics.
            </p>
            <Link to='/DashBoard' className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition">
              View Demo
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
              alt="Map Dashboard with Pointer"
              className="rounded-2xl shadow-2xl bg-white p-6 transform hover:scale-105 transition duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-4">Join the Movement</h2>
        <p className="mb-6 text-lg font-medium">
          Be part of the initiative to make healthcare smarter and safer for
          everyone.
        </p>
        <button className="bg-black px-8 py-3 rounded-2xl shadow-lg hover:bg-gray-900 transition">
          Get Involved
        </button>
      </section>

      
    </div>
  );
};

export default Home;
