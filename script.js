const passwordInput = document.getElementById("password");
const toggleButton = document.getElementById("toggle-password");
const eyeIcon = document.getElementById("eye-icon");
const form = document.getElementById("login-form");

const eyeOpenPath = `
  <path d="M1 9s4-7.5 10-7.5S21 9 21 9s-4 7.5-10 7.5S1 9 1 9z" stroke="#d3d3d3" stroke-width="1.5"/>
  <circle cx="11" cy="9" r="3" stroke="#d3d3d3" stroke-width="1.5"/>
`;

const eyeClosedPath = `
  <path d="M1 9s4-7.5 10-7.5S21 9 21 9s-4 7.5-10 7.5S1 9 1 9z" stroke="#d3d3d3" stroke-width="1.5"/>
  <line x1="3" y1="1" x2="19" y2="17" stroke="#d3d3d3" stroke-width="1.5"/>
`;

toggleButton.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  eyeIcon.innerHTML = isPassword ? eyeClosedPath : eyeOpenPath;
  toggleButton.setAttribute(
    "aria-label",
    isPassword ? "Ocultar contraseña" : "Mostrar contraseña"
  );
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert("Completa correo y contraseña para continuar.");
    return;
  }

  console.log("Enviando login:", { email, password });
  // Aquí iría la llamada real a tu API de autenticación
});
