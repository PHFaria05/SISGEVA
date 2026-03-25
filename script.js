function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "admin" && pass === "123") {
    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("mainScreen").classList.remove("hidden");
  } else {
    alert("Usuário ou senha inválidos");
  }
}

function abrirModal() {
  document.getElementById("modalPaciente").classList.add("active");
}

function fecharModal() {
  document.getElementById("modalPaciente").classList.remove("active");
}

let pacientes = [];

function salvarPaciente() {
  const nome = document.getElementById("nomePaciente").value;

  if (nome === "") {
    alert("Digite um nome");
    return;
  }

  pacientes.push(nome);

  console.log(pacientes);

  alert("Paciente salvo!");

  document.getElementById("nomePaciente").value = "";
}