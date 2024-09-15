import AboutImage from './../../assets/images/about.png'
import Logo from './../../assets/images/Logo.png'
import {useContext, useRef,useEffect} from "react";
import {AuthContext} from "../../context/context";

const AboutUs = () => {
    const {area: areaContext} = useContext(AuthContext)
    const titleRef = useRef(null)

    useEffect(() => {
        if (areaContext === 'about-us') {
            titleRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [areaContext]);

    return (
        <section className="w-full flex flex-col justify-center items-center mb-36" ref={titleRef}>
            <div className="inside flex justify-center items-center flex-col">
                <p className="title-home">درباره ما</p>
                <div className=" flex justify-center items-center gap-[60px] md:flex-col sm:flex-col-reverse">
                    <div
                        className='w-[50%] sm:w-full flex flex-col items-end gap-[26px] sm:items-center sm:justify-center'>
                        <img src={Logo} alt="logo" className='w-[193px] h-[34px] '/>
                        <p className='font-normal text-sm text-black rtl text-justify'>لورم ایپسوم متن ساختگی با تولید
                            سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                            مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                            با هدف بهبود ابزارهای کاربردی می باشد</p>
                    </div>
                    <div className='w-[50%] sm:w-full sm:flex sm:justify-center sm:items-center'>
                        <img src={AboutImage} alt="about" className='w-[417px] sm:w-full object-contain sm:h-[332px]'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutUs