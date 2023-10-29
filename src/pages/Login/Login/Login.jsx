import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const { signIn, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || '/category/0';

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result => {
      console.log(result.user);
      navigate(from, {replace : true})
    })
    .catch(error => console.error(error))
  }


  return (
    <Container className="w-25 mx-auto mt-5">
      <h2>Please Login</h2>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don't have an account? <Link to="/register">Register</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
