import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { Small } from "../../styles/fonts";
import { motion } from "framer-motion";

export default function CreativeAICard({ text }: { text: string }) {
    const animationVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 2,
                ease: "easeInOut",
            },
        },
    };

    return (
        <CreativeAICardContainer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationVariants}
            role="article"
        >
            <Small weight={700}>{text}</Small>
        </CreativeAICardContainer>
    );
}

const CreativeAICardContainer = styled(motion.article)`
    border-radius: 1rem;
    border: 3px solid ${Color.DarkGreen};
    padding: 2rem 3rem;
    display: inline-block;
    transition: background-color 1s ease;

    &:hover {
        background: ${Color.LightGreenTransparent};
    }

    @media (max-width: 1000px) {
        padding: 2rem;
    }

    @media (max-width: 767px) {
        padding: 2rem 1rem;
    }
`;
