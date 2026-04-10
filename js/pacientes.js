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
  carregarPacientesSelect();
}

// Listagm
function listarPacientes() {
  const lista = document.getElementById("listaPacientes");
  lista.innerHTML = "";

  const pacientes = getPacientes();

  pacientes.forEach(p => {
    if (!p.nome || !p.idade) return;

    const li = document.createElement("li");

    li.innerHTML = `
      ${p.nome} - ${p.idade} anos
      <button onclick="verVacinas(${p.id})">Ver Vacinas</button>
      <button onclick="editarPaciente(${p.id})">Editar</button>
      <button onclick="removerPaciente(${p.id})">Excluir</button>
    `;

    lista.appendChild(li);
  });
}

// Mudar dados do paciente
function editarPaciente(id) {
  const pacientes = getPacientes();
  const paciente = pacientes.find(p => p.id === id);

  document.getElementById("nome").value = paciente.nome;
  document.getElementById("idade").value = paciente.idade;

  removerPaciente(id);
}

// Remove
function removerPaciente(id) {
  let pacientes = getPacientes();
  pacientes = pacientes.filter(p => p.id !== id);
  localStorage.setItem("pacientes", JSON.stringify(pacientes));

  listarPacientes();
}

// Limpar
function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("idade").value = "";
}

function verVacinas(pacienteId) {
  const vacinas = getVacinas();
  const lista = vacinas.filter(v => v.pacienteId === pacienteId);

  const container = document.getElementById("areaVacinas");
  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = "<p>Nenhuma vacina registrada.</p>";
    return;
  }

  const ul = document.createElement("ul");

  lista.forEach(v => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${v.nome} (${v.dose}) - ${v.data}
      <br>Profissional: ${v.profissional}
    `;

    // 🔥 BOTÃO EDITAR
    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";

    botaoEditar.onclick = () => abrirEdicaoVacina(v.id);

    li.appendChild(botaoEditar);
    ul.appendChild(li);
  });

  container.appendChild(ul);
}