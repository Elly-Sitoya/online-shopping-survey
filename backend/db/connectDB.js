const mongoose = require("mongoose");

const connectDB = async () => {
  // Replace the following with your MongoDB connection string
  const mongoURI = "mongodb://localhost:27017/yourDatabaseName"; // For a local MongoDB instance
  // const mongoURI = 'your_remote_mongodb_uri'; // For a remote MongoDB instance

  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Connection error:", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
