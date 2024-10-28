import React, { useState } from "react";
import questions from "./questions"; // Ajuste se necessário para o caminho correto
import { useLocation } from "react-router-dom";
import Section from "../../components/section/Section";
import "./Atividade.css";

export default function Atividade() {
  const location = useLocation();
  const { state } = location || {}; // Aqui ajustamos o acesso a `state`
  const perguntas = questions[state] || []; // Usa um array vazio se a IST não for encontrada

  const [selectedOptions, setSelectedOptions] = useState(
    Array(perguntas.length).fill(null)
  );

  const handleAnswerClick = (questionIndex, optionIndex) => {
    if (selectedOptions[questionIndex] !== null) return; // Impede de selecionar outra resposta na mesma questão

    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <main className="main-activitie">
      {perguntas.map((question, questionIndex) => (
        <Section key={questionIndex} title={question.pergunta} color="#e6bc2f">
          <div className="question-div">
            {question.respostas.map((option, optionIndex) => {
              const isSelected = selectedOptions[questionIndex] === optionIndex;
              const isCorrect = optionIndex === question.correta; // Verificação correta
              let backgroundColor = "#424242";

              if (isSelected) {
                backgroundColor = isCorrect ? "#4dad5b" : "#de0a26";
              } else if (selectedOptions[questionIndex] !== null && isCorrect) {
                backgroundColor = "#4dad5b";
              }

              return (
                <button
                  key={optionIndex}
                  onClick={() => handleAnswerClick(questionIndex, optionIndex)}
                  style={{
                    backgroundColor,
                    margin: "5px",
                    color: "#fff",
                    padding: "10px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </Section>
      ))}
    </main>
  );
}
