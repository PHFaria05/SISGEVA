function mostrarTela(id) {
  const telas = document.querySelectorAll(".tela");

  telas.forEach(t => t.style.display = "none");

  document.getElementById(id).style.display = "block";
}