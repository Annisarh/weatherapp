import { useState } from "react";
import "./App.css";
import background from "./assets/img/bg/bg.png";
import cuaca from "./assets/img/weather/rain.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="py-[25px] flex flex-wrap">
        <div className="relative w-full mx-4">
          <form action="">
            <input
              type="text"
              name="kota"
              placeholder="search..."
              className="font-semibold w-full h-[45px] text-xl px-4 py-4 text-black bg-white rounded-2xl outline-none focus:ring-2"
            />
            <button className="absolute right-3 top-2 cursor-pointer">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="m21 21l-4.34-4.34" />
                    <circle cx="11" cy="11" r="8" />
                  </g>
                </svg>
              </span>
            </button>
          </form>
        </div>
        <div className="mt-8 mx-4">
          <span className="font-bold text-4xl">Padang</span>
        </div>
        <div className="w-full mx-4 mt-8 pr-4 flex justify-between items-center">
          <img src={cuaca} alt="cuaca" className="" />
          <div className="w-full">
            <span className="font-semibold text-5xl text-white">29°c</span>
            <br />
            <span className="block font-medium">Sat, 28 June 2025</span>
          </div>
        </div>
        <div className="mx-4 mt-8 w-1/2 font-bold text-4xl leading-relaxed">
          It's fucking{" "}
          <span className="text-5xl tracking-widest text-transparent font-black stroke-text">
            raining.
          </span>{" "}
          now
        </div>
        <div className="mx-4 mt-6 w-full text-left text-lg text-white">
          you can look outside to get more information
        </div>
        <div className="mx-4 mt-4 w-full h-[2px] bg-white rounded items-center"></div>
        <div className="mx-4 mt-4 mb-2.5 flex w-full flex-wrap">
          <div className="w-1/4 border-r-2 border-white text-center"></div>
          <div className="w-1/2 text-left px-2 py-2 text-lg font-semibold">
            Be prepare for the weather today
          </div>
          <div className="w-1/4 border-l-2 border-white text-center"></div>
        </div>
      </div>
    </>
  );
}

export default App;
