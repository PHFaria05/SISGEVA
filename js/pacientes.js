function cadastrarPaciente() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;

  if (!nome.trim() || !idade) {
    mostrarToast("⚠️ Preencha todos os campos corretamente.");
    return;
  }

  const paciente = {
    id: Date.now(),
    nome: nome,
    idade: idade
  };

  savePaciente(paciente);

  limparCampos();
  mostrarToast("✅ Paciente cadastrado com sucesso!");
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
      <button onclick="irParaVacinas(${p.id})">Ver Vacinas</button>
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

  // Aqui é para preencher os campo com os dados do paciente
  document.getElementById("nome").value = paciente.nome;
  document.getElementById("idade").value = paciente.idade;

  //Muda o butão de "Cadastrar" para "Salvar"
  const btn = document.getElementById("btnCadastrar");
  btn.onclick = function() {
    salvarEdicaoPaciente(id);
  }

  // Volta para tela de cadastro
  mostrarTela("cadastroPaciente");
}

function salvarEdicaoPaciente(id) {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;

  if (!nome.trim() || !idade) {
    mostrarToast("⚠️ Preencha todos os campos.");
    return;
  }

  let paciente = getPacientes();
  const index = paciente.findIndex(p => p.id === id);
  paciente[index].nome = nome;
  paciente[index].idade = idade;
  localStorage.setItem("pacientes", JSON.stringify(paciente));

  mostrarToast("✏️ Paciente atualizado!");

  // o botão vola ao normal
  const btn = document.getElementById("btnCadastrar");
  btn.textContent = "Cadastrar";
  btn.onclick = cadastrarPaciente;

  limparCampos();
  listarPacientes();
  mostrarTela("listaPaciente");
}

// Remove
function removerPaciente(id) {
  let pacientes = getPacientes();
  pacientes = pacientes.filter(p => p.id !== id);
  localStorage.setItem("pacientes", JSON.stringify(pacientes));

  mostrarToast("🗑️ Paciente removido.")

  listarPacientes();
}

// Limpar
function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("idade").value = "";
}

function verVacinas(pacienteId) {
  const vacinas = getVacinas();
  const lista = vacinas.filter(v => v.pacienteId === Number(pacienteId));

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

    // BOTÃO EDITAR
    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";

    botaoEditar.onclick = () => abrirEdicaoVacina(v.id);

    li.appendChild(botaoEditar);
    ul.appendChild(li);
  });

  container.appendChild(ul);
}