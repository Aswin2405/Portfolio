import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Netlfix Clone",
      description: "React JS",
      imgUrl: "https://yt3.googleusercontent.com/CvgBA1ypUZNxOjiCX0l1V2FbAm7oSDPZE4YkMvkpT_4iLXQ3IXWVtBgWnznHxgtcUoj50TXqZA=s900-c-k-c0x00ffffff-no-rj",
      url:"https://aswin-netflix.web.app/"
    },
    {
      title: "Covid Tracker",
      description: "React JS",
      imgUrl: "https://www.cmch-vellore.edu/wp-content/uploads/sites/14/2023/05/Covid19-Information-covid19-basics-SARS-CoV-2_without_background-300x300.png",
      url:"https://sars2-tracker.netlify.app/"
    },
    {
      title: "AI News App",
      description: "React JS",
      imgUrl: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-3/3/83-512.png",
      url:"https://ai-newsreader.netlify.app/"
    },
    {
      title: "Hulu Clone",
      description: "Next JS",
      imgUrl: "https://play-lh.googleusercontent.com/lH3MWp-oZRi39j_XcWqKOtnv7fyLNmH35agp_pR-TdjQLkuEP77HK5_yI9KwKIKI4U01",
      url:"https://hulu-clone-2.vercel.app/"
    },
    {
      title: "Google Clone",
      description: "Next JS",
      imgUrl: "https://cdn.iconscout.com/icon/free/png-256/free-google-icon-svg-download-png-189824.png",
      url:"https://search-engine-neon.vercel.app/", //not working
    },
    {
      title: "Spotify Clone",
      description: "React JS",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png",
      url:"https://aswin-music.netlify.app/"
    },
  ];

    const projects2 = [
    {
      title: "Tesla Clone",
      description: "React JS",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/930px-Tesla_Motors.svg.png",
      url:"https://teslaa-clone.netlify.app/"
    },
    {
      title: "Airbnb Clone",
      description: "React JS",
      imgUrl: "https://avatars.githubusercontent.com/u/698437?s=280&v=4",
      url:"https://aswin-hotel-booking.netlify.app/"
    },
    {
      title: "Chat App",
      description: "React JS",
      imgUrl: "https://store-images.s-microsoft.com/image/apps.37944.9007199266726596.c95ab1bf-5d1a-4d2c-a940-a8a4038b5691.71e15deb-fbba-4e36-84f8-b2f2b64becbb",
      url:"https://aswin-messenger.netlify.app/",
    },
    {
      title: "Insta Clone",
      description: "React JS",
      imgUrl: "https://static.vecteezy.com/system/resources/previews/018/930/415/non_2x/instagram-logo-instagram-icon-transparent-free-png.png",
      url:"https://aswin-insta2.netlify.app/"
    },
     {
      title: "Search Engine",
      description: "React JS",
      imgUrl: "https://cdn-icons-png.flaticon.com/512/3252/3252632.png",
      url:"https://aswin-search-engine.netlify.app/"
    },
    {
      title: "iMessage",
      description: "React JS",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IMessage_logo.svg/2048px-IMessage_logo.svg.png",
       url:"https://quirky-volhard-2f2ec4.netlify.app/"
    }
  ];

      const projects3 = [
    {
      title: "Netflix Home Page",
      description: "React JS",
      imgUrl: "https://yt3.googleusercontent.com/CvgBA1ypUZNxOjiCX0l1V2FbAm7oSDPZE4YkMvkpT_4iLXQ3IXWVtBgWnznHxgtcUoj50TXqZA=s900-c-k-c0x00ffffff-no-rj",
      url:"https://serene-boyd-4a1ee0.netlify.app/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
<p>
  Over the past 4+ years, I have worked on diverse projects ranging from responsive websites to full-scale web applications. 
  My portfolio highlights real-world solutions built with modern technologies like React, Node.js, MongoDB. Each project reflects my focus on 
  {" "}<strong>scalability, performance, and user experience</strong>.
</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
 <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src="/assets/img/color-sharp2.png" alt="bg-img-right"></img>
    </section>
  )
}