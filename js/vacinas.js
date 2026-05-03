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
    mostrarToast("⚠️ Selecione um paciente.");
    return;
  }

  const vacina = {
    id: Date.now(),
    pacienteId: Number(select.value),
    nome: document.getElementById("vacinaNome").value.trim(),
    dose: document.getElementById("dose").value.trim(),
    data: document.getElementById("dataVacina").value,
    profissional: document.getElementById("profissional").value.trim(),
    lote: document.getElementById("lote").value.trim(),
    observacoes: document.getElementById("observacoes").value.trim()
  };

  const erro = validarVacina(vacina);

  if (erro) {
    mostrarToast(erro);
    return;
  }

  saveVacina(vacina);

  mostrarToast("✅ Vacina registrada com sucesso!")

  limparFormularioVacina();

  verVacinas(vacina.pacienteId);
}

// Editar as vacinas refistradas
function editarVacina(vacinaId, novoNome, novaData) {
  const vacinas = getVacinas();

  const index = vacinas.findIndex(v => v.id === vacinaId);

  if (index === -1) {
    mostrarToast("⚠️ Vacina não encontrada.");
    return;
  }

  vacinas[index].nome = novoNome;
  vacinas[index].data = novaData;

  salvarVacinas(vacinas);

  mostrarToast("✏️ Vacina atualizada!")
}

function abrirEdicaoVacina(vacinaId) {
  const vacinas = getVacinas();
  const vacina = vacinas.find(v => v.id === vacinaId);

  if (!vacina) {
    mostrarToast("⚠️ Vacina não encontrada.");
    return;
  }

  const novoNome = prompt("Novo nome:", vacina.nome);
  const novaDose = prompt("Nova dose:", vacina.dose);
  const novoProfissional = prompt("Novo profissional:", vacina.profissional);

  if (!novoNome || !novaDose || !novoProfissional) {
    mostrarToast("⚠️ Edição cancelada.")
    return;
  }

  vacina.nome = novoNome;
  vacina.dose = novaDose;
  vacina.profissional = novoProfissional;

  salvarVacinas(vacinas);
  mostrarToast("✏️ Vacina atualizada!");

  // recarrega a lista
  verVacinas(vacina.pacienteId);
}

function validarVacina(vacina) {
  if (!vacina.nome) {
    return "Informe o nome da vacina.";
  }

  if (!vacina.dose) {
    return "Informe a dose.";
  }

  if (!vacina.data) {
    return "Informe a data.";
  }

  if (!vacina.profissional) {
    return "Informe o profissional.";
  }

  if (!vacina.lote) {
    return "Informe o lote.";
  }

  const hoje = new Date();
  const dataVacina = new Date(vacina.data);

  if (dataVacina > hoje) {
    return "A data não pode ser futura.";
  }

  return null;
}

function limparFormularioVacina() {
  document.getElementById("vacinaNome").value = "";
  document.getElementById("dose").value = "";
  document.getElementById("dataVacina").value = "";
  document.getElementById("profissional").value = "";
  document.getElementById("lote").value = "";
  document.getElementById("observacoes").value = "";
}