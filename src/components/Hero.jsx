import micasaLogo from "./Images/logo_black (1).png";

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      {/* YouTube embed - acts like a background video */}
      <iframe
src="
https://www.youtube.com/embed/LRdR7v19P6I?autoplay=1&mute=1&loop=1&playlist=LRdR7v19P6I&controls=0&modestbranding=1"        frameBorder="0"
        allow="autoplay; fullscreen"
        style={{
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100vw",          // full width
  height: "56.25vw",       // 16:9 ratio
  minHeight: "100vh",      // ensures full height coverage
  minWidth: "177.77vh",    // prevents gaps on tall screens
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
}}
      ></iframe>

      {/* Logo on top */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          top: "30%",
        }}
      >
        <img
          src={micasaLogo}
          alt="MiCasa Logo"
          style={{ height: "100px", margin: "0 auto" }}
        />
        {/* <h1
          style={{
            color: "white",
            fontSize: "3rem",
            marginTop: "20px",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
          }}
        >
          Welcome to MiCasa
        </h1> */}
      </div>
    </section>
  );
};

export default Hero;