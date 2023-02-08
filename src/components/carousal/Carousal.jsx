import Carousel from "react-bootstrap/Carousel";
import carousal from "../../assets/images/carousal-image.png";

function CarousalComp() {
  return (
    <Carousel style={{ padding: "0rem 5rem 0 5rem" }}>
      <Carousel.Item>
        <img className="d-block w-100" src={carousal} alt="carousalImage" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousal} alt="carousalImage" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarousalComp;
