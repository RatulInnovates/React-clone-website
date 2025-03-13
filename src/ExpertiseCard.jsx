import React, { useState } from "react";

function ExpertiseCard() {
  const [expCard] = useState([
    {
      title: "APP DESIGN",
      paragraph:
        "Craft intuitive navigation that makes features accessible. Choose layouts and graphics that fit your app's personality.",
    },
    {
      title: "WEB DESIGN",
      paragraph:
        "Polish animations and microinteractions that add delight. Every detail matters when sculpting an web.",
    },
    {
      title: "FRAMER",
      paragraph:
        "The process involves building virtual 3D models and materials, setting lighting, and then rendering the final images.",
    },
    {
      title: "PHOTOGRAPHY PRO",
      paragraph:
        "With the click of a shutter, an image is imprinted that tells a story or makes a statement.",
    },
  ]);

  return (
    <div className="space-y-4 px-4">
      {expCard.map((card, index) => (
        <div
          key={index}
          className="bg-[#0f0e0e] p-6 rounded-xl text-white border border-gray-700"
        >
          
          <div className="flex justify-between items-center  ">
            <span className="text-lg font-bold">({index + 1})</span>
            
          </div>

          
          <h2 className="text-3xl font-bold mb-3.5">{card.title}</h2>
          <p className="text-gray-400 mt-2 text-xl">{card.paragraph}</p>
        </div>
      ))}
    </div>
  );
}

export default ExpertiseCard;
