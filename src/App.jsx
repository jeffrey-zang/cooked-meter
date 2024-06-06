import "./App.css";
import React, { useState } from "react";

const App = () => {
  const cookedness = [
    [100, "give up bro 💀", "#FF0000"],
    [87.5, "you're cooked 🔥", "#FF5500"],
    [75, "burnt 🥵", "#FFAA00"],
    [62.5, "well done 😳", "#FFCC00"],
    [50, "medium well 🥩", "pink"],
    [37.5, "medium rare 🥓", "#ffcccc"],
    [25, "lightly toasted 🫓", "#bbb"],
    [12.5, "ok 🙏", "#ddd"],
    [0, "everything's fine 🫠", "white"],
  ];

  const [cooked, setCooked] = useState([0, "How cooked are you?"]);
  const [color, setColor] = useState("white");

  const getCooked = () => {
    const random = cookedness[Math.floor(Math.random() * cookedness.length)];
    setCooked([Math.floor(Math.random() * 12.5) + random[0], random[1]]);
    setColor(random[2]);
    console.log(cooked);
  };

  return (
    <div className="body" style={{
      backgroundColor: `${color}`,
    }}>
      <div className="left">
        <h1 className="title">Cooked Meter</h1>
        <p>
          How cooked are you? Press the button below to discover your
          cookedness.
        </p>
        <button
          onClick={() => {
            getCooked();
          }}
        >
          Discover
        </button>
      </div>

      <div className="right">
        <div className="dial-c">
          <p className="not">Not cooked</p>
          <p className="very">Very cooked</p>
          <div
            className="dial"
            style={{
              transform: `translateX(-50%) translateY(3rem) rotate(${cooked[0] * 1.8 - 90}deg)`,
            }}
          ></div>
          <div className="line" style={{ transform: 'translateX(-50%) translateY(3rem) rotate(-60deg)' }}></div>
          <div className="line" style={{ transform: 'translateX(-50%) translateY(3rem) rotate(-30deg)' }}></div>
          <div className="line" style={{ transform: 'translateX(-50%) translateY(3rem) rotate(0deg)' }}></div>
          <div className="line" style={{ transform: 'translateX(-50%) translateY(3rem) rotate(30deg)' }}></div>
          <div className="line" style={{ transform: 'translateX(-50%) translateY(3rem) rotate(60deg)' }}></div>
          <div className="line" style={{ transform: 'translateX(-50%) translateY(3rem) rotate(90deg)' }}></div>
          <div className="line" style={{ transform: 'translateX(-50%) translateY(3rem) rotate(-90deg)' }}></div>
          {/* <div className="circle"></div> */}
          <div className="semi-circle"></div>
          <p className="desc">{cooked[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
