import * as Color from "../../styles/colors";
import styled from "@emotion/styled";
import { TinyLink } from "../../styles/fonts";
import { DaisyLogoWhiteFigure } from "../../assets/icons";
import {
    Avatar1Image,
    Avatar2Image,
    Avatar3Image,
    Avatar4Image,
} from "../../assets/images/avatars";

export default function Footer() {
    return (
        <FooterContainer>
            <FooterLogoImage src={DaisyLogoWhiteFigure} alt="Daisy logo" />¿
            <FooterContent>
                <FooterAvatarsContainer>
                    {[Avatar1Image, Avatar2Image, Avatar3Image, Avatar4Image].map((src, index) => (
                        <AvatarImage key={index} src={src} alt={`Avatar ${index + 1}`} />
                    ))}
                </FooterAvatarsContainer>

                <TinyLink href="#">Privacy Policy</TinyLink>
            </FooterContent>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
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

const FooterLogoImage = styled.img`
    max-height: 70px;
    max-width: 150px;
    width: auto;
`;

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-end;

    @media (max-width: 767px) {
        align-items: center;
    }
`;

const FooterAvatarsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    max-height: 70px;

    @media (max-width: 767px) {
        img {
            max-height: 50px;
        }
    }
`;

const AvatarImage = styled.img`
    background: ${Color.White};
    border-radius: 50%;
    max-height: 70px;
    width: auto;
`;
