import SlickSlider from "react-slick"; // lib do Carrossel
import { Container } from "./styles";

const Slider = ({ children }) => (
  <Container>
    <SlickSlider
      {...{
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
      }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
