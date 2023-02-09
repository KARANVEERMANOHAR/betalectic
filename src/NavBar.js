import React from "react";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <p
          className="nav-para"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </p>
        <p
          className="nav-para"
          onClick={() => {
            navigate("/Favorite");
          }}
        >
          Favorite
        </p>
      </div>
    </>
  );
}

export default NavBar;
