import React from "react";
import "./GateCard.css";
import img from "../img/trees-gbec751f41_1920.jpg";
const GateCard = (props) => {
  return (
    <>
      <div className="main_gate_card">
        <div className="hover">
          <p>Lorem Gate No: {props.gate}</p>
        </div>
        <img src={img} alt="" />
      </div>
      <div className="gate_no">
        <p>Lorem Gate No: {props.gate}</p>
      </div>
    </>
  );
};

export default GateCard;
