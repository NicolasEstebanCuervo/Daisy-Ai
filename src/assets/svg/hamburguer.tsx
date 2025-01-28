import styled from "@emotion/styled";

const HamburguerIcon = () => (
    <SVG xmlns="http://www.w3.org/2000/svg" width={51} height={21} fill="none">
        <path stroke="#000" d="M0 20.5h51M0 .5h51" />
    </SVG>
);
export default HamburguerIcon;

const SVG = styled.svg`
    @media (min-width: 767px) {
        display: none;
    }
`;
