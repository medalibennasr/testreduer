import React from "react";
import "./csstyle.css";

function Filtr({ setDoneTodos }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "50px",
      }}
    >
      <button
        type="button"
        onClick={() => setDoneTodos("true")}
        className="filtr"
        style={{ marginLeft: "80px", background: "#b0f2b6", padding: "10px" }}
      >
        Done
      </button>
      <button
        type="button"
        className="filtr"
        style={{ background: "#808080", color: "white", padding: "10px" }}
        onClick={() => setDoneTodos("all")}
      >
        All
      </button>
      <button
        type="button"
        className="filtr"
        style={{ marginRight: "80px", background: "#ffb861", padding: "10px" }}
        onClick={() => setDoneTodos("false")}
      >
        Not
      </button>
    </div>
  );
}

export default Filtr;
