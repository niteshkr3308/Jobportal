import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Configure CORS for production and development environments
const corsOptions = {
  origin: process.env.NODE_ENV === "production" ? "https://next-hire-hub-ssn.netlify.app" : "http://localhost:5173", // Update with your production URL
  credentials: true,
};

app.use(cors(corsOptions));

// Health Check Route (Optional)
app.get("/", (req, res) => {
  res.send({
    activeStatus: true,
    error: false,
  });
});

// Connect to database
connectDB();

const PORT = process.env.PORT || 8001;

// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
