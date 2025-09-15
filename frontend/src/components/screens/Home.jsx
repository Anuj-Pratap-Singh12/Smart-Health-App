import React from "react";
import Navbar from "../Navbar";
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
  Stethoscope,
  Syringe,
  Pill,
  Apple,
} from "lucide-react";

// ✅ Rotating icon colors
const orbitColors = [
  "bg-green-500",
  "bg-blue-500",
  "bg-pink-500",
  "bg-purple-500",
  "bg-yellow-500",
  "bg-teal-500",
  "bg-orange-500",
  "bg-red-500",
];

// ✅ Central Image
const centralImage =
  "https://img.freepik.com/premium-photo/circle-colorful-pencils-around-globe-with-world-map-different-countries-around-it_297030-11253.jpg";

// ✅ Hero Section Features
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

// ✅ How It Works steps
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

// ✅ Health Insights with labels
const healthIcons = [
  { icon: <Stethoscope className="w-8 h-8 text-green-600" />, label: "Checkups" },
  { icon: <Syringe className="w-8 h-8 text-green-600" />, label: "Vaccines" },
  { icon: <Pill className="w-8 h-8 text-green-600" />, label: "Medicines" },
  { icon: <Apple className="w-8 h-8 text-green-600" />, label: "Nutrition" },
];

// ✅ Animation Variants for letter typing
const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.05 } },
};

// ✅ Component to animate text letter by letter
const AnimatedText = ({ text, gradient }) => {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.04 } },
      }}
      className={`inline-block ${
        gradient
          ? "bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-700"
          : "text-black"
      }`}
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letterAnimation} className="inline-block">
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-br from-green-50 via-green-100 to-green-200 text-gray-900 min-h-screen flex items-center px-6">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center mx-auto py-16">
          
          {/* Left Content */}
    <motion.div
      className="space-y-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.4 }, // 🔄 smooth continuation
        },
      }}
    >
      {/* Word 1 - Smart Health */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold leading-tight"
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0, transition: { duration: 2 } }, // ⏳ slower
        }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-700">
          Smart Health
        </span>
      </motion.h1>

      {/* Word 2 - Surveillance (animated now) */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold leading-tight"
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0, transition: { duration: 2 } }, // ⏳ slower
        }}
      >
        <span className="text-black">Surveillance</span>
      </motion.h1>

      {/* Word 3 - & Early Warning */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold leading-tight"
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0, transition: { duration: 2 } }, // ⏳ slower
        }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-700">
          & Early Warning
        </span>
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="text-gray-700 text-lg max-w-md font-medium"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
        }}
      >
        Detect, monitor, and prevent water-borne disease outbreaks in vulnerable
        communities with AI-powered insights and IoT-driven data.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex space-x-4"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
        }}
      >
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition transform hover:scale-105">
          Get Started
        </button>
        <button className="border border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition transform hover:scale-105">
          Learn More
        </button>
      </motion.div>
    </motion.div>
          {/* Right Orbiting Icons with Central Image */}
          <motion.div
            className="relative w-[550px] h-[550px] flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          >
            {/* Central Image */}
            <div className="absolute w-96 h-96 rounded-full overflow-hidden shadow-2xl border-4 border-green-200">
              <img
                src={centralImage}
                alt="Central Globe"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Orbiting Icons */}
            {orbitColors.map((color, i) => (
              <motion.div
                key={i}
                className={`absolute w-16 h-16 ${color} rounded-full flex items-center justify-center shadow-lg`}
                style={{
                  top: `calc(50% + ${250 * Math.sin((i / orbitColors.length) * 2 * Math.PI)}px - 32px)`,
                  left: `calc(50% + ${250 * Math.cos((i / orbitColors.length) * 2 * Math.PI)}px - 32px)`,
                }}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              >
                {healthIcons[i % healthIcons.length].icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CORE FEATURES ================= */}
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

      {/* ================= HEALTH INSIGHTS ================= */}
      <section className="py-20 bg-gradient-to-r from-green-100 to-green-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-green-800 mb-10">
            Health Insights
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {healthIcons.map((h, i) => (
              <motion.div
                key={i}
                className="bg-white w-36 h-36 rounded-full shadow-xl flex flex-col justify-center items-center border border-green-200 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                <div className="text-green-700 text-3xl">{h.icon}</div>
                <p className="mt-3 text-green-700 font-bold text-sm">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
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

{/* ================= DASHBOARD PREVIEW ================= */}
<section className="py-16 -mt-8 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left Content */}
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="space-y-6"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold leading-tight"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-600 drop-shadow-md">
          Real-Time Dashboard
        </span>
      </motion.h2>
      
      <motion.p
        className="text-gray-700 text-lg font-medium leading-relaxed"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Track water contamination, disease cases, and AI predictions with 
        interactive maps and analytics dashboards for real-time monitoring.
      </motion.p>

      <motion.div
        className="flex space-x-4"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition transform hover:scale-105">
          View Demo
        </button>
        <button className="border border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition transform hover:scale-105">
          Learn More
        </button>
      </motion.div>
    </motion.div>

    {/* Right Content with 3D Hover Card */}
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ scale: 1.07, rotateY: 8, rotateX: 5 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        className="w-[540px] h-[460px] rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,128,0,0.25)] border-4 border-green-200 bg-white transform-gpu"
      >
        <img
          src="https://img.lovepik.com/element/45009/8706.png_860.png"
          alt="Dashboard Analytics Illustration"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-in-out hover:scale-105"
        />
      </motion.div>
    </motion.div>
  </div>
</section>

    </div>
  );
};

export default Home;
