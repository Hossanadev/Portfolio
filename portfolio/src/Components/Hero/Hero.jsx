import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="p-3 flex items-center justify-between shadow-md">
        <div>
          <Link to={"/"}>Hossanadev</Link>
        </div>
        <nav className="text-xs font-normal">
          <ul className="flex gap-3">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about-me"}>About Me</Link>
            </li>
            <li>
              <Link to={"/contact-me"}>Contact Me</Link>
            </li>
            <li>
              <Link to={"/portfolio"}>Services</Link>
            </li>
            <li>
              <Link to={"/portfolio"}>Portfolio</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Hero;
