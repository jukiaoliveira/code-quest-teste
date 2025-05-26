import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/logo1.png"; 

import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <img src={Quiz} alt="Início do Quiz" />
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Iniciar</button>
      
    </div>
  );
};

export default Welcome;
