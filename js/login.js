const passwordLogin = document.getElementById("passwordLogin");
const togglePasswordLogin = document.getElementById("togglePasswordLogin");

togglePasswordLogin.addEventListener("click", () => {
  const type = passwordLogin.type === "password" ? "text" : "password";
  passwordLogin.type = type;
  togglePasswordLogin.classList.toggle("fa-eye");
  togglePasswordLogin.classList.toggle("fa-eye-slash");
});

const loginForm = document.querySelector(".form_login");
const loginEmail = loginForm.querySelector("#email_login");
const loginPassword = loginForm.querySelector("#passwordLogin");
const errorMessage = document.querySelector("#error-message");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailValue = loginEmail.value.trim();
    const passwordValue = loginPassword.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(user => user.email === emailValue && user.password === passwordValue);

    if (matchedUser) {
      localStorage.setItem("user", JSON.stringify(matchedUser));
        window.location.replace("home.html"); 
    } else {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Invalid email or password ❌";
        
    }
});
document.querySelectorAll(".form input").forEach(input => {
    input.addEventListener("input", () => {
      if (input.value.trim() !== "") {
        input.classList.add("valid");
      } else {
        input.classList.remove("valid");
      }
    });
  });
  