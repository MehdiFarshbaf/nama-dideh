import AboutUs from "../components/home/AboutUs"
import ContactUs from "../components/home/ContactUs"
import ContentProduction from "../components/home/ContentProduction"
import Facilities from "../components/home/Facilities";
import Platform from "../components/home/Platform";
import Hero from "../components/home/Hero";


const Home = () => {
    return (
        <>
            <Hero/>
            <Platform/>
            <Facilities/>
            <ContentProduction/>
            <AboutUs/>
            <ContactUs/>
        </>
    )
}
export default Home