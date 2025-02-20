import * as Color from "../../styles/colors";
import styled from "@emotion/styled";
import { TinyLink } from "../../styles/fonts";
import { DaisyLogoWhiteFigure } from "../../assets/icons";
import { Avatar1Image, Avatar2Image, Avatar3Image, Avatar4Image } from "../../assets/images/avatars";

export default function Footer() {
    return (
        <FooterSection>
            <LogoWrapper>
                <img src={DaisyLogoWhiteFigure} alt="Daisy logo" />
            </LogoWrapper>

            <AvatarsWrapper>
                <div>
                    <img
                        src={Avatar1Image}
                        alt="Illustration of a person wearing sunglasses and a cap."
                    />
                    <img
                        src={Avatar2Image}
                        alt="Illustration of a person with headphones and a hoodie."
                    />
                    <img
                        src={Avatar3Image}
                        alt="Illustration of a person with glasses and a polka-dot shirt."
                    />
                    <img
                        src={Avatar4Image}
                        alt="Illustration of a person with round glasses and a turtleneck sweater."
                    />
                </div>

                <TinyLink href="">Privacy Policy</TinyLink>
            </AvatarsWrapper>
        </FooterSection>
    );
}

const FooterSection = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${Color.Black};
    padding: 5rem 3rem;

    @media (max-width: 767px) {
        flex-direction: column;
        gap: 2rem;
        padding: 5rem 2rem;
    }
`;

const LogoWrapper = styled.div`
    max-height: 70px;
    img {
        width: 100%;
        max-height: 70px;
    }
`;

const AvatarsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    div {
        display: flex;
        gap: 0.5rem;
        max-height: 70px;

        img {
            background: ${Color.White};
            border-radius: 100%;
            max-height: 70px;
            width: 100%;
        }
    }

    a {
        align-self: flex-end;
    }

    @media (max-width: 767px) {
        div {
            img {
                background: ${Color.White};
                border-radius: 100%;
                max-height: 50px;
            }
        }

        a {
            align-self: center;
        }
    }
`;
