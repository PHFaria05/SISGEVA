function initStorage() {
  if (!localStorage.getItem("pacientes")) {
    localStorage.setItem("pacientes", JSON.stringify([]));
  }

  if (!localStorage.getItem("vacinas")) {
    localStorage.setItem("vacinas", JSON.stringify([]));
  }
}

// PACIENTES
function getPacientes() {
  return JSON.parse(localStorage.getItem("pacientes")) || [];
}

function savePaciente(paciente) {
  const pacientes = getPacientes();
  pacientes.push(paciente);
  localStorage.setItem("pacientes", JSON.stringify(pacientes));
}

// VACINAS
function getVacinas() {
  return JSON.parse(localStorage.getItem("vacinas")) || [];
}

function saveVacina(vacina) {
  const vacinas = getVacinas();
  vacinas.push(vacina);
  localStorage.setItem("vacinas", JSON.stringify(vacinas));
}