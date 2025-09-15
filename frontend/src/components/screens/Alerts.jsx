import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Droplets,
  Activity,
  BellRing,
} from "lucide-react";

const healthAlerts = [
  {
    type: "Critical",
    title: "Cholera Outbreak Risk",
    message: "AI predicts possible cholera outbreak in District A. Immediate action required.",
    icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
    bg: "bg-red-50 border-red-500 text-red-700",
    urgent: true,
  },
  {
    type: "Warning",
    title: "Unsafe Water Quality",
    message: "High turbidity and bacterial presence detected in Village B water sources.",
    icon: <Droplets className="w-8 h-8 text-yellow-600" />,
    bg: "bg-yellow-50 border-yellow-500 text-yellow-700",
    urgent: true,
  },
  {
    type: "Info",
    title: "Seasonal Illness Trends",
    message: "Increase in diarrhea cases reported across tribal belts. Monitoring continues.",
    icon: <Activity className="w-8 h-8 text-blue-600" />,
    bg: "bg-blue-50 border-blue-500 text-blue-700",
    urgent: false,
  },
  {
    type: "Alert",
    title: "Real-Time Notification",
    message: "District health officials have been alerted via SMS and dashboard update.",
    icon: <BellRing className="w-8 h-8 text-green-600" />,
    bg: "bg-green-50 border-green-500 text-green-700",
    urgent: false,
  },
];

const Alerts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 px-6 py-20 relative">
      {/* Floating Beacon Alert Symbol */}
      <motion.div
        className="absolute top-6 left-1/2 -translate-x-1/2 z-50"
        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.8, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute w-24 h-24 rounded-full bg-red-500 opacity-30 animate-ping" />
          <div className="absolute w-36 h-36 rounded-full bg-red-400 opacity-20 animate-ping" />
          <motion.div
            className="bg-red-600 text-white rounded-full p-5 shadow-2xl"
            whileHover={{ rotate: 15, scale: 1.1 }}
          >
            <BellRing className="w-10 h-10" />
          </motion.div>
        </div>
      </motion.div>

      {/* Page Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-green-800 text-center mb-16 mt-32"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🏥 Smart Health Alerts
      </motion.h1>

      {/* Alerts Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {healthAlerts.map((alert, i) => (
          <motion.div
            key={i}
            className={`flex items-start gap-4 p-6 rounded-xl shadow-xl border-l-8 ${alert.bg}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.3, duration: 0.6, type: "spring" }}
          >
            {/* Icon */}
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              {alert.icon}
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold flex items-center justify-between">
                {alert.title}
                {alert.urgent && (
                  <motion.button
                    className="ml-2 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-semibold flex items-center gap-1 shadow-md hover:bg-red-700"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BellRing className="w-4 h-4" />
                    Alert
                  </motion.button>
                )}
              </h3>
              <p className="text-sm mt-1">{alert.message}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;
