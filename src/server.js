import app from "./app.js";
import connectDB from "./config/db.config.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

const start = async () => {
  try {
    if (!MONGO_URI) {
      console.warn(
        "Warning: MONGO_URI is not defined in environment variables."
      );
      throw new Error("MONGO_URI is not defined");
    }
    await connectDB(MONGO_URI);
    console.log("Connected to the database successfully");
    if (!process.env.PORT) {
      console.warn(
        "Warning: PORT is not defined in environment variables. Using default port 3000."
      );
      throw new Error("PORT is not defined");
    }
    app.listen(PORT, () => {
      console.log(
        `Server is running on port ${PORT} link: http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error("Error starting the server:", error.message);
    process.exit(1);
  }
};

start();
