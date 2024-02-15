import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroAbout from "../components/HeroAbout";
import OurValues from "../components/OurValues";
import Services from "../components/Services";

export default function About() {
    return (
        <>
            <Header />
            <HeroAbout />
            <Services />
            <OurValues />
            <Clients />
            <Footer />
        </>
    )
}