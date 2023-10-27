// import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container className="mt-4">
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <h1>Main contain coming soon</h1>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
      {/* <Outlet></Outlet> */}
    </div>
  );
};

export default Main;
