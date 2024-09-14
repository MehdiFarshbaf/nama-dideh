import Footer from "../components/Footer"

const MainLayout = ({ children }) => {
    return (
        <>
            <header>this is header</header>
            <main>{children}</main>
            <Footer/>
        </>
    )
}
export default MainLayout