import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  const skillsData = [
    { img: "/assets/img/meter3.svg", title: "React.js" },
    { img: "/assets/img/meter2.svg", title: "JavaScript (ES6+)" },
    { img: "/assets/img/meter4.svg", title: "Node.js & Express" },
    { img: "/assets/img/meter4.svg", title: "MongoDB" },
    { img: "/assets/img/meter4.svg", title: "PostgreSQL" },
    { img: "/assets/img/meter1.svg", title: "UI/UX Design" },
    { img: "/assets/img/meter1.svg", title: "Responsive Design" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p className="skill-description">
                I specialize in building modern, responsive, and scalable applications
                with a strong focus on frontend technologies. My skills include{" "}
                <strong>
                  React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Redux, and UI/UX design
                </strong>
                , along with backend experience in{" "}
                <strong>Node.js, Express.js, MongoDB, and PostgreSQL</strong>. I’m passionate
                about crafting seamless user experiences and delivering impactful digital solutions.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                keyBoardControl={true}
                containerClass="owl-carousel owl-theme skill-slider"
                itemClass="carousel-item-padding-40-px"
              >
                {skillsData.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.img} alt={skill.title} className="skill-img" />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src="/assets/img/color-sharp.png" alt="bg-image-left" />
    </section>
  );
};