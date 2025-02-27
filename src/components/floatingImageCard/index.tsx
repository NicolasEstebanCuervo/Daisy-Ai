import styled from "@emotion/styled";

interface FloatingImageCardProps {
    img?: string;
    bottom?: string;
    left?: string;
    top?: string;
    right?: string;
}

export default function FloatingImageCard({
    img,
    bottom,
    left,
    top,
    right,
}: FloatingImageCardProps) {
    return (
        <FloatingImageContainer
            top={top}
            bottom={bottom}
            left={left}
            right={right}
        >
            <FloatingImage src={img} alt="" />
        </FloatingImageContainer>
    );
}

const FloatingImageContainer = styled.div<FloatingImageCardProps>`
    width: 20%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: ${(props) => props.top || "auto"};
    bottom: ${(props) => props.bottom || "auto"};
    left: ${(props) => props.left || "auto"};
    right: ${(props) => props.right || "auto"};
`;

const FloatingImage = styled.img`
    width: 100%;
    transform: rotate(5deg);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: rotate(0deg);
    }
`;
