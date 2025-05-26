import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Category from "../img/category.svg";

import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const chooseCategoryAndReorderQuestions = (category) => {
    dispatch({ type: "START_GAME", payload: category });
    dispatch({ type: "REORDER_QUESTIONS" });
  };

  return (
    <div id="category">
      <h2 className="greeting">Olá, <strong>{quizState.player.name}</strong>! Pronto para jogar?</h2>
      
      {/* Bloco do jogador */}
      <div className="player-info">
        <img
          src={quizState.player.avatar}
          alt={`Avatar de ${quizState.player.name}`}
          className="avatar-mini"
        />
      </div>

      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
      <div>
        {quizState.questions.map((question) => (
          <button
            onClick={() => chooseCategoryAndReorderQuestions(question.category)}
            key={question.category}
          >
            {question.category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PickCategory;
