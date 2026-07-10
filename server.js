/* Requirements - Utilize reasonable code organization practices, Weight 5%:
Spent a good deal of time researching best practices for code and directories organization.
Organized files based upon types and usage */

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});