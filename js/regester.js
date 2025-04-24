const regestrationForm = document.querySelector(".regestration");
const passwordInput = document.querySelector("#password");
const passwordIcon = document.querySelector("#password-icon");
const confirmPasswordInput = document.querySelector("#confirm-password");
const confirmPasswordIcon = document.querySelector("#confirm-password-icon");
const form = document.querySelector(".form");
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#Last_name");
const email = document.querySelector("#email");
const errorMessage = document.querySelector("#error-message");
const inputs = form.querySelectorAll("input");
const nameRegex = /^[A-Za-z]{3,}(?:\s[A-Za-z]{3,})?$/; 
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^.{8,}$/;
const users = [];
const togglePasswordVisibility = (inputEl, iconEl) => {
    if (inputEl.type === "password") {
        inputEl.type = "text";
        
        iconEl.classList.add("fa-eye-slash");
        iconEl.classList.remove("fa-eye");
    }
    else {
        inputEl.type = "password";
        iconEl.classList.add("fa-eye");
        iconEl.classList.remove("fa-eye-slash");
    }
}

passwordIcon.addEventListener("click", () => {
    togglePasswordVisibility(passwordInput, passwordIcon);
}
);
confirmPasswordIcon.addEventListener("click", () => {
    togglePasswordVisibility(confirmPasswordInput, confirmPasswordIcon);
}
);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let errors = [];

    if (!nameRegex.test(firstName.value.trim())) {
        errors.push("Please enter a valid first name (at least 3 letters).");
    }

    if (!nameRegex.test(lastName.value.trim())) {
        errors.push("Please enter a valid last name (at least 3 letters).");
    }

    if (!emailRegex.test(email.value.trim())) {
        errors.push("Please enter a valid email address.");
    }

    if (!passwordRegex.test(passwordInput.value)) {
        errors.push("Password must be at least 8 characters.");
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        errors.push("Passwords do not match.");
    }

    if (errors.length > 0) {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = errors.join("<br>");
    } else {
        errorMessage.innerHTML = "";
        
        let users = JSON.parse(localStorage.getItem("users")) || [];
        const isExisting = users.some(user => user.email === email.value.trim());
        if (isExisting) {
            errorMessage.style.display = "block";
            errorMessage.innerHTML = "This email is already registered.";
            return;
        }

        const newUser =  new User(firstName.value.trim(), lastName.value.trim(), email.value.trim(), passwordInput.value);

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful ✅");
        window.location.replace("./html/login.html"); 
        
    }
});

inputs.forEach(input => {
    input.addEventListener("input", () => {
        validateField(input);
    });
});

function validateField(input) {
    let isValid = false;
    const value = input.value.trim();

    if (input.id === "first_name" || input.id === "Last_name") {
        isValid = nameRegex.test(value);
    } else if (input.id === "email") {
        isValid = emailRegex.test(value);
    } else if (input.id === "password") {
        isValid = passwordRegex.test(value);
    } else if (input.id === "confirm-password") {
        isValid = value === passwordInput.value && passwordRegex.test(value);
    }

    if (isValid) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}
function User(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
}

function addUser(user) {
    users.push(user);

}