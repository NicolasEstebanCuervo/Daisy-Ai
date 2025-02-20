
import daisyLogoWhite from "../../assets/icons/daisy-logo-white.webp";
import avatar1 from "../../assets/images/avatars/avatar-1.webp";
import avatar2 from "../../assets/images/avatars/avatar-2.webp";
import avatar3 from "../../assets/images/avatars/avatar-3.webp";
import avatar4 from "../../assets/images/avatars/avatar-4.webp";
import styled from "@emotion/styled";
import { TinyLink } from "../../styles/fonts";

export default function Footer() {
    return (
        <FooterContainer>
            <div>
                <img src={daisyLogoWhite} alt="Daisy logo" />
            </div>

            <AvatarsContainer>
                <div>
                    <img
                        src={avatar1}
                        alt="Illustration of a person wearing sunglasses and a cap."
                    />
                    <img
                        src={avatar2}
                        alt="Illustration of a person with headphones and a hoodie."
                    />
                    <img
                        src={avatar3}
                        alt="Illustration of a person with glasses and a polka-dot shirt."
                    />
                    <img
                        src={avatar4}
                        alt="Illustration of a person with round glasses and a turtleneck sweater."
                    />
                </div>

                <TinyLink href="">Privacy Policy</TinyLink>
            </AvatarsContainer>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #000;
    padding: 5rem 3rem;

    div {
        max-height: 70px;
        img {
            width: 100%;
            max-height: 70px;
        }
    }

    @media (max-width: 767px) {
        flex-direction: column;
        gap: 2rem;
        padding: 5rem 2rem;
    }
`;

const AvatarsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    div {
        display: flex;
        gap: 0.5rem;

        img {
            background: #fff;
            border-radius: 100%;
        }
    }

    a {
        align-self: flex-end;
    }

    @media (max-width: 767px) {
        div {
            img {
                background: #fff;
                border-radius: 100%;
                max-height: 50px;
            }
        }

        a {
            align-self: center;
        }
    }
`;
