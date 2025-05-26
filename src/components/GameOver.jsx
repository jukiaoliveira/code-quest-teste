import { useContext, useState } from "react";
import { QuizContext } from "../context/quiz";
import "./GameOver.css";

import avatar03 from "../img/avatars/03.jpg";
import avatar08 from "../img/avatars/08.jpg";
import avatar09 from "../img/avatars/09.jpg";
import avatar15 from "../img/avatars/15.jpg";
import avatar00 from "../img/avatars/00.jpg";

const fakeRanking = [
  { name: "Ana", score: 9, avatar: avatar03 },
  { name: "Carlos", score: 7, avatar: avatar08 },
  { name: "Maria", score: 6, avatar: avatar15 },
  { name: "João", score: 4, avatar: avatar09 },
  { name: "Luiza", score: 3, avatar: avatar00 },
];

// Função que insere o jogador real no ranking e ordena
const getRankingWithPlayer = (player, score) => {
  // Crie uma cópia do ranking fictício
  let rankingCopy = [...fakeRanking];

  // Verifique se o jogador já está no ranking (pelo nome)
  const existingIndex = rankingCopy.findIndex((p) => p.name === player.name);

  if (existingIndex !== -1) {
    // Atualiza o score/avatar do jogador caso já exista
    rankingCopy[existingIndex] = {
      ...rankingCopy[existingIndex],
      score,
      avatar: player.avatar,
    };
  } else {
    // Adiciona o jogador
    rankingCopy.push({
      name: player.name,
      score,
      avatar: player.avatar,
    });
  }

  // Ordena do maior para o menor
  rankingCopy.sort((a, b) => b.score - a.score);

  // Se quiser limitar o ranking a 6 posições:
  // rankingCopy = rankingCopy.slice(0, 6);

  return rankingCopy;
};

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [showRanking, setShowRanking] = useState(false);

  const totalQuestions = quizState.questions.length;
  const score = quizState.score;
  const percentage = (score / totalQuestions) * 100;

  let message = "";
  if (percentage === 100) {
    message = "Perfeito!";
  } else if (percentage >= 75) {
    message = "Mandou bem!";
  } else if (percentage >= 50) {
    message = "Pode melhorar!";
  } else {
    message = "Tente novamente!";
  }

  const ranking = getRankingWithPlayer(quizState.player, score);

  return (
    <div id="gameover">
      <h2>Fim de Jogo!</h2>

      <div className="player-info">
        <img
          src={quizState.player.avatar}
          alt={`Avatar de ${quizState.player.name}`}
          className="player-avatar"
        />
        <p className="player-name">{quizState.player.name}</p>
        <p className="player-score">
          Sua pontuação: <span>{score} pontos</span>
        </p>
        <p className="player-message">{message}</p>
      </div>

      <div className="buttons">
        <button onClick={() => dispatch({ type: "NEW_GAME" })}>
          Reiniciar o Quiz
        </button>
        <button onClick={() => setShowRanking(true)}>Ver Ranking</button>
      </div>

      {showRanking && (
        <div className="modal-overlay" onClick={() => setShowRanking(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Ranking</h3>
            <ul className="ranking-list">
              {ranking.map((player, index) => (
                <li
                  key={index}
                  className={`ranking-item ${
                    player.name === quizState.player.name ? "current-player" : ""
                  }`}
                >
                  <span className="rank-number">
                    {index === 0
                      ? "🥇"
                      : index === 1
                      ? "🥈"
                      : index === 2
                      ? "🥉"
                      : index + 1}
                  </span>
                  <img
                    src={player.avatar}
                    alt={`Avatar de ${player.name}`}
                    className="ranking-avatar"
                  />
                  <span className="ranking-name">{player.name}</span>
                  <span className="ranking-score">{player.score}</span>
                  {/* Se quiser marcar "Você" para seu usuário:
                  {player.name === quizState.player.name && <span> (Você)</span>}
                  */}
                </li>
              ))}
            </ul>
            <button onClick={() => setShowRanking(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameOver;