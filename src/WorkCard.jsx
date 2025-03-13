import React from "react";

function WorkCard({ work }) {
  return (
    <div className="w-full sm:w-1/2 px-4 py-6">
      <div className="rounded-2xl bg-[#141313] overflow-hidden shadow-lg">
        {/* Image Container */}
        <div className="w-full h-56 overflow-hidden rounded-t-2xl">
          <img src={work.url} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Info Section */}
        <div className="flex justify-between items-center p-4">
          <div>
            <h2 className="text-white text-lg font-semibold">{work.title}</h2>
            <h3 className="text-gray-400 text-sm">{work.type}</h3>
          </div>
          <div className="rounded-full px-4 py-1 border border-gray-700 text-gray-300 text-sm">
            {work.year}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
