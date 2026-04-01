import img3 from "./Images/img3.jpg";
import img2 from "./Images/img2.jpg";

const projects = [img3, img2];

const Gallery = () => {
  return (
    <div className="container">
      <section className="gallery-section">
        {projects.map((img, i) => (
          <div
            key={i}
            className="gallery-row"
            style={{ position: "relative", marginBottom: "20px" }}
          >
            <img style={{ width: "100%", display: "block" }} src={img} alt={`Project ${i + 1}`} />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "2rem",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0,0,0,0.7)", // makes text readable
              }}
            >
              Exterior Design {i + 1}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gallery;