import React from "react";
import Header from "../Header/Header";
import "./About.scss";
// import { skills } from "../API";
import Contacts from "../Contacts/Contacts";
const About = () => {
  return (
    <div className="about">
      <Header />

      {/* <h1>Ko'nikmalar</h1>
      <div className="konikmalar">
        
      {skills.map((skill) => {
        return (
          <h3 className="skill" key={skill.id}>
            {skill.nomi}
          </h3>
        );
      })}
      </div> */}

      <h1>Men haqimda</h1>
      <p>
        Assalomu alaykum! O'zim haqimda qisqcha ma`lumot bersam. Ismim Bekzod,
        yoshim 18 da. Dasturlashga 1 yildan buyon qiziqib kelaman va hozir ham
        o'rganishda davom etyapman. "Beshikdan to qabrgacha ilm izla" - degan
        maqolga amal qilgan holda o'z bilimlarni yanada kuchaytirishga, doim
        o'rganishda davom etib kelyapman. Maqsadim Fullstack Senior dasturchi
        bo'lish. Kompaniya taraqqiyotida o'z hissamni qo'shib , menga bo'lgan
        ishonchni oqlash.
      </p>

      <h1>Bilimlar</h1>

      <Contacts />
    </div>
  );
};

export default About;
