import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center text-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <div className="social-icon">
               <a href={process.env.REACT_APP_LINKEDIN_ID}><img src="/assets/img/nav-icon1.svg" alt="linkedin" /></a>
                <a href={process.env.REACT_APP_FB_ID}><img src="/assets/img/nav-icon2.svg" alt="fb" /></a>
                <a href={process.env.REACT_APP_INSTA_ID}><img src="/assets/img/nav-icon3.svg" alt="instagram" /></a>
                <a href={process.env.REACT_APP_GITHUB_ID}><img src="/assets/img/nav-icon4.svg" alt="github" /></a>
            </div>
            <p>Made By Aswin</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}