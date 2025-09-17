const mongoose = require("mongoose");

const mongodb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://hello:8IBGptaPjhjGuxHZ@cluster0.6twl0a4.mongodb.net/smarthealth?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB");

    const fetched_data = mongoose.connection.db.collection("foodItems");
    const data = await fetched_data.find({}).toArray();
    global.foodItems = data;
    const fetched_data2 = mongoose.connection.db.collection("foodCategory");
    const catData = await fetched_data2.find({}).toArray();
    global.foodCategory = catData;
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

module.exports = mongodb;
