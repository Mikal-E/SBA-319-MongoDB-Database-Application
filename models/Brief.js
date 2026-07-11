/* Requirements - Use at least three different data collections within the database (such as users, posts, or comments). Weight 5%
2 of 3 - This one Briefs.js */

import mongoose from "mongoose";

const briefSchema = new mongoose.Schema(

    {

        projectName: {
            type: String,
            required: true,
        },

        projectType: {
            type: String,
            required: true,
        },

        timeline: {
            type: String,
            required: true,
        },

        targetAudience: {
            type: String,
            required: true,
        },

        status: {
            type: String,
            required: true,
            enum: ["Not Started", "Active", "On Hold", "Completed", "Cancelled"],
        },

        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "TeamMember",
        }

    }

)

/* Requirements - Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable. Weight 5%
2 of 3 - This one Briefs.js*/

briefSchema.index({ status: 1 });

const Brief = mongoose.model("Brief", briefSchema);

export default Brief;