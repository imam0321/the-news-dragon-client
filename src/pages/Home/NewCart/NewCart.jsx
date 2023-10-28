import moment from "moment";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewCart = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex justify-contain-center align-items-center border-0">
        <Image
          style={{ height: "45px", weight: "45px" }}
          src={author?.img}
          roundedCircle
        />
        <div className="ps-2 pt-3 flex-grow-1">
          <p className="m-0">{author?.name}</p>
          <p>
            <small>{moment(author?.published_date).format("yyy-mm-d")}</small>
          </p>
        </div>
        <div className="fs-4">
          <FaRegBookmark className="me-1" />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text className="mt-2">
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}....
              <Link
                className="text-decoration-none text-warning"
                to={`/news/${_id}`}
              >
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-contain-center align-items-center pb-3 border-0">
        <div className="flex-grow-1">
          <Rating
          className="fs-5 pe-2 text-warning"
            readonly
            placeholderRating={rating.number}
            emptySymbol={
              <FaRegStar />
            }
            placeholderSymbol={
              <FaStar />
            }
            fullSymbol={
              <FaStar/>
            }
          ></Rating>
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye /> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewCart;
