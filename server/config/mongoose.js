const mongoose = require("mongoose");

export const connectToDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/freelance",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    // console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
