import Transform from "../sections/transform";
import Footer from "../sections/footer";
import Contact from "../sections/contact";
import Seed from "../sections/seed";
import Header from "../sections/header";
import CreativeAI from "../sections/creativeAI";

function App() {
    return (
        <main>
            <Header />
            <CreativeAI />
            <Transform />
            <Seed />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
