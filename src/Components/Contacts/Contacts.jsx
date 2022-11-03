import React from "react";
import { contacts } from "../API";
// import Header from "../Header/Header";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts">
   
     {
      contacts.map(
        url=>{
          return <div className="contact" key={url.id} >
            <img src={url.img} alt="" />
            <h4>{url.url}</h4>

          </div>
      
        }
      )
     }
    </div>
  );
};

export default Contacts;
