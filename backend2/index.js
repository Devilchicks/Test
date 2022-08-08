import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import BisnisRoute from "./routes/BisnisRoute.js";
import AkunRoute from "./routes/AkunRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(UserRoute);
app.use(BisnisRoute);
app.use(AkunRoute);


app.listen(5000,()=>console.log('Server up and running...'))