import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Transforming from "../components/Transforming";
import Work from "../components/Work";
export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Work />
            <Transforming />
            <Clients />
            <Footer />
        </>
    )
}