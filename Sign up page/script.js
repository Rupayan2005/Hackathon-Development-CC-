document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const username = form.querySelector("input[name='username']");
    const email = form.querySelector("input[name='email']");
    const password = form.querySelector("input[name='password']");
    const confirmPassword = form.querySelector("input[name='confirm_password']");
    const btn = form.querySelector(".btn");

    // Basic form validation
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (validateInputs()) {
            // Submit form if all fields are valid
            alert("Sign up successful!");
            form.reset();
        }
    });

    function validateInputs() {
        let isValid = true;

        if (username.value.trim() === "") {
            showError(username, "Username cannot be empty");
            isValid = false;
        } else {
            clearError(username);
        }

        if (email.value.trim() === "" || !isValidEmail(email.value)) {
            showError(email, "Enter a valid email address");
            isValid = false;
        } else {
            clearError(email);
        }

        if (password.value.trim().length < 6) {
            showError(password, "Password must be at least 6 characters long");
            isValid = false;
        } else {
            clearError(password);
        }

        if (confirmPassword.value !== password.value) {
            showError(confirmPassword, "Passwords do not match");
            isValid = false;
        } else {
            clearError(confirmPassword);
        }

        return isValid;
    }

    function showError(input, message) {
        const errorText = document.createElement("small");
        errorText.className = "error";
        errorText.innerText = message;
        input.classList.add("error-border");

        if (!input.parentNode.querySelector("small")) {
            input.parentNode.appendChild(errorText);
        }
    }

    function clearError(input) {
        const errorText = input.parentNode.querySelector("small");
        if (errorText) {
            input.parentNode.removeChild(errorText);
        }
        input.classList.remove("error-border");
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Add hover effect to button
    btn.addEventListener("mouseover", function () {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseout", function () {
        btn.style.transform = "scale(1)";
    });
});
