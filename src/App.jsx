import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Share from "./components/Share/Share";
import Dial from "./components/Dial";
import { Analytics } from "@vercel/analytics/react";

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

  const [rotation, setRotation] = useState(0);
  const [cooked, setCooked] = useState("How cooked are you?");
  const [color, setColor] = useState("white");
  const [input, setInput] = useState("");

  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");

  const getCooked = () => {
    const random = cookedness[Math.floor(Math.random() * cookedness.length)];
    let selected = random[1];
    if (input) {
      if (selected === "give up bro 💀") {
        selected = `${input}? ${random[1]}`;
      } else {
        selected = `you're ${random[1]} for ${input}`;
      }
    }
    setRotation(Math.floor(Math.random() * 12.5) + random[0]);
    setCooked(selected);
    setColor(random[2]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getCooked();
  };

  return (
    <div>
      <Analytics />

      <Routes>
        <Route
          index
          element={
            <div
              className={`body ${cooked.includes("give up bro 💀") ? "shake" : ""}`}
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
                      setCopied(false);
                    }}
                  />
                  <button type="submit">Discover</button>
                </form>
              </div>

              <div className="right">
                <p className="desc">{cooked}</p>
                <Dial rotateAmount={rotation} />
                {input && cooked !== "How cooked are you?" && (
                  <button onClick={() => setShowShare(true)}>
                    Share this result
                  </button>
                )}
                {showShare && (
                  <div className="share">
                    <input
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `${import.meta.env.VITE_URL}/${encodeURIComponent(name)}/${encodeURIComponent(cooked)}/${encodeURIComponent(rotation)}/${encodeURIComponent(color)}`
                        );
                        setCopied(true);
                      }}
                    >
                      Share
                    </button>
                    {copied && <p>Copied!</p>}
                  </div>
                )}
              </div>
            </div>
          }
        />
        <Route path="/:name/:cooked/:rotation/:color" element={<Share />} />
      </Routes>
    </div>
  );
};

export default App;
