import styled from "@emotion/styled";
import { Large } from "../../styles/fonts";
import CreativeAiImage from "../../assets/images/creativeAi-image.webp";
import CreativeAICard from "../../components/creativeAICard";
import FloatIcon from "../../components/floatIcon";
import balloonAnimal from "../../assets/icons/balloon-animal.webp";
import daisyDoodle from "../../assets/icons/daisy-doodle.webp";
import ghosty from "../../assets/icons/ghosty.webp";
import shape from "../../assets/icons/shape.webp";
import sphere from "../../assets/icons/sphere.webp";
import { motion } from "framer-motion";
import { animationProps } from "../../styles/animations";

export default function CreativeAI() {
    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    return (
        <Container>
            <SubContainer>
                <LeftContainer>
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
                </LeftContainer>

                <ImageContainer {...animationProps}>
                    <FloatIcon gridColumn="1" gridRow="4" img={daisyDoodle} />
                    <FloatIcon gridColumn="1" gridRow="2" img={balloonAnimal} />
                    <FloatIcon gridColumn="6" gridRow="2" img={sphere} />
                    <FloatIcon gridColumn="10" gridRow="4" img={ghosty} />
                    <FloatIcon gridColumn="10" gridRow="2" img={shape} />

                    <img
                        className="main-image"
                        src={CreativeAiImage}
                        alt="A surreal collage of the Mona Lisa with the top of her head replaced by a realistic brain. Surrounding her are abstract elements: scribbled handwriting, a chaotic tangled line, and mathematical equations."
                    />
                </ImageContainer>
            </SubContainer>
        </Container>
    );
}

const Container = styled(motion.section)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 4px solid #212e21;
    border-radius: 2rem 2rem 0 0;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

const SubContainer = styled.div`
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

const LeftContainer = styled.div`
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

const ImageContainer = styled(motion.div)`
    flex: 1;

    display: grid;
    grid-template-columns: repeat(10, 1fr); /* 10 columnas */
    grid-template-rows: repeat(5, 1fr); /* 10 filas */

    max-width: 1000px;
    align-self: flex-end;

    .main-image {
        width: 100%;
        max-height: 900px;
        grid-column: 1 / span 10; /* Ocupa todas las columnas (de 1 a 10) */
        grid-row: 1 / span 10;
    }

    @media (max-width: 1000px) {
        img {
            display: none; /* Ocultar la imagen principal en pantallas pequeñas */
        }
    }
`;
