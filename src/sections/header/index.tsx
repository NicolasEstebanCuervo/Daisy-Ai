import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { Large, Small } from "../../styles/fonts";
import { GridBackground, HeroImage } from "../../assets/images";
import {
    DaisyAiCommingSoonFigure,
    DaisyAiPromptForBlogFigure,
    DaisyAiPromptsFigure,
    DaisyAiSmallBusinessPromptFigure,
} from "../../assets/icons";
import { motion } from "framer-motion";
import { animationProps } from "../../styles/animations";
import NavBar from "../../components/navBar";
import FloatingImageCard from "../../components/floatingImageCard";

export default function Header() {
    return (
        <HeaderContainer {...animationProps}>
            <HeaderWrapper>
                <NavBar />
                <HeaderContent>
                    <Large>
                        Give your ideas a glow up. Meet your new{" "}
                        <HighlightText
                            initial={{ backgroundSize: "0% 100%" }}
                            whileInView={{ backgroundSize: "100% 100%" }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                            }}
                        >
                            AI creative collaborator.
                        </HighlightText>
                    </Large>
                    <Small>
                        Capture, organize, and elevate your ideas across work,
                        life, and leisure.
                    </Small>

                    <HeaderImagesContainer>
                        <FloatingImageCard
                            top="0"
                            left="0"
                            img={DaisyAiPromptsFigure}
                        />
                        <FloatingImageCard
                            left="0"
                            bottom="0"
                            img={DaisyAiPromptForBlogFigure}
                        />
                        <FloatingImageCard
                            top="0"
                            right="0"
                            img={DaisyAiSmallBusinessPromptFigure}
                        />

                        <CommingSoonFigure>
                            <img src={DaisyAiCommingSoonFigure} alt="" />
                        </CommingSoonFigure>
                        <HeaderImage
                            src={HeroImage}
                            alt="Four creative cards featuring a living room, a book club, a flower, a man with a bottle, and a finance-related design."
                        />
                    </HeaderImagesContainer>
                </HeaderContent>
            </HeaderWrapper>
        </HeaderContainer>
    );
}

const HeaderContainer = styled(motion.header)`
    background: url(${GridBackground});
    background-size: cover;
    background-position: center bottom;
    padding: 0 2rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5rem;

    @media (max-width: 500px) {
        gap: 2rem;
        padding: 0;
    }
`;

const HeaderWrapper = styled.div`
    max-width: 2000px;
    display: flex;
    flex-direction: column;
`;

const HeaderContent = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`;

const HighlightText = styled(motion.span)`
    background-image: linear-gradient(90deg, ${Color.LightPurple}, ${Color.LightPurple});
    background-repeat: no-repeat;
    background-position: left center;
`;

const HeaderImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 90%;
    position: relative;

    @media (max-width: 1000px) {
        width: 100%;
    }


    @media (max-width: 500px) {
        width: 95%;
    }
`;

const CommingSoonFigure = styled.div`
    width: 15%;
    height: auto;
    position: absolute;
    animation: rotate 5s linear infinite;
    right: 3rem;
    bottom: -2rem;

    img{
        width: 100%;
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    
    @media (max-width: 500px) {
        img {
            display: none;
        }
    }
`;

const HeaderImage = styled.img`
    width: 100%;
`;
