import styled from "@emotion/styled";
import gridBackground from "../../assets/images/grid-background.png";
import heroImage from "../../assets/images/hero-image.png";
import { Large, Small } from "../../styles/fonts";
import NavBar from "../../components/nav";
import { motion } from "framer-motion";
import { animationProps } from "../../assets/animations";
import daisyAICommingSoon from "../../assets/icons/daisy-ai-coming-soon.png";
import CardDecorationImage from "../../components/cardDecorationImage";
import daisyAiPrompts from "../../assets/icons/daisy-ai-prompts.png";
import daisyAiPromptsBlogs from "../../assets/icons/daisy-ai-prompt-for-blog.png";
import daisyAiSmallBusiness from "../../assets/icons/daisy-ai-small-business-prompt.png";


export default function Header() {
    return (
        <HeaderContainer {...animationProps}>
            <SubContainer>
                <NavBar />
                <Content>
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
                                    backgroundImage:
                                        "linear-gradient(90deg, #e7ccff, #e7ccff)",
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

                    <ImagesContainer >
                        <CardDecorationImage top="0" left="0" img={daisyAiPrompts} alt="uwu"/>
                        <CardDecorationImage left="0" bottom="0" img={daisyAiPromptsBlogs} alt="uwu"/>
                        <CardDecorationImage top="0" right="0" img={daisyAiSmallBusiness} alt="uwu"/>
                        
                        <div
                            className="daisy-comming-soon-container"
                        >
                            <img src={daisyAICommingSoon} alt="" />
                        </div>
                        <img
                            src={heroImage}
                            alt="Four creative cards featuring a living room, a book club, a flower, a man with a bottle, and a finance-related design."
                        />
                    </ImagesContainer>
                </Content>
            </SubContainer>
        </HeaderContainer>
    );
}

const HeaderContainer = styled(motion.header)`
    background: url(${gridBackground});
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

const SubContainer = styled.div`
    max-width: 2000px;
    display: flex;
    flex-direction: column;
`;

const Content = styled.section`
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

const ImagesContainer = styled.div`
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
