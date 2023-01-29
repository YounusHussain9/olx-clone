import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FeaturedBadge from "../badges/Featured_badge";
import "./homecard.css";

function ContentCard({ product }) {
  return (
    <NavLink to={`detail/${product.id}`}>
    <Card style={{ width: "18rem"}} className={product.featured ? "Cardborder":''}>
      <Card.Img variant="top" src={product.photo} />
      {product.featured && <FeaturedBadge />}
      <Card.Body>
        <Card.Title style={{ display: "flex", flexDirection: "space-around" }}>
          <h4>{product.addTitle}</h4>{" "}
        </Card.Title>
        <Card.Text>{`RS ${product.price}`}</Card.Text>
        <ul className="homeCardUrl">
          <li></li>
          <li>{product.location}</li>
        </ul>
      </Card.Body>
    </Card>
    </NavLink>
  );
}

export default ContentCard;