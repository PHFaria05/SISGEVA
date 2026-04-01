function cadastrarPaciente() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;

  if (!nome.trim() || !idade) {
    alert("Preencha todos os campos corretamente");
    return;
  }

  const paciente = {
    id: Date.now(),
    nome: nome,
    idade: idade
  };

  savePaciente(paciente);

  limparCampos();
  listarPacientes();
}

// LISTAR
function listarPacientes() {
  const lista = document.getElementById("listaPacientes");
  lista.innerHTML = "";

  const pacientes = getPacientes();

  pacientes.forEach(p => {
    if (!p.nome || !p.idade) return;

    const li = document.createElement("li");

    li.innerHTML = `
      ${p.nome} - ${p.idade} anos
      <button onclick="editarPaciente(${p.id})">Editar</button>
      <button onclick="removerPaciente(${p.id})">Excluir</button>
    `;

    lista.appendChild(li);
  });
}

// EDITAR
function editarPaciente(id) {
  const pacientes = getPacientes();
  const paciente = pacientes.find(p => p.id === id);

  document.getElementById("nome").value = paciente.nome;
  document.getElementById("idade").value = paciente.idade;

  removerPaciente(id);
}

// REMOVER
function removerPaciente(id) {
  let pacientes = getPacientes();
  pacientes = pacientes.filter(p => p.id !== id);
  localStorage.setItem("pacientes", JSON.stringify(pacientes));

  listarPacientes();
}

// LIMPAR CAMPOS
function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("idade").value = "";
}