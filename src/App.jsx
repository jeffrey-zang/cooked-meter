import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Share from "./Share";

const App = () => {
  const cookedness = [
    [100, "give up bro 💀", "#FF0000"],
    [87.5, "totally cooked 🔥", "#FF5500"],
    [75, "burnt 🥵", "#FFAA00"],
    [62.5, "well done 😳", "#FFCC00"],
    [50, "crisp 🥓", "pink"],
    [37.5, "medium rare 🥩", "#ffcccc"],
    [25, "lightly toasted 🫓", "#bbb"],
    [12.5, "ok 🙏", "#ddd"],
    [0, "totally fine 🫠", "white"],
  ];

  const [cooked, setCooked] = useState([0, "How cooked are you?"]);
  const [color, setColor] = useState("white");
  const [input, setInput] = useState("");

  const getCooked = () => {
    const random = cookedness[Math.floor(Math.random() * cookedness.length)];
    const selected = [Math.floor(Math.random() * 12.5) + random[0], random[1]];
    if (input) {
      if (selected[1] === "give up bro 💀") {
        selected[1] = `${input}? ${random[1]}`;
      } else {
        selected[1] = `you're ${random[1]} for ${input}`;
      }
    }
    setCooked(selected);
    setColor(random[2]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getCooked();
  };

  return (
    <Routes>
      <Route
        index
        element={
          <div
            className={`body ${cooked[1] === "give up bro 💀" ? "shake" : ""}`}
            style={{
              backgroundColor: `${color}`,
            }}
          >
            <div className="left">
              <h1 className="title">Cooked Meter</h1>
              <p>
                How cooked are you? Press the button below to discover your
                cookedness.
              </p>
              <form onSubmit={handleSubmit} className="form">
                <input
                  placeholder="Enter what you're cooked for"
                  className="w-full"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
                <button type="submit">Discover</button>
              </form>
            </div>

            <div className="right">
              {/* <p className="not">Not cooked</p>
      <p className="very">Very cooked</p> */}
              <p className="desc">{cooked[1]}</p>
              <div className="semi-circle">
                <div
                  className="dial"
                  style={{
                    transform: `translateX(-50%) translateY(3rem) rotate(${cooked[0] * 1.8 - 90}deg)`,
                  }}
                ></div>
                <div
                  className="line"
                  style={{
                    transform:
                      "translateX(-50%) translateY(3rem) rotate(-60deg)",
                  }}
                ></div>
                <div
                  className="line"
                  style={{
                    transform:
                      "translateX(-50%) translateY(3rem) rotate(-30deg)",
                  }}
                ></div>
                <div
                  className="line"
                  style={{
                    transform: "translateX(-50%) translateY(3rem) rotate(0deg)",
                  }}
                ></div>
                <div
                  className="line"
                  style={{
                    transform:
                      "translateX(-50%) translateY(3rem) rotate(30deg)",
                  }}
                ></div>
                <div
                  className="line"
                  style={{
                    transform:
                      "translateX(-50%) translateY(3rem) rotate(60deg)",
                  }}
                ></div>
                <div
                  className="line"
                  style={{
                    transform:
                      "translateX(-50%) translateY(3rem) rotate(90deg)",
                  }}
                ></div>
                <div
                  className="line"
                  style={{
                    transform:
                      "translateX(-50%) translateY(3rem) rotate(-90deg)",
                  }}
                ></div>
              </div>
              {input && cooked[1] !== "How cooked are you?" && (
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${cooked[1]} https://cooked.jeffz.dev/`
                    );
                  }}
                >
                  Share this result
                </button>
              )}
            </div>
          </div>
        }
      />
      <Route path="/:id" element={<Share />} />
    </Routes>
  );
};

export default App;
