import styled from "@emotion/styled";
import { Medium, Smaller, Tiny, TinyLink } from "../../styles/fonts";
import { animationProps } from "../../assets/animations";

export default function Contact() {
    return (
        <Container>
            <Medium {...animationProps} weight={500}>Join the Waitlist</Medium>

            <Smaller {...animationProps} weight={700}>
                Sign up with your email address to receive product news and
                updates.
            </Smaller>

            <div>
                <input placeholder="Email Address" type="text" />
                <button>Sign Up</button>
            </div>

            <Tiny color="#000">We respect your privacy.</Tiny>
            <TinyLink color="#000" href="">
                Privacy Policy
            </TinyLink>
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7rem 0;
    border-top: 4px solid #212e21;
    border-radius: 2rem 2rem 0 0;
    background: #fefe7e;
    gap: 1rem;
    text-align: center;

    div{
        display: flex;
        gap: 1rem;

        @media (max-width: 600px) {
            flex-direction: column;
            width: 80%;
        }
    }

    input {
        padding: 1.5rem;
        border-radius: 0.5rem;
        border: 3px solid #212e21;
    }

    input::placeholder {
        font-family: "PT Mono", serif;
    }

    button {
        font-family: "PT Mono", serif;
        padding: 1rem 2rem;
        background: #000;
        border-radius: 1rem;
        color: #fff;
        font-weight: 900;
        font-size: 1rem;
    }
`;
