function doSomething(value) {
    if (value < 0) {
        // Create a new Error object with a custom message
        let error = new Error("Value must be non-negative");
        
        // Throw the error to indicate something went wrong
        throw error;
    }
    
    console.log("Value is: " + value);
}

try {
    doSomething(-1);
} catch (error) {
    // Handle the error
    console.error("An error occurred: " + error.message);
}
