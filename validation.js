// creating a schema validation 'postsCol' collection

db.createCollection("postsCol", {
validator: {$jsonSchema: 
    {
        bsonType: "object",
        required: ["postTitle", "postContent", "datePosted", "user", "comments"],
        properties: {
            postTitle:{
                bsonType: "string",
                description: "Must be a String"
            },
            postContent: {
                bsonType: "string",
                description: "Must be a String"
            },
            datePosted: {
                bsonType: "string",
                description: "Must be a string"
            },  
            user: {
                bsonType: "objectId",
                description: "must be an object id"
            },
            comments: {
                bsonType: "array",
                description: "Must be an array",
                items:{
                    bsonType: "object",
                    required: ["_id", "text"],
                    properties:{
                        _id: {
                            bsonType: "string",
                            description: "be a string"
                        },
                        text: {
                            bsonType: "string",
                            description: "must be an string",
                        }
                    }
                }
            }
        }
    }
    }
})