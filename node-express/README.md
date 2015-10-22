# Node Express example

In this example, the client code is located in public/javascripts/main.js.   submitHandler handles collecting the data for the POST and triggers the operation.   postHandler receives the result of the operation and displays the information returned by the server.

The server code is located in routes/jsonpost.js.   This file defines a template string with placeholders for uuid, payload and origin values.   It retrieves the uuid and origin from the request body.  And passes the payload from the request body to processPayload.  The return from processPayload becomes the payload value for the response.   Which gets returned to the client in the hidden iframe the library creates. 
