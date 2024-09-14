import { Link } from 'react-router-dom'
import { footerLink } from '../data/fakeData'
import Logo from './../assets/images/Logo.png'

const Footer = () => {
    return (
        <footer className="w-full mb-28 flex flex-col justify-center items-center pb-11 pt-14 bg-bgGray">
            <img src={Logo} alt="logo" className='mb-14 object-fill' />
            <div className="flex gap-10 sm:flex-col rtl">
                {footerLink.map(item => (
                    <Link key={item.id} className='text-text1 sm:text-center font-semibold text-sm' to={item.path} >{item.label}</Link>
                ))}
            </div>


        </footer>
    )
}
export default Footer