import express from "express";
import Brief from "../models/Brief.js"

const router = express.Router();

/* Requirements - Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database. Weight 10%
2 of 3 - This one briefs.js - GET all briefs */

router
    .route("/")
    .get(async (req, res)=> {

        try {

            const filter = {};

            if (req.query.status) {

                filter.status = req.query.status;

            }

            const briefs = await Brief.find(filter);
            res.json(briefs);
            
        } catch (error) {

            res.status(500).json({ message: error.message});
            
        }
    }
)

/* Requirments - Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request. Weight 10%
2 of 3 - This one briefs.js */

    .post(async (req, res) => {

        try {

            const newBrief = new Brief(req.body);
            const savedBrief = await newBrief.save();
            res.status(201).json(savedBrief);
            
        } catch (error) {

            res.status(400).json({ message: error.message});
            
        }
    }
);

/* GET brief by ID */

router
    .route("/:id")
    .get(async (req, res)=> {

        try {

            const brief = await Brief.findById(req.params.id);

            if (!brief) {

                return res.status(404).json({ message: "Brief not found" });

            }

            res.json(brief);
            
        } catch (error) {

            res.status(500).json({ message: error.message});
            
        }
    }
)

/* Requirements - Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request. Weight 10%
2 of 3 - This one briefs.js */

    .patch(async (req, res) => {

        try {

            const updatedBrief = await Brief.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});

            if (!updatedBrief) {

                return res.status(404).json({ message: "Brief not found" });

            }
            
            res.json(updatedBrief);

        } catch (error) {
            
            res.status(400).json({ message: error.message});

        }
    }
)

/* Requirements - Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request. Weight 10%
2 of 3 - This one briefs.js */

    .delete(async (req, res) => {

        try {

            const deletedBrief = await Brief.findByIdAndDelete(req.params.id);

            if (!deletedBrief) {

                return res.status(404).json({ message: "Brief not found" });

            }

            res.json({ message: "Brief deleted successfully" });
            
        } catch (error) {

            res.status(500).json({ message: error.message});
            
        }
    }
);

export default router;
