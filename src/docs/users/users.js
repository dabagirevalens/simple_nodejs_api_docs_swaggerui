module.exports = {
  // operation's method
  post: {
    tags: ["User CRUD operations"], 
    description: "Create user", 
    operationId: "createUser", 
    parameters: [], 
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/User", 
          },
        },
      },
    },
    // expected responses
    responses: {
      // response code
      201: {
        description: "User created successfully",
      },
      // response code
      500: {
        description: "Server error",
      },
    },
  },
};
