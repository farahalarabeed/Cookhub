Register

function registerUser(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name && email && password) {
        alert("Welcome " + name + "! You have registered successfully.");
    } else {
        alert("Please complete all fields.");
    }
}
