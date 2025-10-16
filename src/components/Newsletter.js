import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12} id="testimonials">
      <div className="newsletter-bx wow slideInUp">
        <Row className="justify-content-center text-center">
          <Col lg={12}>
            <h3 className="testimonials-title">Testimonials</h3>
          </Col>
          <Col lg={8} md={10} sm={12}>
            <div className="new-email-bx">
              <h3>🏆 Best Coder - March (2022)</h3>
              <p className="testimonial-company">— Prasad Corp</p>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};