import { footerLink } from '../data/fakeData'
import Logo from './../assets/images/Logo.png'
import {useContext} from "react";
import {AuthContext} from "../context/context";

const Footer = () => {
    const {setArea} = useContext(AuthContext)
    return (
        <footer className="w-full mb-28 flex flex-col justify-center items-center pb-11 pt-14 bg-bgGray">
            <img src={Logo} alt="logo" className='mb-14 object-fill' />
            <div className="flex gap-10 sm:flex-col rtl">
                {footerLink.map(item => (
                    <p key={item.id} onClick={() => setArea(item.area)} className='pointer text-text1 sm:text-center font-semibold text-sm' >{item.label}</p>
                ))}
            </div>


        </footer>
    )
}
export default Footer