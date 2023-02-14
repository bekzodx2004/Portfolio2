import React from "react";
import "./Skill.scss";
const Skill = (props) => {
  return (
    <div className="home__skills__skill">
      <img src={props.img} alt="" />
      <h3>{props.nomi}</h3>
    </div>
  );
};

export default Skill;
