import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col xs={12} sm={6} md={4} className="project-card">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="proj-imgbx"
      >
        <div className="proj-img-wrapper">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </a>
    </Col>
  );
};
