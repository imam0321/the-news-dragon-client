import Logo from "../../../assets/logo.png";

import moment from "moment";
import { Button, Container} from "react-bootstrap";
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
    
    </Container>
  );
};

export default Header;
