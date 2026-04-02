import React from "react";
import micasaLogo from "./Images/logosvgblack.svg"; // Your transparent logo

const Contact = () => {
  return (
    <footer className="contact-section">
      <div className="contact-container">
        <img src={micasaLogo} alt="MiCasa Logo" style={{ height: "100px" }} />
        <div className="address-grid">
          <h3 style={{color:"rgb(139, 140, 140)"}}>Contact UAE</h3>
          <p style={{color:"#1b1c1c"}}>Dubai</p>
          <p style={{color:"#1b1c1c"}}>+9768787878</p>
          <p style={{color:"#1b1c1c"}}>DemoDesign.com</p>
        </div>
        <p style={{color:"#1b1c1c"}}>Contact Us</p>
        <p style={{color:"#1b1c1c"}}>405 Dubai UAE | +971 58 6891771 | info@micasa-design.com</p>

      </div>

    </footer>
  );
};

export default Contact;