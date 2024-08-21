import React from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();

  function handleClick(){
    navigate("/");
  }

  return (
    <section id="header">
      <div className="header-div">
        <div className="header-logo" onClick={handleClick}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/Home/MOTOGURU.jpg`}
            alt="motor guru logo"
            height={60}
          />
        </div>
        <Nav/>
      </div>
    </section>
  );
}
