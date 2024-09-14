import Footer from "../components/Footer"

const MainLayout = ({children}) => {
    return (
        <>
            <main className="w-full flex flex-col items-center justify-center">{children}</main>
            <Footer/>
        </>
    )
}
export default MainLayout