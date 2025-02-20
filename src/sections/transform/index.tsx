import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { Large, Medium, Small } from "../../styles/fonts";
import { GetUnblockedImage, GridBackground, SaveInspirationImage, WideOpenImage } from "../../assets/images";
import { motion } from "framer-motion";
import { animationProps } from "../../styles/animations";
import TransformVerticalCard from "../../components/transformVerticalCard";

export default function Transform() {
    return (
        <TransformSection>
            <TransformWrapper>
                <Large margin="2rem 0" {...animationProps}>
                    Turn midnight musings into morning action plans
                </Large>

                <TransformHorizontalCard>
                    <TextsTransformHorizontalCard>
                        <Medium {...animationProps}>Wide open spaces</Medium>

                        <Small weight={200} {...animationProps}>
                            Daisy's infinite canvas brings your scattered
                            thoughts to life. Transform fragmented ideas into
                            fully developed plans and projects, all in one
                            visual, expansive space.
                        </Small>
                    </TextsTransformHorizontalCard>

                    <motion.div {...animationProps}>
                        <img
                            src={WideOpenImage}
                            alt="Screenshot of the Daisy interface, a visual organization tool that displays a spacious and flexible workspace for developing ideas and projects."
                        />
                    </motion.div>
                </TransformHorizontalCard>

                <VerticalTransformSection>
                    <TransformVerticalCard
                        title="Get unblocked with a little help from AI"
                        image={GetUnblockedImage}
                        text="Brainstorm ideas, create action plans, generate to-do lists and more. Organize your thoughts and keep your projects moving forward with Daisy."
                        alt="Daisy AI chat interface with user and AI messages exchanged."
                    />
                    <TransformVerticalCard
                        title="Save inspiration anytime, anywhere"
                        image={SaveInspirationImage}
                        text="Access all your inspiration in one place. Curate your personal creative library — images, videos, websites, and GIFS, at your fingertips. Drag and drop elements onto your canvas and watch your vision unfold."
                        alt="Gallery interface of Daisy showcasing saved inspirations, including images, videos, websites, and GIFs."
                    />
                </VerticalTransformSection>
            </TransformWrapper>
        </TransformSection>
    );
}

const TransformSection = styled.section`
    background: url(${GridBackground});
    background-size: cover;
    background-position: center bottom;
    background-color: rgba(0, 0, 0, 0);
    padding: 3rem 5rem;
    border-top: 4px solid ${Color.DarkGreen};
    border-radius: 2rem 2rem 0 0;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
        padding: 3rem 1rem;
    }

    @media (max-width: 767px) {
        padding: 3rem;
    }

    @media (max-width: 500px) {
        padding: 1rem;
        gap: 1rem;
    }
`;

const TransformWrapper = styled.div`
    max-width: 2000px;
    display: flex;
    gap: 2rem;
    flex-direction: column;
`;

const TransformHorizontalCard = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Color.LightGreen};
    border: 3px solid ${Color.DarkGreen};
    padding: 3rem;
    border-radius: 2rem;
    gap: 2rem;

    img {
        width: 100%;
    }

    @media (max-width: 767px) {
        flex-direction: column;

        img {
            max-height: 500px;
        }
    }

    @media (max-width: 500px) {
        gap: 0;
        padding: 1.5rem;

        img {
            display: none;
        }
    }
`;

const TextsTransformHorizontalCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 600px;
`;

const VerticalTransformSection = styled.div`
    display: flex;
    gap: 3rem;

    @media (max-width: 1000px) {
        gap: 1rem;
    }

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;
