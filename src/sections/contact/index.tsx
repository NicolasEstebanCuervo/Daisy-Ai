import styled from "@emotion/styled";
import * as Color from "../../styles/colors";
import { Medium, Smaller, Tiny, TinyLink } from "../../styles/fonts";
import { animationProps } from "../../styles/animations";

export default function Contact() {
    return (
        <ContactSection>
            <Medium {...animationProps} weight={500}>
                Join the Waitlist
            </Medium>

            <Smaller {...animationProps} weight={700}>
                Sign up with your email address to receive product news and updates.
            </Smaller>

            <ContactForm>
                <ContactInput placeholder="Email Address" type="email" />
                <ContactButton type="submit">Sign Up</ContactButton>
            </ContactForm>

            <Tiny color={Color.Black}>We respect your privacy.</Tiny>
            <TinyLink color={Color.Black} href="#">
                Privacy Policy
            </TinyLink>
        </ContactSection>
    );
}

const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7rem 0;
    border-top: 4px solid ${Color.DarkGreen};
    border-radius: 2rem 2rem 0 0;
    background: ${Color.LightYellow};
    gap: 1rem;
    text-align: center;
`;

const ContactForm = styled.form`
    display: flex;
    gap: 1rem;

    @media (max-width: 600px) {
        flex-direction: column;
        width: 80%;
    }
`;

const ContactInput = styled.input`
    padding: 1.5rem;
    border-radius: 0.5rem;
    border: 3px solid ${Color.DarkGreen};
    font-family: "PT Mono", serif;
    width: 100%;
`;

const ContactButton = styled.button`
    font-family: "PT Mono", serif;
    padding: 1rem 2rem;
    background: ${Color.Black};
    border-radius: 1rem;
    color: ${Color.White};
    font-weight: 900;
    font-size: 1rem;
    border: none;
    cursor: pointer;
`;
