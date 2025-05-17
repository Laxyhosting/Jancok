function showLogin() {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("registerForm").classList.add("hidden");
}

function showRegister() {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("registerForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}