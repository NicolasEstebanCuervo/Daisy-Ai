import styled from "@emotion/styled";
import { Small } from "../../styles/fonts";
import { motion } from "framer-motion";

export default function CreativeAICard({ text }: { text: string }) {
    const itemVariants = {
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
        <Container
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
        >
            <Small weight={700}>{text}</Small>
        </Container>
    );
}

const Container = styled(motion.article)`
    border-radius: 1rem;
    border: 3px solid #212e21;
    padding: 2rem 3rem;
    display: inline-block;
    transition: background-color 1s ease;

    :hover {
        background: #adda7947;
    }

    @media (max-width: 1000px) {
        padding: 2rem;
    }

    @media (max-width: 767px) {
        padding: 2rem 1rem;
    }
`;
