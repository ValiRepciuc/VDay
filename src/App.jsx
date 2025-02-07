import "./App.css";
import React, { useState } from "react";

function App() {
  const [contor, setContor] = useState(1);
  const [yesBtnSize, setYesBtnSize] = useState(1);
  const [text, setText] = useState("NU!");
  const [video, setVideo] = useState(false);
  const [h1Text, seth1Text] = useState("Salut!");
  const [h2Text, seth2Text] = useState("Vrei să îmi fii Valentin?");
  const [isVisible, setIsVisible] = useState(true);

  function noBtn() {
    setContor(contor + 1);
    setYesBtnSize(yesBtnSize + 0.15);

    const randomX = Math.floor(Math.random() * 40) - 20;
    const randomY = Math.floor(Math.random() * 40) - 20;

    const noButton = document.querySelector(".noBtn");
    noButton.style.transform = `translate(${randomX}%, ${randomY}%) scale(${
      1 - contor * 0.1
    })`;

    if (contor === 1) {
      setText("Ești sigură? :,(");
    } else if (contor === 2) {
      setText("Mai gândește-te o dată...");
    } else if (contor === 3) {
      setText("Ești sigură siguuuură?");
    } else if (contor === 4) {
      setText("Ultima șansă!");
    } else {
      setText("Răspuns greșit!");
    }
  }

  function yesBtn() {
    setVideo(true);
    seth1Text("Pupiiiiii");
    seth2Text(":3 <3 :3");
    setIsVisible(false);
  }

  return (
    <>
      <div className="middle">
        {video ? (
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="video"
            className="img"
          />
        ) : (
          <img
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="video"
            className="img"
          />
        )}

        <div className="text">
          <h1>{h1Text}</h1>
          <h2>{h2Text}</h2>
        </div>
        <div className="buttons" style={{ opacity: isVisible ? 1 : 0 }}>
          <button
            className="yesBtn"
            onClick={yesBtn}
            style={{ transform: `scale(${yesBtnSize})` }}
          >
            DA!
          </button>
          <button className="noBtn" onClick={noBtn}>
            {text}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
