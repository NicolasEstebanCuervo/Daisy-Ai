import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { Medium, Small } from "../../styles/fonts";
import { motion } from "framer-motion";
import { animationProps } from "../../styles/animations";

export default function CreativeToolCard({
    title,
    image,
    text,
    alt,
}: {
    title: string;
    image: string;
    text: string;
    alt: string;
}) {
    return (
        <CreativeToolCardContainer>
            <Medium {...animationProps}>{title}</Medium>

            <CreativeToolImageContainer {...animationProps}>
                <CreativeToolImage src={image} alt={alt} />
            </CreativeToolImageContainer>

            <Small {...animationProps} weight={200}>
                {text}
            </Small>
        </CreativeToolCardContainer>
    );
}

const CreativeToolCardContainer = styled(motion.article)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid ${Color.DarkGreen};
    padding: 3rem;
    border-radius: 2rem;
    gap: 2rem;

    @media (max-width: 500px) {
        gap: 1rem;
        padding: 1.5rem;
    }
`;

const CreativeToolImageContainer = styled(motion.div)`
    width: 100%;
`;

const CreativeToolImage = styled.img`
        width: 100%;

    @media (max-width: 767px) {
            max-height: 500px;
    }

    @media (max-width: 500px) {
            display: none;
    }
`;
