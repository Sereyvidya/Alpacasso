import { useState } from "react";
import AlpacaPreview from "./components/AlpacaPreview";
import ControlPanel from "./components/ControlPanel";

function App() {
  const [alpacaParts, setAlpacaParts] = useState({
    accessory: "",
    background: "dark-blue",
    ears: "default",
    eyes: "default",
    hair: "default",
    leg: "default",
    mouth: "default",
    neck: "default",
    nose: "nose",
  });
  return (
    <div className="h-full max-w-full bg-gray-200">
      <h1 className="flex justify-center pt-10 text-4xl text-blue-950">
        Alpaca Generator
      </h1>
      <div className="flex flex-col items-center sm:mx-10 sm:flex-row sm:items-start sm:justify-center sm:gap-10">
        <AlpacaPreview alpacaParts={alpacaParts} />
        <ControlPanel setAlpacaParts={setAlpacaParts} />
      </div>
    </div>
  );
}

export default App;
