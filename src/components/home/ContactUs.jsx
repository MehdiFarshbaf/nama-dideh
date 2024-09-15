import { contactUsList } from "../../data/fakeData"
import {useContext, useEffect, useRef} from "react";
import {AuthContext} from "../../context/context";

const ContactUs = () => {
    const {area: areaContext} = useContext(AuthContext)
    const titleRef = useRef(null)

    useEffect(() => {
        if (areaContext == 'contact-us') {
            titleRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [areaContext]);
    return (
        <section className="w-full flex flex-col gap-14 mb-[140px] justify-center items-center" ref={titleRef}>
            <p className="title-home ">تماس با ما</p>
            <div className="flex flex-row gap-12 sm:flex-col justify-evenly items-start sm:gap-16">
                {contactUsList.map(item => (
                    <div key={item.id} className="flex flex-col items-center justify-start sm:justify-center gap-[34px] sm:w-full ">
                        {item.icon}
                        <p className="text-black sm:text-center font-extrabold text-2xl">{item.label}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}
export default ContactUs