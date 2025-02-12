import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import path from "path";
import fs from "fs";
import multer from "multer";
import sharp from "sharp";

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

// Serve static files (for accessing images)
app.use("/uploads", express.static("uploads"));


// ✅ **Image Upload Setup with Multer**
const storage = multer.diskStorage({
  destination: "uploads/", // Temporary storage
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// ✅ **Image Upload Route**
app.post("/api/v1/upload", upload.single("image"), async (req, res) => {
  try {
    const { path: tempPath, filename } = req.file;
    const outputPath = `uploads/resized-${filename}`;

    // Resize image to 200x200 pixels
    await sharp(tempPath)
      .resize(200, 200)
      .toFile(outputPath);

    fs.unlinkSync(tempPath); // Delete original image

    res.json({
      message: "Image uploaded and resized successfully!",
      fileUrl: `http://localhost:${port}/uploads/resized-${filename}`,
    });
  } catch (error) {
    res.status(500).json({ error: "Error processing image" });
  }
});


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
