const express = require("express");
const cors = require("cors");
const mongodb = require("./db");

const app = express();

// CLIENT_URL: comma-separated list of frontend origins allowed to call the API,
// e.g. "https://smart-health-app.vercel.app". If unset, any origin is allowed.
const allowedOrigins = (process.env.CLIENT_URL || "")
  .split(",")
  .map((o) => o.trim().replace(/\/+$/, ""))
  .filter(Boolean);
const devOrigins = ["http://localhost:5173", "http://localhost:3000"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.length === 0) return callback(null, true);
      if (allowedOrigins.includes(origin) || devOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, false);
    },
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Smart Health API is running");
});

// Make sure the database is connected before handling API requests.
app.use("/api", async (req, res, next) => {
  try {
    await mongodb();
    next();
  } catch (err) {
    console.error("Database connection failed:", err.message);
    res.status(503).json({ success: false, message: "Database unavailable. Try again shortly." });
  }
});

app.use("/api", require("./Routes/CreateUser"));

module.exports = app;
