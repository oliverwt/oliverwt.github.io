// DOM loaded
document.addEventListener("DOMContentLoaded", function () {
    // console.log("Page loaded")
    const form = document.getElementById("htmlForm");

    // Event listener
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent refresh page so console log is visible
        submitForm();
    });
});


// Call submitForm()
function submitForm() {
    const person = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        course: document.getElementById("course").value,
        sectionNumber: document.getElementById("section").value,
        role: document.getElementById("role").value
    }

    // Print object to console
    console.log("Person object:")
    console.log(person)

    // Multi line JSON format
    console.log("JSON Format:")
    console.log(JSON.stringify(person, null, 2));
}