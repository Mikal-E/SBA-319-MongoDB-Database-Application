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

/* Requirements - Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable. Weight 5%
1 of 3 - This one Activity.js

createdAt is not indexed. It is written on every document but is not currently used in any query filter or sort. */

activitySchema.index({ read: 1 });

const Activity = mongoose.model("Activity", activitySchema);

export default Activity;