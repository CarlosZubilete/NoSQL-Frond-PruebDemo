import { Container, Row, Col, Button } from "reactstrap";

function Home() {
  return (
    <Container className="mt-5 pt-5">
      <Row className="justify-content-center align-items-center text-center">
        <Col md="8">
          <h1 className="display-4 fw-bold">Hi 👋, I'm Carlos Zubilete</h1>
          <p className="lead mt-4">
            I'm passionate about programming and solving problems with software.
            Currently focused on becoming a <strong>Backend Web Developer</strong> with solid knowledge in business logic,
            database design, and building RESTful APIs with <strong>ASP.NET Core</strong> and <strong>MongoDB</strong>.
          </p>
          <div className="mt-4">
            <Button
              color="primary"
              className="me-2"
              tag="a"
              href="https://www.linkedin.com/in/carlos-zubilete-sanchez-78232b2b9/"
              target="_blank"
            >
              LinkedIn
            </Button>
            <Button
              color="success"
              tag="a"
              href="https://github.com/CarlosZubilete"
              target="_blank"
            >
              GitHub
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
