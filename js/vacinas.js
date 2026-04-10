// Vai pegar do select
function carregarPacientesSelect() {
  const select = document.getElementById("pacienteSelect");
  select.innerHTML = "";

  const pacientes = getPacientes();

  pacientes.forEach(p => {
    const option = document.createElement("option");
    option.value = p.id;
    option.textContent = p.nome;
    select.appendChild(option);
  });
}

// Registro de vacinas
function aplicarVacina() {
  const select = document.getElementById("pacienteSelect");

  // Proteção, estava dando problema no registro de vacinas. 
  if (!select || !select.value) {
    alert("Selecione um paciente");
    return;
  }

  const pacienteId = select.value;
  const nomeVacina = document.getElementById("vacinaNome").value;
  const dose = document.getElementById("dose").value;
  const profissional = document.getElementById("profissional").value;

  if (!nomeVacina || !dose || !profissional) {
    alert("Preencha todos os campos");
    return;
  }

  const vacina = {
    id: Date.now(),
    pacienteId: Number(pacienteId),
    nome: nomeVacina,
    dose: dose,
    profissional: profissional,
    data: new Date().toLocaleDateString()
  };

  saveVacina(vacina);

  alert("Vacina registrada!");

  document.getElementById("vacinaNome").value = "";
  document.getElementById("dose").value = "";
  document.getElementById("profissional").value = "";
}

// Editar as vacinas refistradas
function editarVacina(vacinaId, novoNome, novaData) {
  const vacinas = getVacinas();

  const index = vacinas.findIndex(v => v.id === vacinaId);

  if (index === -1) {
    alert("Vacina não encontrada");
    return;
  }

  vacinas[index].nome = novoNome;
  vacinas[index].data = novaData;

  salvarVacinas(vacinas);

  alert("Vacina editada com sucesso!");
}

function abrirEdicaoVacina(vacinaId) {
  const vacinas = getVacinas();
  const vacina = vacinas.find(v => v.id === vacinaId);

  if (!vacina) {
    alert("Vacina não encontrada");
    return;
  }

  const novoNome = prompt("Novo nome:", vacina.nome);
  const novaDose = prompt("Nova dose:", vacina.dose);
  const novoProfissional = prompt("Novo profissional:", vacina.profissional);

  if (!novoNome || !novaDose || !novoProfissional) {
    alert("Edição cancelada");
    return;
  }

  vacina.nome = novoNome;
  vacina.dose = novaDose;
  vacina.profissional = novoProfissional;

  salvarVacinas(vacinas);

  alert("Vacina atualizada!");

  // 🔥 recarrega a lista
  verVacinas(vacina.pacienteId);
}