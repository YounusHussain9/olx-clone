import Card from "react-bootstrap/Card";
import "./detailcard.css";

function DetailCard({ detail }) {
  return (
    <>
      <Card className="Card">
        <Card.Img variant="top" src={detail.photo} style={{ width: "640px" }} />
        <Card.Body>
          <Card.Text>{detail.description}</Card.Text>
          <Card.Text>{`Rs ${detail.price}`}</Card.Text>

          <ul className="detailCardUl">
            <li>
              <Card.Text>{detail.name}</Card.Text>
            </li>

            <li>
              <Card.Text>{detail.location}</Card.Text>
            </li>
          </ul>
          <Card.Text>{detail.phone}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default DetailCard;
