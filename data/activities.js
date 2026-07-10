/* Requirement - Populate your application's collections with sample data illustrating the use case of the collections. You must include at least five sample documents per collection.
1 of 3 - This one activities.js */

export const activities = [

    {
        type: "Status Change",
        message: "Brief status changed from Not Started to Active.",
        brief: "6a5116e37cfbd7eb288f9641",
        teamMember: "6a5116e37cfbd7eb288f963c",
        read: false,
    },

     {
        type: "Assignment",
        message: "Brief assigned to team member for review.",
        brief: "6a5116e37cfbd7eb288f9642",
        teamMember: "6a5116e37cfbd7eb288f963d",
        read: false,
    },

     {
        type: "Comment",
        message: "Left feedback on creative direction for this brief.",
        brief: "6a5116e37cfbd7eb288f9643",
        teamMember: "6a5116e37cfbd7eb288f963e",
        read: true,
    },

     {
        type: "Status Change",
        message: "Brief status changed from Active to On Hold.",
        brief: "6a5116e37cfbd7eb288f9641",
        teamMember: "6a5116e37cfbd7eb288f963d",
        read: false,
    },

     {
        type: "Assignment",
        message: "Reassigned brief to a different team member.",
        brief: "6a5116e37cfbd7eb288f9642",
        teamMember: "6a5116e37cfbd7eb288f963c",
        read: true,
    },

];