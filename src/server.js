import express from "express";
import { connectDB } from "./config/db.js"; 
import getRoute from "./routes/route.js"
import bodyParser from "body-parser";

const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use("/api",getRoute);

app.listen(3000, () => {
  connectDB();
  console.log(`Server is running on http://localhost:3000`);
});

