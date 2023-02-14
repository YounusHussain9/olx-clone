import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import FeaturedBadge from "../badges/Featured_badge";
import "./homecard.css";

function ContentCard({ product }) {
  return (
    <NavLink to={`/detail/${product.id}`} style={{ textDecoration: "none" }}>
      <Card style={{ width: "18rem" }} id="card">
        <Card.Img variant="top" src={product.photo} className="card-img"  />

        {product.featured && <FeaturedBadge />}
        <Card.Body className={product.featured ? "Cardborder" : ""}>
          <Card.Title
            style={{ display: "flex", flexDirection: "space-around" }}
          >
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
