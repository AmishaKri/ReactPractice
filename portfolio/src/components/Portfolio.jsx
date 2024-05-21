
import React from "react";
import voting from "../assets/assets/portfolio/votingbb.png";
import blog from "../assets/portfolio/blogb.png";
import meme from "../assets/portfolio/mg.png";
import tenzies from "../assets/portfolio/tenzies.jpg";
import airbnb from "../assets/portfolio/airbnb.jpg";
import typescript from "../assets/portfolio/typescript.jpg";


export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: voting,
      link: "https://github.com/dabeerAhmed/Blockchain-voting",
    },
    {
      id: 2,
      src: blog,
      link: "https://github.com/dabeerAhmed/Blogs-Project",
    },
    {
      id: 3,
      src: meme,
      link: "https://github.com/dabeerAhmed/meme-generator",
    },
    {
      id: 4,
      src: tenzies,
      link: "https://github.com/dabeerAhmed/Tenzies-game",
    },
    {
      id: 5,
      src: airbnb,
      link: "https://github.com/dabeerAhmed/airbnb-project-clone",
    },
    {
      id: 6,
      src: typescript,
      link: "https://github.com/dabeerAhmed/typescript",
    },
  ];
  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

        {portfolios.map(({id,src,link}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt="reactweather"
              className="rounded-md duration-200  hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button onClick={() => window.location.href = link} className="py-3 m-4 duration-200 hover:scale-105 text-2xl">
                View Code
              </button>
              {/* <button>Code</button> */}
            </div>
          </div>
            ))}
            
          </div>
    
      </div>
    </div>
  );
}
