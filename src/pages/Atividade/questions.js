const questions = {
  candidiase: [
    {
      pergunta:
        "Quais são alguns dos sintomas mais comuns da candidíase em mulheres?",
      respostas: [
        "Coceira intensa e dor ao urinar",
        "Corrimento branco, dor durante relações e coceira",
        "Febre alta e sangramento genital",
        "Corrimento amarelado e manchas na pele",
      ],
      correta: 1, // Índice da resposta correta
    },
    {
      pergunta:
        "Qual fator pode contribuir para o desenvolvimento da candidíase?",
      respostas: [
        "Excesso de exercícios físicos",
        "Alterações no sistema imune",
        "Consumo de alimentos ricos em vitamina C",
        "Exposição prolongada ao sol",
      ],
      correta: 1, // Índice da resposta correta
    },
  ],

  clamidia: [
    {
      pergunta: "Qual é a principal forma de transmissão da clamídia?",
      respostas: [
        "Através do consumo de água contaminada",
        "Por meio de relações sexuais desprotegidas",
        "Contato com superfícies contaminadas",
        "Compartilhamento de utensílios pessoais",
      ],
      correta: 1, // Índice da resposta correta
    },
    {
      pergunta: "Em relação à clamídia, qual afirmação é verdadeira?",
      respostas: [
        "A maioria das pessoas infectadas apresenta sintomas claros",
        "Ela é causada por um vírus",
        "A clamídia pode ser tratada com antibióticos",
        "O uso de preservativos elimina completamente o risco de transmissão",
      ],
      correta: 2, // Índice da resposta correta
    },
  ],

  gonorreia: [
    {
      pergunta: "Quais são alguns dos sintomas da gonorreia em homens?",
      respostas: [
        "Sensação de ardor ao urinar e secreção do pênis",
        "Coceira intensa e dor no abdômen",
        "Sangramento durante as relações sexuais",
        "Febre e dor de cabeça",
      ],
      correta: 0, // Índice da resposta correta
    },
    {
      pergunta:
        "Qual é um dos principais métodos de prevenção contra a gonorreia?",
      respostas: [
        "Uso de antibióticos regularmente",
        "Uso de preservativos durante as relações sexuais",
        "Evitar a prática de exercícios físicos",
        "Limpeza genital frequente com produtos químicos",
      ],
      correta: 1, // Índice da resposta correta
    },
  ],
};

// Exportar o objeto para uso em outras partes da aplicação
export default questions;
