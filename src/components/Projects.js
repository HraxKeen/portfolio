import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/VitaE.png";
import projImg2 from "../assets/img/TheyPileUp.png";
import projImg3 from "../assets/img/wordpress.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: (
        <p>
          <a href="https://lairdom.itch.io/vitae">
            More about Vita.E project here
          </a>
        </p>
      ),
      description:
        "VITA.e is a design concept Metroidvania with randomized weapon pickups.",
      imgUrl: projImg1,
    },
    {
      title: (
        <p>
          <a href="https://lairdom.itch.io/they-pile-up">
            More about Vita.E project here
          </a>
        </p>
      ),
      description: "Made for Pursuing Pixels James Jam Games Gam",
      imgUrl: projImg2,
    },
    {
      title: (
        <p>
          <a href="https://herraxkeen.wordpress.com">
            More about Vita.E project here
          </a>
        </p>
      ),
      description: "My very own worpress homepage",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <div className="skill-bx">
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Projects</h2>
                    <p>Some projects i have been working on and completed</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      ></Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
