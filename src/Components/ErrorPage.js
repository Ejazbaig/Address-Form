import React from "react";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="navDiv">
        <NavLink to={"/home"}>
          <button className="navButton">Go Home</button>
        </NavLink>
        <NavLink to={"/back"}>
          <button className="navButton">Go back</button>
        </NavLink>
        <NavLink to={"/"}>
          <button className="navButton">Go to Add Address Page</button>
        </NavLink>
      </div>
      <h1>Path does not exist..</h1>
    </div>
  );
}
