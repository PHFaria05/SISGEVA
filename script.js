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

  atualizarLista();

  document.getElementById("nomePaciente").value = "";

  alert("Paciente salvo!");
}

// Excluir paciente (Aqui eu tive bastante dificuladade, entender essa paradas do array, mas pesquisei e o copilot me ajudou.)
function atualizarLista() {
  const lista = document.getElementById("listaPacientes");

  lista.innerHTML = "";

  for (let i = 0; i < pacientes.length; i++) {
    const li = document.createElement("li");

    li.textContent = pacientes[i] + " ";

    const btn = document.createElement("button");
    btn.textContent = "Excluir";

    btn.onclick = function () {
      excluirPaciente(i);
    };

    li.appendChild(btn);
    lista.appendChild(li);
  }
}

function excluirPaciente(index) {
  pacientes.splice(index, 1);
  atualizarLista();
}