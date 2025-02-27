import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { DaisyLogoFigure } from "../../assets/icons";

export default function NavBar() {
    return (
        <NavContainer>
            <NavLogoImage src={DaisyLogoFigure} alt="Daisy logo" />
            <NavButton>Join the Waitlist</NavButton>
        </NavContainer>
    );
}

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
`;

const NavLogoImage = styled.img`
    width: 100%;
    max-height: 70px;
    max-width: 150px;

    @media (max-width: 500px) {
        max-height: 50px;
    }
`;

const NavButton = styled.button`
    background: ${Color.LightGreen};
    padding: 1rem;
    border-radius: 1rem;
    border: 3px solid ${Color.DarkGreen};
    font-family: "PT Mono", serif;
    font-size: 1rem;
    font-weight: 900;
    cursor: pointer;

    -webkit-box-shadow: 8px 8px 0px 0px ${Color.LightPurple};
    -moz-box-shadow: 8px 8px 0px 0px ${Color.LightPurple};
    box-shadow: 8px 8px 0px 0px ${Color.LightPurple};

    @media (max-width: 767px) {
        display: none;
    }
`;
