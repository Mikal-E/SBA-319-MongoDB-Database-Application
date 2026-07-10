import express from "express";
import TeamMember from "../models/TeamMember.js";

const router = express.Router();

/* Requirements - Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database. Weight 10%
3 of 3 - This one teamMembers.js - GET all team members */

router
    .route("/")
    .get(async (req, res) => {

        try {

            const teamMembers = await TeamMember.find();
            res.json(teamMembers);
            
        } catch (error) {

            res.status(500).json({ message: error.message});
            
        }
    }
)

/* Requirments - Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request. Weight 10%
3 of 3 - This one teamMembers.js */

    .post(async (req, res) => {

        try {

            const newTeamMember = new TeamMember(req.body);
            const savedTeamMember = await newTeamMember.save();
            res.status(201).json(savedTeamMember);
            
        } catch (error) {

            res.status(400).json({ message: error.message});

            
        }
    }
);

/* GET team member by ID */

router
    .route("/:id")
    .get(async (req, res) => {

        try {

            const teamMember = await TeamMember.findById(req.params.id);

            if (!teamMember) {

                return res.status(404).json({ message: "Team member not found" });

            }

            res.json(teamMember);
            
        } catch (error) {

            res.status(500).json({ message: error.message});
            
        }
    }
)

/* Requirements - Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request. Weight 10%
3 of 3 - This one teamMembers.js */

    .patch(async (req, res) => {

        try {

            const updatedTeamMember = await TeamMember.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

            if (!updatedTeamMember) {

                return res.status(404).json({ message: "Team member not found" });

            }
            
            res.json(updatedTeamMember);
            
        } catch (error) {

            res.status(400).json({ message: error.message });
            
        }
    }
)

/* Requirements - Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request. Weight 10%
3 of 3 - This one teamMembers.js */

    .delete(async (req, res) => {

        try {

            const deletedTeamMember = await TeamMember.findByIdAndDelete(req.params.id);

            if (!deletedTeamMember) {

                return res.status(404).json({ message: "Team member not found" });

            }

            res.json({ message: "Team member deleted successfully "});
            
        } catch (error) {

            res.status(500).json({ message: error.message});
            
        }       
    }
);

export default router;