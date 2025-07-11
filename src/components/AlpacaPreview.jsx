import React, { useState, useRef } from "react";
import html2canvas from "html2canvas-pro";
import { FaDownload } from "react-icons/fa6";

const AlpacaPreview = ({ alpacaParts }) => {
  const [alpacaName, setAlpacaName] = useState("");
  const previewRef = useRef(null);

  const handleDownload = async () => {
    const canvas = await html2canvas(previewRef.current);
    const dataURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = alpacaName ? `${alpacaName}.png` : "alpaca.png";
    link.click();
  };
  return (
    <div className="flex flex-col items-center gap-5">
      <div ref={previewRef} className="relative mt-10 h-[300px] w-[300px]">
        <img
          className="absolute rounded-lg"
          src={`/backgrounds/${alpacaParts.background}.png`}
        />
        <img className="absolute" src={`/neck/${alpacaParts.neck}.png`} />
        <img className="absolute" src={`/ears/${alpacaParts.ears}.png`} />
        <img className="absolute" src={`${alpacaParts.nose}.png`} />
        <img className="absolute" src={`/hair/${alpacaParts.hair}.png`} />
        {alpacaParts.accessory && (
          <img
            className="absolute"
            src={`/accessories/${alpacaParts.accessory}.png`}
          />
        )}
        <img className="absolute" src={`/eyes/${alpacaParts.eyes}.png`} />
        <img className="absolute" src={`/mouth/${alpacaParts.mouth}.png`} />
        <img className="absolute" src={`/leg/${alpacaParts.leg}.png`} />
      </div>

      <div className="flex w-full flex-row">
        <input
          className="flex-1 rounded-l-lg border-b-2 border-l-2 border-t-2 border-blue-950 bg-white pl-2 text-blue-950 placeholder-gray-400/60 focus:outline-none"
          placeholder="Your alpaca's name"
          value={alpacaName}
          onChange={(e) => setAlpacaName(e.target.value)}
        />
        <button
          className="flex cursor-pointer gap-2 rounded-r-lg border-b-2 border-r-2 border-t-2 border-blue-950 px-2 pb-2 pt-1 text-blue-950"
          onClick={() => handleDownload()}
        >
          <FaDownload className="mt-1" />
        </button>
      </div>
    </div>
  );
};

export default AlpacaPreview;
