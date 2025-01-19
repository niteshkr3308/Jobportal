import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name: "dgnb676rn",
    api_key: "353387853762228",
    api_secret: "EWRqLvUeB-3qgvGS4R3OQnOwIkQ"
});
export default cloudinary;