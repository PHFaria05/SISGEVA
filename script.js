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

  salvarNoLocalStorage();
  atualizarLista();

  document.getElementById("nomePaciente").value = "";
  fecharModal();

  alert("Paciente salvo!");
}

//Aqui foi trabalho
function atualizarLista() {
  const lista = document.getElementById("listaPacientes");

  lista.innerHTML = "";

  for (let i = 0; i < pacientes.length; i++) {
    const li = document.createElement("li");

    li.textContent = pacientes[i] + " ";

    // BOTÃO EDITAR
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.onclick = function () {
      editarPaciente(i);
    };

    // BOTÃO EXCLUIR
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.onclick = function () {
      excluirPaciente(i);
    };

    li.appendChild(btnEditar);
    li.appendChild(btnExcluir);

    lista.appendChild(li);
  }
}

function excluirPaciente(index) {
  pacientes.splice(index, 1);
  salvarNoLocalStorage();
  atualizarLista();
}

function editarPaciente(index) {
  const novoNome = prompt("Digite o novo nome:", pacientes[index]);

  if (novoNome === null || novoNome === "") {
    return;
  }

  pacientes[index] = novoNome;
  salvarNoLocalStorage();
  atualizarLista();
}

function salvarNoLocalStorage() {
  localStorage.setItem("pacientes", JSON.stringify(pacientes));
}

function carregarPacientes() {
  const dados = localStorage.getItem("pacientes");

  if (dados) {
    pacientes = JSON.parse(dados);
    atualizarLista();
  }
}

carregarPacientes();