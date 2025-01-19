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
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin: 'https://next-hire-hub-ssn.netlify.app',
    credentials:true
}


app.get('/',(req,res)=>{
    res.send({
        activeStatus:true,
        error:false,
    })
})

app.use(cors(corsOptions));

// Connect to database
connectDB();

const PORT = process.env.PORT || 8001;

// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// ye hamara Api hoga postman me

// "https://localhost:8000/api/v1/user/register"
// "https://localhost:8000/api/v1/user/login"
// "https://localhost:8000/api/v1/user/profile/update"



app.listen(PORT,()=>{
   
    console.log(`Server running at port ${PORT}`);
});