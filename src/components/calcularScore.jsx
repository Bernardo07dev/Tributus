const calcularScore = (dados) => {
  let score = 100;

  if (dados.descricao_situacao_cadastral !== "ATIVA") score -= 30;

  const anos = new Date().getFullYear() - new Date(dados.data_inicio_atividade).getFullYear();
  if (anos >= 5)       score += 10;
  else if (anos >= 2)  score += 5;

  if (dados.opcao_pelo_simples) score += 5;

  if (dados.opcao_pelo_mei) score -= 5;

  if (dados.capital_social < 5000) score -= 10;

  if (!dados.nome_fantasia) score -= 5;

  if (!dados.ddd_telefone_1) score -= 5;

  return Math.min(100, Math.max(0, score));
};

export default calcularScore;