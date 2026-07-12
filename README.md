##### **Brief.io Activity \& Notifications Backend**



###### **Description**



A Node.js, Express, and MongoDB (Mongoose) backend that tracks team activity and notifications across campaign briefs. It is built as a standalone project (SBA 319) within the larger Brief.io portfolio ecosystem.



Brief.io is an AI-powered campaign brief builder SaaS product, built as the anchor portfolio project across a 15-week MERN Software Engineer intensive. This specific project, the **Activity \& Notifications Backend**, is a standalone backend feature supporting Brief.io's future team dashboard, tracking status changes, assignments, and comments across campaign briefs, along with read/unread notification state. Its analytics routes also power dashboard reporting (brief status breakdown, brief volume by team member) that Brief.io's future React dashboard will utilize. **The plans for an AI-powered brief builder are for a future iteration, as well as a multistep conditional logic form for the brief builder. These may not be a apart of the final Brief.io project ecosystem prior to the cohort completion.**



###### **API Routes**



**Activities - /api/activities | routes/activities**



GET Get all activity records (optional ?read= filter, example: ?read=false)

GET /:id Get one activity record by ID

POST Create a new activity record

PATCH /:id Update an activity record (mark as read)

DELETE /:id Delete an activity record



**Analytics - /api/analytics | routes/analytics**



GET status-breakdown aggregate count of briefs grouped by status

GET briefs-by-team-member aggregate count of briefs grouped by assigned team member

Average turnaround time is not implemented in this SBA. Brief does not currently track a start date or completion date, so a real duration cannot be calculated. This is planned for future iterations.



**Briefs - /api/briefs | routes/briefs**



GET Get all briefs (optional ?status= filter, example: ?status=Active)

GET /:id Get one brief by ID

POST Create a new brief

PATCH /:id Update a brief

DELETE /:id Delete a brief



**TeamMembers - /api/teamMembers | routes/teamMembers**



GET  Get all team members

GET /:id Get one team member by ID

POST Create a new team member

PATCH /:id Update a team member

DELETE /:id Delete a team member



###### **Testing**



**Terminal Output From Route Testing - /routes**



**routes/activities:**



GET

\----- 9:07:04 PM: Received a GET request to /api/activities.

\----- 9:07:19 PM: Received a GET request to /api/activities?read=false.

\----- 9:07:34 PM: Received a GET request to /api/activities?read=true.

\----- 9:07:49 PM: Received a GET request to /api/activities/6a513e73c5cd7d92a5488ff4.



POST
----- 9:10:36 PM: Received a POST request to /api/activities/.

Containing the data:

{"type":"Comment","message":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.","brief":"6a5116e37cfbd7eb288f9642","teamMember":"6a5116e37cfbd7eb288f963d","read":false}


PATCH
----- 9:12:35 PM: Received a PATCH request to /api/activities/6a52e98c8e7bf5eda0a68f28.

Containing the data:

{"read":true}


DELETE

\----- 9:15:29 PM: Received a DELETE request to /api/activities/6a52e98c8e7bf5eda0a68f28.



**routes/analytics:**



GET
----- 9:20:58 PM: Received a GET request to /api/analytics/status-breakdown.

\----- 9:21:19 PM: Received a GET request to /api/analytics/briefs-by-team-member.


**routes/briefs:**



GET

\----- 8:53:12 PM: Received a GET request to /api/briefs.

\----- 8:53:31 PM: Received a GET request to /api/briefs?status=Active.

\----- 8:53:48 PM: Received a GET request to /api/briefs?status=Completed.

\----- 8:54:10 PM: Received a GET request to /api/briefs/6a5116e37cfbd7eb288f9641.



POST

\----- 8:57:08 PM: Received a POST request to /api/briefs.

Containing the data:

{"projectName":"Test Project","projectType":"Test Type","timeline":"3 months","targetAudience":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.","status":"Not Started"}



PATCH

\----- 8:58:50 PM: Received a PATCH request to /api/briefs/6a52e6648e5c51b70f83e2ff.

Containing the data:

{"status":"Active"}



DELETE

\----- 8:59:22 PM: Received a DELETE request to /api/briefs/6a52e6648e5c51b70f83e2ff.



**routes/teamMembers:**



GET

\----- 8:37:11 PM: Received a GET request to /api/teamMembers.

\----- 8:37:57 PM: Received a GET request to /api/teamMembers/6a5116e37cfbd7eb288f963c.



POST

\----- 8:42:22 PM: Received a POST request to /api/teamMembers.

Containing the data:

{"name":"Testing","role":"Test Role","email":"test@brief.io","department":"Marketing (Integrated)","status":"Inactive"}



PATCH

\----- 8:45:08 PM: Received a PATCH request to /api/teamMembers/6a52e2ee19f199b94ae77799.

Containing the data:

{"status":"Inactive"}



DELETE

\----- 8:45:44 PM: Received a DELETE request to /api/teamMembers/6a52e2ee19f199b94ae77799.

























