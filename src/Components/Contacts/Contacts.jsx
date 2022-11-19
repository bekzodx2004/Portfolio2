import React from "react";
import { contacts } from "../API";
// import Header from "../Header/Header";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts">
      {contacts.map((contact) => {
        return (
          <a  className="contact" href={contact.url} key={contact.id}>
            <img src={contact.img} alt="" />
            <h4>{contact.title}</h4>
          </a>
        );
      })}
    </div>
  );
};

export default Contacts;
