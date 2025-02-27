import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { Medium } from "../../styles/fonts";
import { SnailFigure } from "../../assets/icons";
import { GridGreenBackground } from "../../assets/images";
import StrokeCircle from "../../assets/svg/strokeCircle";
import PrimaryLineStroke from "../../assets/svg/PrimaryLineStroke";
import SecondaryLineStroke from "../../assets/svg/SecondaryLineStroke";
import { motion } from "framer-motion";
import { animationProps } from "../../styles/animations";


export default function Seed() {
    return (
        <SeedSection>
            <SeedWrapper>
                <SeedIntroContent>
                    <Medium {...animationProps}>
                        It all starts with the{" "}
                        <InlineFlexSpan>
                            seed
                            <StrokeCircle />
                        </InlineFlexSpan>{" "}
                        of an idea.
                    </Medium>

                    <SeedIntroImage
                        {...animationProps}
                        src={SnailFigure}
                        alt="Small snail"
                    />
                </SeedIntroContent>
                <SeedMainContent>
                    <Medium {...animationProps}>
                        Need a little help turning your good ideas into{" "}
                        <InlineFlexSpan>
                            great
                            <PrimaryLineStroke />
                        </InlineFlexSpan>
                        <InlineFlexSpan>
                            ones?
                            <SecondaryLineStroke />
                        </InlineFlexSpan>
                        <br />
                        <br />
                        The way you cultivate your creativity can make all the
                        difference.
                        <HighlightText
                            initial={{ backgroundSize: "0% 100%" }}
                            whileInView={{ backgroundSize: "100% 100%" }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                            }}
                        >
                            Nurture your ideas
                        </HighlightText>{" "}
                        from fleeting thoughts into full-fledged project plans
                        with Daisy. <br /> <br /> Whatever sparks your passion
                        or fuels your professional growth, Daisy is here to
                        help. <br /> <br /> Let your thoughts take root and
                        watch your creativity bloom.
                    </Medium>
                </SeedMainContent>
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

const SeedIntroContent = styled.section`
    flex: 1;

    h3 {
        max-width: 400px;
    }
`;

const SeedIntroImage = styled(motion.img)`
    max-height: 120px;

    @media (max-width: 1000px) {
        display: none;
    }
`;

const SeedMainContent = styled.section`
    flex: 2;
    max-width: 1000px;
    position: relative;

    div {
        position: absolute;
        top: 4.6rem;
        left: 12rem;
    }
`;

const HighlightText = styled(motion.span)`
    background-image: linear-gradient(
        90deg,
        ${Color.LightYellow},
        ${Color.LightYellow}
    );
    background-repeat: no-repeat;
    background-position: left center;
`;

const InlineFlexSpan = styled.span`
    display: inline-flex;
    flex-direction: column;
    position: relative;
`;

