// JavaScript code for form validation

// Prevent form from submitting
document.getElementById("myForm").addEventListener("submit", function(event) {

    // Retrieve the input field value
    let inputElement = document.getElementById("inputField").value;

    // Regular expression pattern for alphanumeric input
    const expPattern = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    if (expPattern.test(inputElement)) {
    // Valid input: display confirmation and submit the form
        alert("Success, the input value is alphanumeric.");
    // Invalid input: display error message
    } else {
        alert("Error, the input value is not alphanumeric.");

        // Prevent the form from submitting if the input value is not alphanumeric
        event.preventDefault();
    }

});
