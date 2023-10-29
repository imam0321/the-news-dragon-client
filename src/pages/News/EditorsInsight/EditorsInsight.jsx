import { Card, Col, Row } from "react-bootstrap";
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
import moment from "moment";
import { FaRegCalendar } from "react-icons/fa";

const EditorsInsight = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4 mt-2">
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
              21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Text>
              <p className="m-0"><FaRegCalendar className="pb-1"/> {moment().format(" MMM D, YYYY")}</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
              21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Text>
              <p className="m-0"><FaRegCalendar className="pb-1"/> {moment().format(" MMM D, YYYY")}</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
              21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Text>
              <p className="m-0"><FaRegCalendar className="pb-1"/> {moment().format(" MMM D, YYYY")}</p>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
};

export default EditorsInsight;