import React, { useState } from "react";
import { FaRandom } from "react-icons/fa";

const ControlPanel = ({ setAlpacaParts }) => {
  const [openSection, setOpenSection] = useState(null);

  const accessories = ["earings", "flower", "glasses", "headphone", "none"];
  const backgrounds = [
    "blue",
    "dark-blue",
    "green",
    "grey",
    "orange",
    "yellow",
  ];
  const ears = ["default", "tilt-backward", "tilt-forward"];
  const eyes = ["angry", "default", "naughty", "panda", "smart", "star"];
  const hair = ["bang", "curls", "default", "elegant", "quiff", "short"];
  const leg = [
    "bubble-tea",
    "cookie",
    "default",
    "game-console",
    "tilt-backward",
    "tilt-forward",
  ];
  const mouth = ["astonished", "default", "eating", "laugh", "tongue"];
  const neck = ["bend-backward", "bend-forward", "default", "thick"];

  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const randomizeParts = () => {
    setAlpacaParts({
      accessory: getRandom(accessories.filter((item) => item != "none")),
      background: getRandom(backgrounds),
      ears: getRandom(ears),
      eyes: getRandom(eyes),
      hair: getRandom(hair),
      leg: getRandom(leg),
      mouth: getRandom(mouth),
      neck: getRandom(neck),
      nose: "nose",
    });
  };

  return (
    <div className="my-10 flex max-w-[500px] flex-col gap-5 text-blue-950">
      <h2 className="mx-auto flex justify-center text-xl">
        Accessorize the alpaca's
      </h2>
      <div className="btn-container">
        <button
          className="btn"
          onClick={() =>
            setOpenSection(openSection === "accessory" ? null : "accessory")
          }
        >
          accessory
        </button>
        <button
          className="btn"
          onClick={() =>
            setOpenSection(openSection === "background" ? null : "background")
          }
        >
          background
        </button>
        <button
          className="btn"
          onClick={() => setOpenSection(openSection === "ears" ? null : "ears")}
        >
          ears
        </button>
        <button
          className="btn"
          onClick={() => setOpenSection(openSection === "eyes" ? null : "eyes")}
        >
          eyes
        </button>
        <button
          className="btn"
          onClick={() => setOpenSection(openSection === "hair" ? null : "hair")}
        >
          hair
        </button>
        <button
          className="btn"
          onClick={() => setOpenSection(openSection === "leg" ? null : "leg")}
        >
          leg
        </button>
        <button
          className="btn"
          onClick={() =>
            setOpenSection(openSection === "mouth" ? null : "mouth")
          }
        >
          mouth
        </button>
        <button
          className="btn"
          onClick={() => setOpenSection(openSection === "neck" ? null : "neck")}
        >
          neck
        </button>
        <button className="btn flex gap-2" onClick={() => randomizeParts()}>
          <FaRandom className="mt-1" /> Random
        </button>
      </div>

      {openSection && (
        <h2 className="mx-auto flex justify-center text-xl">Style</h2>
      )}

      {openSection === "accessory" && (
        <div className="btn-container">
          {accessories.map((item) => (
            <button
              key={item}
              className="btn"
              onClick={() =>
                setAlpacaParts((prev) => ({
                  ...prev,
                  accessory: item === "none" ? "" : item,
                }))
              }
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {openSection === "background" && (
        <div className="btn-container">
          {backgrounds.map((item) => (
            <button
              className="btn"
              onClick={() =>
                setAlpacaParts((prev) => ({ ...prev, background: item }))
              }
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {openSection === "ears" && (
        <div className="btn-container">
          {ears.map((item) => (
            <button
              className="btn"
              onClick={() =>
                setAlpacaParts((prev) => ({ ...prev, ears: item }))
              }
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {openSection === "eyes" && (
        <div className="btn-container">
          {eyes.map((item) => (
            <button
              className="btn"
              onClick={() =>
                setAlpacaParts((prev) => ({ ...prev, eyes: item }))
              }
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {openSection === "hair" && (
        <div className="btn-container">
          {hair.map((item) => (
            <button
              className="btn"
              onClick={() =>
                setAlpacaParts((prev) => ({ ...prev, hair: item }))
              }
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {openSection === "leg" && (
        <div className="btn-container">
          {leg.map((item) => (
            <button
              className="btn"
              onClick={() => setAlpacaParts((prev) => ({ ...prev, leg: item }))}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {openSection === "mouth" && (
        <div className="btn-container">
          {mouth.map((item) => (
            <button
              className="btn"
              onClick={() =>
                setAlpacaParts((prev) => ({ ...prev, mouth: item }))
              }
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {openSection === "neck" && (
        <div className="btn-container">
          {neck.map((item) => (
            <button
              className="btn"
              onClick={() =>
                setAlpacaParts((prev) => ({ ...prev, neck: item }))
              }
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
