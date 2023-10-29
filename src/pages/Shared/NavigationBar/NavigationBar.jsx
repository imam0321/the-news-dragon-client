import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Profile from '../../../assets/user.png'
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link className="text-decoration-none text-black pe-4" to='/'>Home</Link>
              <Link className="text-decoration-none text-black pe-4" to='/'>About</Link>
              <Link className="text-decoration-none text-black " to='/'>Career</Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"><img src={Profile} style = {{height: "41px", width: "41px"}} alt="" /></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="dark" className="fs-5 rounded-0 px-4 py-1">
                  Login
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;