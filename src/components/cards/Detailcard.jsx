import { useState } from "react";
import Card from "react-bootstrap/Card";
import FeaturedBadge from "../badges/Featured_badge";
import "./detailcard.css";

function DetailCard({ detail }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="flex-card">
        <Card className="detail-img">
          <Card.Img
            variant="top"
            src={detail.photo}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundColor: "black",
            }}
          />
          {detail.featured && <FeaturedBadge />}
        </Card>

        <div className="card-group">
          <Card>
            <Card.Text style={{ padding: "1rem 0 0 0" }}>
              {`Rs ${detail.price}`}
              <Card.Text>{`${detail.brand}, ${detail.addTitle}`}</Card.Text>
            </Card.Text>

            <Card.Text style={{ marginTop: "2rem", padding: "0rem 0 2rem 0" }}>
              {`${detail.location}`}
            </Card.Text>
          </Card>

          <Card>
            <h5 style={{ padding: "1rem 0 0 0" }}>Seller Description</h5> <hr />
            <div className="user">
              <h5>
                {" "}
                <i className="fa-solid fa-user"></i> {detail.name}
              </h5>

              <h6 style={{ display: "inline-block" }}>
                {show ? detail.phone : "****-*******"}
              </h6>
              <h4
                style={{ display: "inline-block", marginLeft: "1rem" }}
                onClick={handleShow}
              >
                {show ? (
                  <i className="fa-sharp fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </h4>
            </div>
          </Card>
        </div>
      </div>

      <div className="detail-desc">
        <Card>
          <h5>Detail</h5>
          <div className="det-card">
            <hr />
            <h5>Price : {detail.price}</h5>
            <h5>Brand : {detail.brand}</h5>
            <h5>Title :{detail.addTitle}</h5>
          </div>
        </Card>

        <Card>
          <h5>Description</h5>
          <hr />
          <h4>{detail.description}</h4>
        </Card>
      </div>
    </>
  );
}

export default DetailCard;
