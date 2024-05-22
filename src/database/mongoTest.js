import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_KEY);
    console.log("Connected to MongoDB");
    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected!");
    });
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected!");
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error(error);
  }
};
