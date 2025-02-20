import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { Large, Small } from "../../styles/fonts";
import { GridBackground, HeroImage } from "../../assets/images";
import { DaisyAiCommingSoonFigure, DaisyAiPromptForBlogFigure, DaisyAiPromptsFigure, DaisyAiSmallBusinessPromptFigure } from "../../assets/icons";
import { motion } from "framer-motion";
import { animationProps } from "../../styles/animations";
import NavBar from "../../components/navBar";
import FloatingImageCard from "../../components/floatingImageCard";

export default function Header() {
    return (
        <HeaderSection {...animationProps}>
            <HeaderWrapper>
                <NavBar />
                <ContentWrapper>
                    <div>
                        <Large>
                            Give your ideas a glow up. Meet your new
                            <motion.span
                                initial={{ backgroundSize: "0% 100%" }}
                                whileInView={{ backgroundSize: "100% 100%" }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                }}
                                style={{
                                    backgroundImage: `linear-gradient(90deg, ${Color.LightPurple}, ${Color.LightPurple})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "left center",
                                }}
                            >
                                AI creative collaborator.
                            </motion.span>
                        </Large>
                        <Small>
                            Capture, organize, and elevate your ideas across
                            work, life, and leisure.
                        </Small>
                    </div>

                    <ImagesWrapper>
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

                        <div className="daisy-comming-soon-container">
                            <img src={DaisyAiCommingSoonFigure} alt="" />
                        </div>
                        <img
                            src={HeroImage}
                            alt="Four creative cards featuring a living room, a book club, a flower, a man with a bottle, and a finance-related design."
                        />
                    </ImagesWrapper>
                </ContentWrapper>
            </HeaderWrapper>
        </HeaderSection>
    );
}

const HeaderSection = styled(motion.header)`
    background: url(${GridBackground});
    background-size: cover;
    background-position: center bottom;
    background-color: rgba(0, 0, 0, 0);
    padding: 0 2rem 2rem 2rem;

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

const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    span {
        margin: 0 10px;
        font-family: "Libre Baskerville", serif;
    }
`;

const ImagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 90%;
    position: relative;

    @media (max-width: 1000px) {
        width: 100%;
    }

    img {
        width: 100%;
    }

    .daisy-comming-soon-container {
        width: 15%;
        height: auto;
        position: absolute;
        animation: rotate 5s linear infinite;
        right: 3rem;
        bottom: -2rem;

        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }

    @media (max-width: 500px) {
        width: 95%;

        img {
            display: none;
        }
    }
`;
