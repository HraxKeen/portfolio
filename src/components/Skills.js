import skill1 from "../assets/img/html.png";
import skill2 from "../assets/img/css.png";
import skill3 from "../assets/img/js.png";
import skill4 from "../assets/img/C#.png";
import skill5 from "../assets/img/unity.jpg";
import skill6 from "../assets/img/React.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I have learned different programming languages ​​so far and as
                far as my skills are concerned<br></br>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={skill1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={skill2} alt="Image" />
                  <h5>English</h5>
                </div>
                <div className="item">
                  <img src={skill3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={skill4} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={skill5} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={skill6} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
