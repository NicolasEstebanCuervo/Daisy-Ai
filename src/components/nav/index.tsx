import daisyLogo from "../../assets/icons/daisy-logo.png";
import styled from "@emotion/styled";
import HamburgerButton from "../../assets/svg/hamburguer";

export default function NavBar() {
    return (
        <NavBarContainer>
            <div>
                <img src={daisyLogo} alt="Daisy logo" />
            </div>

            <Button>Join the Waitlist</Button>

            <HamburgerButton />
        </NavBarContainer>
    );
}

const NavBarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    div {
        max-height: 70px;
        img {
            width: 100%;
            max-height: 70px;
        
            @media (max-width: 500px) {
                max-height: 50px;
            }
        }
    }
`;

const Button = styled.header`
    background: #d2fba4;
    padding: 1rem;
    border-radius: 1rem;
    border: 3px solid #212e21;
    font-family: "PT Mono", serif;
    font-size: 1rem;
    font-weight: 900;

    -webkit-box-shadow: 8px 8px 0px 0px rgba(225, 166, 232, 1);
    -moz-box-shadow: 8px 8px 0px 0px rgba(225, 166, 232, 1);
    box-shadow: 8px 8px 0px 0px rgba(225, 166, 232, 1);

    @media (max-width: 767px) {
        display: none;
    }
`;
