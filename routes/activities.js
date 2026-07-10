import express from "express";
import Activity from "../models/Activity.js";

const router = express.Router();

/* Requirements - Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database. Weight 10%
1 of 3 - This one activities.js - GET all activities */

router
    .route("/")
    .get(async (req, res) => {

        try {

            const filter = {};

            if (req.query.read) {

                filter.read = req.query.read === "true";

            }

            const activities = await Activity.find(filter);
            res.json(activities);
            
        } catch (error) {

            res.status(500).json({ message: error.message});
            
        }
    }
)

/* Requirements - Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request. Weight 10%
1 of 3 - This one activities.js */

    .post(async (req, res) => {

        try {

            const newActivity = new Activity(req.body);
            const savedActivity = await newActivity.save();
            res.status(201).json(savedActivity);
            
        } catch (error) {

            res.status(400).json({ message: error.message});
            
        }
    }
);

/* GET activity by ID */

router
    .route("/:id")
    .get(async (req, res) => {

        try {

            const activity = await Activity.findById(req.params.id);

            if(!activity) {

                return res.status(404).json({ message: "Activity not found"});

            }

            res.json(activity);
            
        } catch (error) {

            res.status(500).json({ message: error.message});
            
        }
    }
)

/* Requirements - Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request. Weight 10%
1 of 3 - This one activities.js */

    .patch(async (req, res) => {

        try {

            const updatedActivity = await Activity.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});

            if(!updatedActivity) {

                return res.status(404).json({ message: "Activity not found"});

            }

            res.json(updatedActivity);
            
        } catch (error) {

            res.status(400).json({ message: error.message});
            
        }
    }
)

/* Requirements - Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request. Weight 10%
1 of 3 - This one activities.js */

    .delete(async (req, res) => {

        try {

            const deletedActivity = await Activity.findByIdAndDelete(req.params.id);

            if(!deletedActivity) {

                return res.status(404).json({ message: "Activity not found"});

            }

            res.json({ message: "Activity deleted successfully"});
            
        } catch (error) {

            res.status(500).json({ message: error.message});
            
        }
    }
);

export default router;