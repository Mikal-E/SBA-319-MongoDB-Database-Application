/* Requirements - Use at least three different data collections within the database (such as users, posts, or comments). Weight 5%
1 of 3 - This one Activity.js */

import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(

    {

        type: {
            type: String,
            required: true,
            enum: ["Status Change", "Assignment", "Comment"],
        },

        message: {
            type: String,
            required: true,
        },

        brief: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Brief",
            required: true,
        },

        teamMember: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "TeamMember",
            required: true,
        },

        read: {
            type: Boolean,
            required: true,
            default: false,
        },

        createdAt: {
            type: Date,
            default: Date.now,
        },

    },

)

const Activity = mongoose.model("Activity", activitySchema);

export default Activity;