function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Username and Password are required!");
        return false;
    }

    // Add more validation logic as needed

    return true;
}