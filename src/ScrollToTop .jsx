import React from "react";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <p
      onClick={scrollToTop}
      className="  -translate-x-1/2 text-[#7e9df8ba] cursor-pointer hover:text-[#ffffff73] transition duration-300 mb-6 font-semibold hover:underline ml-16"
    >
       Go Back to Top
    </p>
  );
};

export default ScrollToTop;
