import { useState } from "react";
import micasaLogo from "./Images/whitelogo.svg"; // Your transparent logo

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "black",
        }}
      >
        {/* Video iframe or video component */}
        <iframe
          src="https://www.youtube.com/embed/LRdR7v19P6I?autoplay=1&mute=1&loop=1&playlist=LRdR7v19P6I&controls=0&modestbranding=1"
          frameBorder="0"
          allow="autoplay; fullscreen"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100vw",
            height: "56.25vw",
            minHeight: "100vh",
            minWidth: "177.77vh",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        {/* Logo always visible on top */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            top: "30%",
          }}
        >
          <img src={micasaLogo} alt="MiCasa Logo" style={{ height: "312px" }} />
        </div>
      </section>

      {/* New responsive row below */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        {/* Left logo */}
        <img src={micasaLogo} alt="Logo" style={{ height: "50px" }} />

        {/* Hamburger menu icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            zIndex: 10,
          }}
        >
          {/* Three lines */}
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "25px",
                height: "3px",
                backgroundColor: "#333",
                borderRadius: "2px",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </button>
      </nav>
    </>
  );
};

export default Hero;