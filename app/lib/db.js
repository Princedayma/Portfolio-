import mongoose from "mongoose";


const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to MongoDB.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_UR || "mongodb+srv://portfolio:portfolio@cluster0.binqdj3.mongodb.net/test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;
