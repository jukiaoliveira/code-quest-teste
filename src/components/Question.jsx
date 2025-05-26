import { useContext, useState } from "react"; // <- Corrigido aqui
import { QuizContext } from "../context/quiz";

import Modal from "./Modal";

import Option from "./Option";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [modalMessage, setModalMessage] = useState(null); // estado para modal

  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    if (quizState.answerSelected) return;

    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
    if (option === currentQuestion.answer) {
      setModalMessage("Parabéns! Você acertou! 🎉");
    } else {
      setModalMessage("Que pena! Você errou. 😢");
    }
  };

  const closeModal = () => {
    setModalMessage(null);
  };

  return (
    <div id="question">
      <div className="player-box">
        <img
          src={quizState.player.avatar}
          alt={`Avatar de ${quizState.player.name}`}
          className="player-avatar"
        />
        <p className="player-name">{quizState.player.name}</p>
      </div>

      <p className="question-counter">
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>

      <h2 className="question-title">{currentQuestion.question}</h2>

      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
            hide={quizState.optionToHide === option ? "hide" : null}
          />
        ))}
      </div>

      {!quizState.answerSelected && !quizState.help && (
        <>
          {currentQuestion.tip && (
            <button onClick={() => dispatch({ type: "SHOW_TIP" })}>Dica</button>
          )}
          <button onClick={() => dispatch({ type: "REMOVE_OPTION" })}>
            Excluir uma
          </button>
        </>
      )}

      {!quizState.answerSelected && quizState.help === "tip" && (
        <p className="tip">{currentQuestion.tip}</p>
      )}

      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}

      {/* Adicione o Modal aqui */}
      {modalMessage && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  );
};

export default Question;
