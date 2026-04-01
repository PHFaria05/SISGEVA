function registrarVacina(pacienteId, nomeVacina) {
  const vacina = {
    id: Date.now(),
    pacienteId: pacienteId,
    nome: nomeVacina,
    data: new Date().toLocaleDateString()
  };

  saveVacina(vacina);
}

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

function aplicarVacina() {
  const pacienteId = document.getElementById("pacienteSelect").value;
  const nomeVacina = document.getElementById("vacinaNome").value;

  if (!nomeVacina) {
    alert("Digite o nome da vacina");
    return;
  }

  const vacina = {
    id: Date.now(),
    pacienteId: Number(pacienteId),
    nome: nomeVacina,
    data: new Date().toLocaleDateString()
  };

  saveVacina(vacina);

  alert("Vacina registrada!");

  document.getElementById("vacinaNome").value = "";
}