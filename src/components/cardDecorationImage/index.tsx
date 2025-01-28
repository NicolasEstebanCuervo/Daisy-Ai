import styled from "@emotion/styled";

export default function CardDecorationImage({
    img,
    bottom,
    left,
    top,
    right,
    alt,
}: {
    img: string;
    bottom?: string;
    left?: string;
    top?: string;
    right?: string;
    alt: string;
}) {
    return (
        <ImageContainer  top={top} bottom={bottom} left={left} right={right}>
            <img  src={img} alt={alt} />
        </ImageContainer>
    );
}   

interface PositionProps {
    bottom?: string;
    left?: string;
    top?: string;
    right?: string;
}

const ImageContainer = styled.div<PositionProps>`
    width: 20%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: ${(props) => props.top || "auto"};
    bottom: ${(props) => props.bottom || "auto"};
    left: ${(props) => props.left || "auto"};
    right: ${(props) => props.right || "auto"};

    img {
        width: 100%;
        transform: rotate(5deg);
        transition: transform 0.3s ease-in-out;
    }

    &:hover img {
        transform: rotate(0deg);
    }
`;
