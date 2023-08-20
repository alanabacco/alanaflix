import { Main } from "./styles";
import Menu from "../Menu";
import Footer from "../Footer";

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main $paddingAll={paddingAll}>{children}</Main>
      <Footer />
    </>
  );
}

export default PageDefault;
