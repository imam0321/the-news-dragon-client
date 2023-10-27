import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg1.png";

const RightNav = () => {
  return (
    <div>
      <h4 className="mb-3">Login with</h4>
      <Button className="mb-2 w-100" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button className="w-100" variant="outline-secondary">
        <FaGithub /> Login with GitHub
      </Button>
      <div className="mt-4 mb-4">
        <h4 className="mb-3">Find Us on</h4>
        <ListGroup className="fs-5">
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="position-relative">
        <img  src={bg} alt="" />
        <div className="text-center text-white position-absolute top-50 start-50 translate-middle z-3">
          <h1 className="pb-2">Create an Amazing Newspaper</h1>
          <p className="py-2">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button variant="danger" className="fs-5 rounded-1 px-3 py-2">
          Learn More
        </Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
