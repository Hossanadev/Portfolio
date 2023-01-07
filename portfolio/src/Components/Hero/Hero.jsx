import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="p-3">
        <Link to={"/"}>Hossanadev</Link>
      </div>
      <nav className="text-xs font-normal block"></nav>
    </>
  );
};

export default Hero;
