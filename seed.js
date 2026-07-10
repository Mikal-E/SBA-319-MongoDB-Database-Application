import mongoose from "mongoose";
import dotenv from "dotenv";
import TeamMember from "./models/TeamMember.js";
import Brief from "./models/Brief.js"
import { teamMembers } from "./data/teamMembers.js";
import { briefs } from "./data/briefs.js";
import { activities } from "./data/activities.js";
import Activity from "./models/Activity.js";

dotenv.config();

const seedDatabase = async () => {

    try {
        
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected for seeding");

        // await TeamMember.deleteMany(); - Added in activitie.js data and did not want to rerun this.
        await Activity.deleteMany();
        // console.log("Old TeamMember and Brief data cleared");
        console.log("Old Activity data cleared");

        // await Brief.deleteMany() - Added in activities.js data and did not want to rerun this.
        await Activity.insertMany(activities);
        // console.log("TeamMembers and Briefs seeded successfully");      
        console.log("Activities seeded successfully");

    } catch (error) {

        console.error(`Error seeding database: ${error.message}`);
        
    }

};

seedDatabase();