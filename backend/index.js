import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

// DATABASE CONNECTION
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      //  useNewUrlParser:true,
      //  useUnifiedTopology:true,
    });
    console.log("MongoDB database is connected");
  } catch (err) {
    console.log("MongoDB database is not connected");
  }
};

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Api is working");
});
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);

// Generates a 64-byte hex string
//  const secretKey = crypto.randomBytes(64).toString('hex');
//  console.log(secretKey);
connectDB().then(() => {
  app.listen(port, () => {
    console.log("Server is running on port" + port);
  });
});
