import Logo from "../../../assets/images/logo.png";
import Profile from '../../../assets/images/user.png'
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={Logo} alt="" />
        <p className="mt-2">Journalism Without Fear or Favour</p>
        <p className="fs-4">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger" className="fs-5 rounded-0 px-3 py-1">
          Latest
        </Button>
        <Marquee className="text-danger fs-6" speed={80}>
          Match Highlights: Germany vs Spain — as it happened!.... Match
          Highlights: Germany vs Spain — as it happened!...
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/career">Career</Nav.Link>
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

export default Header;
