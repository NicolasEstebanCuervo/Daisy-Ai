import styled from "@emotion/styled";

export default function FloatIcon({
    img,
    gridColumn,
    gridRow,
}: {
    img: string;
    gridColumn?: string;
    gridRow?: string;
}) {
    return <Image gridColumn={gridColumn} gridRow={gridRow} src={img} alt="" />;
}

interface PositionProps {
    gridColumn?: string;
    gridRow?: string;
}

const Image = styled.img<PositionProps>`
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
