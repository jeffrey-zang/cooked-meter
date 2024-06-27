import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Share from "./Share";
import Dial from "./components/Dial";

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

  const [showShare, setShowShare] = useState(false);
  const [name, setName] = useState("");

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
            className={`body ${cooked[1].includes("give up bro 💀") ? "shake" : ""}`}
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
                  placeholder="Type somethin"
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
              <p className="desc">{cooked[1]}</p>
              <Dial rotateAmount={cooked[0]} />
              {input && cooked[1] !== "How cooked are you?" && (
                <button
                  onClick={() => setShowShare(true)}>
                  Share this result
                </button>
              )}
              {showShare && (
                <div className="share">
                  <input
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Link
                    to={`${encodeURIComponent(
                      name
                    )}/${encodeURIComponent(
                      cooked[1]
                    )}/${encodeURIComponent(
                      selected[0]
                    )}/
                    ${encodeURIComponent(color)} `}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Share
                  </Link>
                </div>
              )}
            </div>
          </div>
        }
      />
      <Route path="/:name/:cooked/:selected/:color" element={<Share />} />
    </Routes>
  );
};

export default App;
