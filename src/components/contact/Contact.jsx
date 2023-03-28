import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="title">
        <h1>Contato</h1>
      </div>
      <div className="container">
        <div className="left">
          <img src="assets/contact_us.png" alt="" />
        </div>
        <div className="right">
          <div className="itemContainer">
            <h2>Informações para contato</h2>
            <div className="item">
              <img src="assets/location.png" alt="" />
              <span>Juiz de fora, MG</span>
            </div>
            <div className="item">
              <img src="assets/phone.png" alt="" />
              <span>(32) 9 9989-5414</span>
            </div>
            <div className="item">
              <img src="assets/email.png" alt="" />
              <span>
                <a href="mailto:filipeclacerda@gmail.com">
                  filipeclacerda@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
