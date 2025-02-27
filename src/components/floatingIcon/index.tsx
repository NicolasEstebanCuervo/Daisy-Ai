import styled from "@emotion/styled";

interface FloatingIconProps {
    img?: string;
    gridColumn?: string;
    gridRow?: string;
}

export default function FloatingIcon({
    img,
    gridColumn,
    gridRow,
}: FloatingIconProps) {
    return (
        <FloatingIconImage
            gridColumn={gridColumn}
            gridRow={gridRow}
            src={img}
            alt=""
        />
    );
}

const FloatingIconImage = styled.img<FloatingIconProps>`
    max-height: 130px;
    animation: float 5s ease-in-out infinite;
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};

    @keyframes float {
        0% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-30px);
        }

        100% {
            transform: translateY(0);
        }
    }
`;
