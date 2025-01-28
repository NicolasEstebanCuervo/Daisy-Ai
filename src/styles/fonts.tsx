import styled from "@emotion/styled";
import { motion } from "framer-motion";

interface FontsProps {
    weight?: string | number; 
    margin?: string | number; 
    color?: string | number; 
}

export const Large = styled(motion.h1)<FontsProps>`
    font-family: "Libre Baskerville", serif;
    font-size: 3rem;
    font-weight: ${(props) => props.weight || "normal"};
    margin: ${(props) => props.margin || 0};
    text-align: center;

    @media (max-width: 767px) {
        font-size: 2.5rem;
    }

    @media (max-width: 400px) {
        font-size: 2rem;
    }
`;

export const Medium = styled(motion.h3)<FontsProps>`
    font-family: "Libre Baskerville", serif;
    font-size: 2.4rem;
    font-weight: ${(props) => props.weight || "normal"};

    @media (max-width: 500px) {
        font-size: 2rem;
    }

    @media (max-width: 400px) {
        font-size: 1.5rem;
    }
`;

export const Small = styled(motion.p)<FontsProps>`
    font-family: "PT Mono", serif;
    font-size: 1.5rem;
    font-weight: ${(props) => props.weight || "normal"};
    display: inline-block;

    @media (max-width: 1000px) {
        font-size: 1.3rem;
    }
`;

export const Smaller = styled(motion.span)<FontsProps>`
    font-family: "PT Mono", serif;
    font-size: 1rem;
    font-weight: ${(props) => props.weight || "normal"};
    display: inline-block;
    padding: 0 2rem;
`;

export const Tiny = styled(motion.span)<FontsProps>`
    font-family: "PT Mono", serif;
    font-size: 0.9;
    font-weight: ${(props) => props.weight || "normal"};
    color: ${(props) => props.color || "#ffff"};
    display: inline-block;
`;

export const TinyLink = styled(motion.a)<FontsProps>`
    font-family: "PT Mono", serif;
    font-size: 0.9rem;
    font-weight: ${(props) => props.weight || "normal"};
    color: ${(props) => props.color || "#ffff"};
    display: inline-block;
`;