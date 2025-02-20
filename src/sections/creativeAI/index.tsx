import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { Large } from "../../styles/fonts";
import { CreativeAiImage } from "../../assets/images";
import { BallonAnimalFigure, DaisyDoodleFigure, GhostyFigure, ShapeFigure, SphereFigure } from "../../assets/icons";
import { animationProps } from "../../styles/animations";
import { motion } from "framer-motion";
import CreativeAICard from "../../components/creativeAICard";
import FloatingIcon from "../../components/floatingIcon";

export default function CreativeAI() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    return (
        <CreativeAISection>
            <ContentWrapper>
                <TextContent>
                    <Large {...animationProps}>
                        Transform chaos into creativity{" "}
                    </Large>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <CreativeAICard text="Throw your thoughts onto an infinite canvas and watch them evolve" />
                        <CreativeAICard text="Turn scattered ideas into coherent plans with your AI collaborator" />
                        <CreativeAICard text="Save anything that sparks your creativity from across the web" />
                        <CreativeAICard text="Experience the blissful feeling of a perfectly organized junk drawer" />
                    </motion.div>
                </TextContent>

                <IllustrationWrapper {...animationProps}>
                    <FloatingIcon gridColumn="1" gridRow="4" img={DaisyDoodleFigure} />
                    <FloatingIcon gridColumn="1" gridRow="2" img={BallonAnimalFigure} />
                    <FloatingIcon gridColumn="6" gridRow="2" img={SphereFigure} />
                    <FloatingIcon gridColumn="10" gridRow="4" img={GhostyFigure} />
                    <FloatingIcon gridColumn="10" gridRow="2" img={ShapeFigure} />

                    <img
                        className="main-image"
                        src={CreativeAiImage}
                        alt="A surreal collage of the Mona Lisa with the top of her head replaced by a realistic brain. Surrounding her are abstract elements: scribbled handwriting, a chaotic tangled line, and mathematical equations."
                    />
                </IllustrationWrapper>
            </ContentWrapper>
        </CreativeAISection>
    );
}

const CreativeAISection = styled(motion.section)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 4px solid ${Color.DarkGreen};
    border-radius: 2rem 2rem 0 0;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

const ContentWrapper = styled.div`
    max-width: 1500px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        flex-direction: column;
        width: 85%;
    }

    @media (max-width: 500px) {
        width: 95%;
    }
`;

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 4rem;
    flex: 1;

    div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    @media (max-width: 767px) {
        padding: 3rem 1rem;
    }
`;

const IllustrationWrapper = styled(motion.div)`
    flex: 1;
    display: grid;
    grid-template-columns: repeat(10, 1fr); 
    grid-template-rows: repeat(5, 1fr); 

    max-width: 1000px;
    align-self: flex-end;

    .main-image {
        width: 100%;
        max-height: 900px;
        grid-column: 1 / span 10; 
        grid-row: 1 / span 10;
    }

    @media (max-width: 1000px) {
        img {
            display: none;
        }
    }
`;
