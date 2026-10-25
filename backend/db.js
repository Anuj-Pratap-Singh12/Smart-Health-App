const mongoose = require("mongoose");

// Reuse one connection across requests (important on Vercel, where the
// function instance is kept warm between invocations).
let connection = null;

const mongodb = () => {
  if (!process.env.MONGO_URI) {
    return Promise.reject(new Error("MONGO_URI environment variable is not set"));
  }
  if (!connection) {
    connection = mongoose
      .connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 10000 })
      .then((m) => {
        console.log("Connected to MongoDB");
        return m;
      })
      .catch((err) => {
        connection = null; // allow a retry on the next request
        throw err;
      });
  }
  return connection;
};

module.exports = mongodb;
