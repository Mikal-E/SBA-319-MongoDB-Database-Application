/* Analytics Routes - aggregation pipeline routes (brief volume by team member, status breakdown, avg turnaround - added on next iteration of Brief.io ecosystem's assets) 

THESE ROUTES ARE FOR PLANNING AHEAD TO USE WITH Brief.io's BRIEFS DASHBOARD AND ARE OUT OF THIS SBA'S SCOPE

*/

import express from "express";
import Brief from "../models/Brief.js";

const router = express.Router();

/* Analytics: Brief status breakdown - counts how many briefs exist per status */

router
    .route("/status-breakdown")
    .get(async (req, res) => {

        try {

            const breakdown = await Brief.aggregate(
                [
                    {
                         $group: {
                            _id: "$status",
                            count: { $sum: 1 },
                        },
                    },               
                ]
            );

            res.json(breakdown);
            
        } catch (error) {

            res.status(500).jason({ message: error.message });
            
        }
    }
);

/* Analytics: Brief volume by team member - counts how many briefs are assigned to each team member */

router
    .route("/briefs-by-team-member")
    .get(async (req, res) => {

        try {

            const volume = await Brief.aggregate(
                [
                    {
                        $match: { assignedTo: { $ne: null } },
                    },
                    {
                        $group: {
                            _id: "$assignedTo",
                            briefCount: { $sum: 1 },
                        },
                    },
                    {
                        $lookup: {
                            from: "teammembers",
                            localField: "_id",
                            foreignField: "_id",
                            as: "teamMemberInfo",
                        },
                    },
                ]
            );

            res.json(volume);

        } catch (error) {

            res.status(500).json({ message: error.message });

        }
    }
);

export default router;