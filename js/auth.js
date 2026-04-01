function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "admin" && pass === "123") {
    document.getElementById("login").style.display = "none";
    document.getElementById("sistema").style.display = "block";

    listarPacientes();
    carregarPacientesSelect();

  } else {
    alert("Usuário ou senha inválidos");
  }
}