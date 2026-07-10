/* Requirements - Use at least three different data collections within the database (such as users, posts, or comments). Weight 5%
3 of 3 - This one TeamMembers.js */

import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema(

        {

            name: {
                type: String,
                required: true,
            },
            
            role: {
                type: String,
                required: true,
            },

            email: {
                type: String,
                required: true,
                unique: true,
            },

            department: {
                type: String,
                required: true,
            },

            status: {
                type: String,
                required: true,
                enum: ["Active", "Inactive"],
            }
        }

);

const TeamMember = mongoose.model("TeamMember", teamMemberSchema);

export default TeamMember;