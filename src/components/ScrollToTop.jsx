import { useEffect} from "react";

import {useLocation} from "react-router-dom";


const ScrollToTop = ({children}) => {

    // variables
    const location = useLocation()
    const {pathname} = location

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})

    }, [pathname]);
    return (
        <>{children}</>
    )
}
export default ScrollToTop