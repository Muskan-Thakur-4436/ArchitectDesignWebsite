import React from "react";
import micasaLogo from "./Images/DkLogo.jpeg"; // Your transparent logo

const Contact = () => {
  return (
    <footer className="contact-section">
      <div className="contact-container">
  <img src={micasaLogo} alt="MiCasa Logo" style={{ height: "100px" }} />
      <div className="address-grid">
        <h3>Contact UAE</h3>
          <p>Dubai</p>
            <p>+9768787878</p>
              <p>DemoDesign.com</p>
      </div>
      <p>Contact Us</p>
      <p>405 Dubai UAE | +971 58 6891771 | info@micasa-design.com</p>
       
      </div>
     
    </footer>
  );
};

export default Contact;