import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Relatedads({ ad }) {
  return (
    <Card style={{ width: "18rem" }} >
      <Card.Img variant="top" src={ad.photo} />
      <Card.Body>
        <Card.Title>{ad.adTitle}</Card.Title>
        <Card.Text>{ad.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Relatedads;
