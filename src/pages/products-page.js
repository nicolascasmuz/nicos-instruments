import styled from "styled-components";
import { Link } from "react-router-dom";
import { CategoryComp } from "../components/category-comp";
import classicGuitars from "../resources/classic-guitars-cat.webp";
import microphones from "../resources/microphones-cat.webp";
import keyboards from "../resources/keyboards-cat.webp";
import percussion from "../resources/percussion-cat.webp";
import accesories from "../resources/accesories-cat.webp";
import basses from "../resources/basses-cat.webp";
import consoles from "../resources/consoles-cat.webp";
import electricGuitars from "../resources/electric-guitars-cat.webp";
import pedals from "../resources/pedals-cat.webp";
import pianos from "../resources/pianos-cat.webp";
import synthesizers from "../resources/synthesizers-cat.webp";
import amps from "../resources/amps-cat.webp";

export function ProductsPage() {
  const BodySection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #362b2f;
    min-height: calc(100vh - 260px);
    overflow: auto;
    padding: 40px 0;

    .general-section__wrapper {
      display: grid;
      justify-content: center;
      gap: 35px;
    }

    @media (min-width: 700px) {
      .general-section__wrapper {
        grid-template-rows: auto auto;
        grid-template-columns: auto auto;
      }
    }
  `;

  return (
    <BodySection className="general-comp">
      <div className="general-section__wrapper">
        <Link to="/category/accesorios">
          <CategoryComp name={"Accesorios"} pic={accesories} />
        </Link>
        <Link to="/category/amplificadores">
          <CategoryComp name={"Amplificadores"} pic={amps} />
        </Link>
        <Link to="/category/bajos">
          <CategoryComp name={"Bajos"} pic={basses} />
        </Link>
        <Link to="/category/consolas">
          <CategoryComp name={"Consolas"} pic={consoles} />
        </Link>
        <Link to="/category/guitarras-acusticas">
          <CategoryComp name={"Guitarras acusticas"} pic={classicGuitars} />
        </Link>
        <Link to="/category/guitarras-electricas">
          <CategoryComp name={"Guitarras electricas"} pic={electricGuitars} />
        </Link>
        <Link to="/category/microfonos">
          <CategoryComp name={"Microfonos"} pic={microphones} />
        </Link>
        <Link to="/category/pedales">
          <CategoryComp name={"Pedales de efectos"} pic={pedals} />
        </Link>
        <Link to="/category/percusion">
          <CategoryComp name={"Percusion"} pic={percussion} />
        </Link>
        <Link to="/category/pianos">
          <CategoryComp name={"Pianos"} pic={pianos} />
        </Link>
        <Link to="/category/sintetizadores">
          <CategoryComp name={"Sintetizadores"} pic={synthesizers} />
        </Link>
        <Link to="/category/teclados">
          <CategoryComp name={"Teclados"} pic={keyboards} />
        </Link>
      </div>
    </BodySection>
  );
}
