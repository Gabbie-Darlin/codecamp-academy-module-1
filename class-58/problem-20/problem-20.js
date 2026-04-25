// Author: Gab-Darlin <Gabbie-Darlin>

// Stimulated server response code
const statusCode = 123;

switch (statusCode) {
    case 200:
        console.log("Request Successful");
        break;
    
    case 400:
        console.log("Bad Request");
        break;
    
    case 401:
        console.log("Unauthorized Access");
        break;
    
    case 404:
        console.log("Resource not found");
        break;
    
    case 500:
        console.log("Internal server error");
        break;
    
    default:
        console.log("Unknown status code.");
}