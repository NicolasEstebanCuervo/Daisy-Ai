import { Medium, Small } from "../../styles/fonts";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { animationProps } from "../../assets/animations";

export default function TransformVerticalCard({
    title,
    image,
    text,
    alt
}: {
    title: string;
    image: string;
    text: string;
    alt: string
}) {
    return (
        <Container>
            <Medium {...animationProps}>{title}</Medium>

            <motion.div {...animationProps}>
                <img src={image} alt={alt} />
            </motion.div>

            <Small {...animationProps} weight={200}>
                {text}
            </Small>
        </Container>
    );
}

const Container = styled(motion.article)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid #212e21;
    padding: 3rem;
    border-radius: 2rem;
    gap: 2rem;

    :nth-child(1) {
        background: #e7ccff;
    }

    :nth-child(2) {
        background: #ccf5ff;
    }

    img {
        width: 100%;
    }

    @media (max-width: 767px) {
        img {
            max-height: 500px;
        }
    }

    @media (max-width: 500px) {
        gap: 1rem;
        padding: 1.5rem;

        img{
            display: none;
        }
    }
`;
