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

  alert("Paciente cadastrado!");

  document.getElementById("nome").value = "";
  document.getElementById("idade").value = "";

  listarPacientes();
}

function listarPacientes() {
  const lista = document.getElementById("listaPacientes");
  lista.innerHTML = "";

  const pacientes = getPacientes();

  pacientes.forEach(p => {
  if (!p.nome || !p.idade) return;

  const li = document.createElement("li");
  li.textContent = `${p.nome} - ${p.idade} anos`;
  lista.appendChild(li);
});
}