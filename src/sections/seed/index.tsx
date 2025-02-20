import styled from "@emotion/styled";
import * as Color from "../../styles/colors"
import { Medium } from "../../styles/fonts";
import { SnailFigure } from "../../assets/icons";
import { GridGreenBackground } from "../../assets/images";
import Circle from "../../assets/svg/circle";
import LineLeft from "../../assets/svg/lineLeft";
import LineRight from "../../assets/svg/lineRight";
import { motion } from "framer-motion";
import { animationProps } from "../../styles/animations";


export default function Seed() {
    return (
        <SeedSection>
            <SeedWrapper>
                <LeftContainer>
                    <Medium {...animationProps}>
                        It all starts with the{" "}
                        <span
                            style={{
                                display: "inline-flex",
                                flexDirection: "column",
                                position: "relative",
                            }}
                        >
                            seed
                            <Circle />
                        </span>{" "}
                        of an idea.
                    </Medium>

                    <motion.img
                        {...animationProps}
                        src={SnailFigure}
                        alt="Small snail"
                    />
                </LeftContainer>
                <RightContainer>
                    <Medium {...animationProps}>
                        Need a little help turning your good ideas into{" "}
                        <span
                            style={{
                                display: "inline-flex",
                                flexDirection: "column",
                            }}
                        >
                            {" "}
                            great
                            <LineLeft />
                        </span>
                        <span
                            style={{
                                display: "inline-flex",
                                flexDirection: "column",
                            }}
                        >
                            ones?
                            <LineRight />
                        </span>
                        <br />
                        <br />
                        The way you cultivate your creativity can make all the
                        difference.
                        <motion.span
                            initial={{ backgroundSize: "0% 100%" }}
                            whileInView={{ backgroundSize: "100% 100%" }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                            }}
                            style={{
                                backgroundImage:
                                    `linear-gradient(90deg, ${Color.LightYellow}, ${Color.LightYellow})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "left center",
                            }}
                        >
                            Nurture your ideas
                        </motion.span>{" "}
                        from fleeting thoughts into full-fledged project plans
                        with Daisy. <br /> <br /> Whatever sparks your passion
                        or fuels your professional growth, Daisy is here to
                        help. <br /> <br /> Let your thoughts take root and
                        watch your creativity bloom.
                    </Medium>
                </RightContainer>
            </SeedWrapper>
        </SeedSection>
    );
}

const SeedSection = styled.section`
    background: url(${GridGreenBackground});
    background-size: cover;
    background-position: center bottom;
    background-color: rgba(0, 0, 0, 0);
    padding: 5rem;
    border-top: 4px solid ${Color.DarkGreen};
    border-radius: 2rem 2rem 0 0;

    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-family: "Libre Baskerville", serif;
    }

    @media (max-width: 1000px) {
        gap: 2rem;
    }

    @media (max-width: 767px) {
        padding: 5rem 3rem;
    }
`;

const SeedWrapper = styled.div`
    max-width: 2000px;
    display: flex;

    @media (max-width: 1000px) {
        flex-direction: column;
        gap: 2rem;
    }
`;

const LeftContainer = styled.section`
    flex: 1;

    h3 {
        max-width: 400px;
    }

    img {
        max-height: 120px;
    }

    @media (max-width: 1000px) {
        img {
            display: none;
        }
    }
`;

const RightContainer = styled.section`
    flex: 2;
    max-width: 1000px;
    position: relative;

    div {
        position: absolute;
        top: 4.6rem;
        left: 12rem;
    }
`;
