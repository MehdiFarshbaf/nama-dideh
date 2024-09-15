import AboutUs from "../components/home/AboutUs"
import ContactUs from "../components/home/ContactUs"
import ContentProduction from "../components/home/ContentProduction"
import Facilities from "../components/home/Facilities";
import Platform from "../components/home/Platform";


const Home = () => {
    return (
        <div>
            <Platform/>
            <Facilities/>
            <ContentProduction/>
            <AboutUs/>
            <ContactUs/>
        </div>
    )
}
export default Home