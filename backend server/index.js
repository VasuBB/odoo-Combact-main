const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const { uploadOnCloudinary } = require("./cloudinary");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { ConnectMongoDB } = require("./connection");

const app = express();
const PORT = process.env.PORT || 7000;
const MONGO_URL = "mongodb+srv://vasu_boda_:m1TpHpiz9w19b5Gi@cluster0.yplhl9e.mongodb.net/";

ConnectMongoDB(MONGO_URL)
  .then(() => {
    console.log("DATABASE CONNECTED SUCCESSFULLY");
  })
  .catch((error) => {
    console.log("mongoose error", error);
  });

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Specify the directory for storing uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${path.extname(file.originalname)}`); // Use a unique filename with a timestamp
  },
});

const upload = multer({ storage });
const allowedOrigins = [
  "http://localhost:3030",
  "http://localhost:3031",
  "http://localhost:3032",
  // Add more origins as needed
];
app.use(express.json());
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true // Allow cookies or other credentials to be sent
};
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//inbuilt routes
const Admin = require("./routes/admin");
const Signin = require("./routes/signin");
const Student = require("./routes/student");
const quiz = require("./routes/quiz");

// Endpoint for handling media uploads
app.post("/post_media", upload.single("media"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const localFilePath = req.file.path;
    const cloudinaryResponse = await uploadOnCloudinary(localFilePath);

    if (cloudinaryResponse) {
      return res.status(200).json({ url: cloudinaryResponse.url });
    } else {
      return res
        .status(500)
        .json({ error: "Failed to upload file to Cloudinary" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.use("/api/admin", Admin);
app.use("/api/signin", Signin);
app.use("/api/student", Student);
app.use("/quiz" , quiz);
app.listen(PORT, () => {
  console.log(
    "Server has been started at link: " + `http://localhost:${PORT}/`
  );
});
