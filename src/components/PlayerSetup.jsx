import { useContext, useState } from "react";
import { QuizContext } from "../context/quiz";
import "./PlayerSetup.css";

const avatars = [
  { id: 0, src: "src/img/avatars/00.jpg", alt: "Moça negra" },
  { id: 1, src: "src/img/avatars/01.jpg", alt: "Homem de máscara" },
  { id: 2, src: "src/img/avatars/02.jpg", alt: "Mulher com tampão" },
  { id: 3, src: "src/img/avatars/03.jpg", alt: "Macacão vermelho" },
  { id: 4, src: "src/img/avatars/04.jpg", alt: "Moletom roxo" },
  { id: 5, src: "src/img/avatars/05.jpg", alt: "Cabelo colorido" },
  { id: 6, src: "src/img/avatars/06.jpg", alt: "Óculos na cabeça" },
  { id: 7, src: "src/img/avatars/07.jpg", alt: "Um olho só" },
  { id: 8, src: "src/img/avatars/08.jpg", alt: "Boné" },
  { id: 9, src: "src/img/avatars/09.jpg", alt: "Boné" },
  { id: 10, src: "src/img/avatars/10.jpg", alt: "Boné" },
  { id: 11, src: "src/img/avatars/11.jpg", alt: "Boné" },
  { id: 12, src: "src/img/avatars/12.jpg", alt: "Boné" },
  { id: 13, src: "src/img/avatars/13.jpg", alt: "Boné" },
  { id: 14, src: "src/img/avatars/14.jpg", alt: "Boné" },
  { id: 15, src: "src/img/avatars/15.jpg", alt: "Boné" },
];

const PlayerSetup = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [quizState, dispatch] = useContext(QuizContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;

    dispatch({
      type: "SET_PLAYER",
      payload: { name, avatar },
    });
  };

  return (
    <div id="player-setup">
      <h2>Antes de começar...</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Seu nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Digite seu nome"
          />
        </div>

        <div>
          <label>Escolha um avatar:</label>
          <div className="avatars">
            {!avatar &&
              (showAll ? avatars : avatars.slice(0, 4)).map((icon) => (
                <button
                  type="button"
                  key={icon.id}
                  onClick={() => setAvatar(icon.src)}
                >
                  <img src={icon.src} alt={icon.alt} />
                </button>
              ))}

            {avatar && (
              <div className="selected-avatar">
                <img src={avatar} alt="Avatar selecionado" />
                <button
                  type="button"
                  className="remove-avatar"
                  onClick={() => setAvatar("")}
                >
                  ✖
                </button>
              </div>
            )}
          </div>

          {!showAll && !avatar && (
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="see-more"
            >
              Ver mais avatares
            </button>
          )}
        </div>

        <button type="submit">Avançar</button>
      </form>
    </div>
  );
};

export default PlayerSetup;
