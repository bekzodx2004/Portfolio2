import React from "react";
import { skills } from "../API";
import Header from "../Header/Header";
import "./Home.scss";
import Skill from "./Skill/Skill";
import RR from "../rezyume/Bekzod Xo'janiyozov.pdf"

import Rasmim from "../images/rrr.jpg"
import Top from "../images/top2.png"
import Contacts from "../Contacts/Contacts";
// import Img from "../images/a4.jpg";
const Home = () => {
  return (
    <div className="home">
      <Header />

       {/* <img src={Img} alt="" /> */}
        {/* <h1>Ma'lumot</h1>
      <p>
        Assalomu alaykum meni ismim Bekzod yoshim 18da yaqinda Frontend
        yo'nalishida kursni tugatdim. Dasturlashni hali mukammal o'rganish
        niyatim bor. Kursda onlayn o'qidim. Hozir Xorazm viloyatidaman.{" "}
      </p> */}

      {/* <h2>Ko'nikmalar</h2> */}
      <div className="top">
        <div className="top__text">
          <h1>Bekzod Xo'janiyozov</h1>
          <h3>Frontend dasturchi</h3>
        </div>
        <img src={Top} alt="" />
      </div>
      <div className="bottom">
        <div className="home__skills">
          {skills.map((skill) => {
            return <Skill key={skill.id} img={skill.img} nomi={skill.nomi} />;
          })}
        </div>

        <div className="rezyume">
          <h1>Rezyume</h1>
          <a href={RR} download={true}>
            Yuklab olish <i class="fa-solid fa-arrow-down"></i>
          </a>

          <img src={Rasmim} alt="" />
        </div>
      </div>

      <Contacts/>
    </div>
  );
};

export default Home;
