function registrarVacina(pacienteId, nomeVacina) {
  const vacina = {
    id: Date.now(),
    pacienteId: pacienteId,
    nome: nomeVacina,
    data: new Date().toLocaleDateString()
  };

  saveVacina(vacina);
}