/* Requirements - Utilize reasonable code organization practices, Weight 5%:
Spent a good deal of time researching best practices for code and directories organization.
Organized files based upon types and usage */

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js"
import teamMemberRoutes from "./routes/teamMembers.js";
import briefsRoutes from "./routes/briefs.js"
import activitiesRoutes from "./routes/activities.js"
import analyticsRoute from "./routes/analytics.js";
import logger from "./middleware/logger.js"

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

/* Middleware Connection */

app.use(logger);

/* Connecting /routes/activities.js */

app.use("/api/activities", activitiesRoutes)

/* Connecting /routes/analytics.js */

app.use("/api/analytics", analyticsRoute);

/* Connecting /routes/briefs.js */

app.use("/api/briefs", briefsRoutes);

/* Connecting /routes/teamMembers.js */

app.use("/api/teamMembers", teamMemberRoutes);

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});