function mostrarTela(id) {
  const telas = document.querySelectorAll(".tela");

  telas.forEach(t => t.style.display = "none");

  const tela = document.getElementById(id);

  if (tela) {
    tela.style.display = "block";
  }

  // comportamento automático (sugestão do vscolpilot )
  if (id === "vacinas") {
    carregarPacientesSelect();
  }

  if (id === "listaPaciente") {
    listarPacientes();
  }
}

function irParaVacinas(pacienteId) {
  // muda de tela
  mostrarTela("vacinas");

  // carrega pacientes no select
  carregarPacientesSelect();

  // seleciona o paciente automaticamente
  const select = document.getElementById("pacienteSelect");
  select.value = pacienteId;

  // mostra as vacinas dele
  verVacinas(pacienteId);
}

// Tema escuro
function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}

// Ao carregar a página, aplica o tema salvo
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
};
