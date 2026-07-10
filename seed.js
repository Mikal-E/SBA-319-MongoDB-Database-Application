import mongoose from "mongoose";
import dotenv from "dotenv";
import TeamMember from "./models/TeamMember.js";
import Brief from "./models/Brief.js"
import { teamMembers } from "./data/teamMembers.js";
import { briefs } from "./data/briefs.js";

dotenv.config();

const seedDatabase = async () => {

    try {
        
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected for seeding");

        await TeamMember.deleteMany();
        await Brief.deleteMany();
        console.log("Old TeamMember and Brief data cleared");

        await TeamMember.insertMany(teamMembers);
        await Brief.insertMany(briefs);
        console.log("TeamMembers and Briefs seeded successfully");      

    } catch (error) {

        console.error(`Error seeding database: ${error.message}`);
        
    }

};

seedDatabase();