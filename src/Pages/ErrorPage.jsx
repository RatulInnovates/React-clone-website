import React from "react";
import { useRouteError, Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="  flex flex-col items-center justify-center bg-[#141313] text-white">
      <h1 className="text-4xl font-bold">Oops! Page Not Found</h1>
      
      
    </div>
  );
}

export default ErrorPage;
