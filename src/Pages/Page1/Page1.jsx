import React from "react";
import GateCard from "../Card/GateCard";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./Page.css";
const Page1 = () => {
  return (
    <>
      <div className="main_page1_container">
        <div className="header">
          <div className="image_container">
            <div className="text_header_phone">
              <div className="text">
                <h1>Lorem ipsum national park</h1>
                <h2>Come walk with us</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  aperiam tempora sunt reiciendis suscipit delectus aliquam, a,
                  rem eligendi unde quis pariatur, fugiat repellendus nam vel
                  maiores porro fugit sint?
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia modi, dignissimos officia eaque veritatis corporis
                  quaerat. Voluptatibus sunt atque accusantium voluptates modi
                  reprehenderit illum vitae quaerat? Ea consectetur non adipisci
                  unde. At, quod assumenda.
                </p>
              </div>
            </div>
          </div>
          <div className="text_header">
            <div className="text">
              <h1>Lorem ipsum national park</h1>
              <h2>Come walk with us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                aperiam tempora sunt reiciendis suscipit delectus aliquam, a,
                rem eligendi unde quis pariatur, fugiat repellendus nam vel
                maiores porro fugit sint?
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia modi, dignissimos officia eaque veritatis corporis
                quaerat. Voluptatibus sunt atque accusantium voluptates modi
                reprehenderit illum vitae quaerat? Ea consectetur non adipisci
                unde. At, quod assumenda.
              </p>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="heading">
            <h1>Choose your gate to walk with us</h1>
          </div>
          <div className="card_holder">
            <GateCard gate="1" />
            <GateCard gate="2" />
            <GateCard gate="3" />
            <GateCard gate="4" />
            <GateCard gate="5" />
          </div>
        </div>
        <div className="contact_form">
          <Contact />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Page1;
