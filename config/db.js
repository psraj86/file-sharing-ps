const mongoose = require("mongoose");

const connectDB = async () => {
  // Database connection
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
    console.log("Connected successfully");
  } catch (err) {
    console.log("Connection failed");
    process.exit(1);
  }
};

module.exports = connectDB;