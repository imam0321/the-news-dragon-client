import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Profile from '../../../assets/user.png'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }
  
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
              <img src={Profile} style = {{height: "41px", width: "41px"}} alt="" />
              {
                user ? 
                <Button onClick={handleLogOut} variant="dark" className="fs-5 rounded-0 px-4 py-1 ms-2">
                  LogOut
                </Button> :
              <Link to='/login'>
              <Button variant="dark" className="fs-5 rounded-0 px-4 py-1 ms-2">
                Login
              </Button>
            </Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;