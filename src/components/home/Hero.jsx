import logo2 from './../../assets/images/logo2.png'
import {useContext} from "react";
import {AuthContext} from "../../context/context";

const Hero = () => {
    const {setArea} = useContext(AuthContext)
    return (
        <section className="mb-[172px] mt-[116px] lg:mt-[10px] lg:mb-[20px] w-full flex justify-center items-center xl:h-[800px]">
            <div
                className="inside w-full flex justify-center items-center h-[1200px] bg-no-repeat bg-center relative bg-[url('./../../assets/images/hero.png')] lg:bg-[url('./../../assets/images/hero2.png')]">
                <img src={logo2} alt="logo" className="absolute lg:h-[56px] lg:w-[52px]"/>
                <div className="relative w-full flex justify-evenly lg:flex-col xl:h-full">
                    <div onClick={() => setArea("contact-us")}
                         className=" absolute top-[-25px] left-[130px] lg:top-[77%] lg:z-10 lg:botton-[230px] lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2
                         outline-none h-[49px] w-[90px] lg:h-[60px] lg:w-[60px] font-semibold text-sm lg:text-xs text-text1
                     rounded-[162px] p-[2px] bg-gradient-to-r from-[#F15A24] to-[#FFBE40]">
                        <div
                            className="rounded-[162px] flex justify-center items-center h-[45px] lg:h-[55px] lg:w-[55px] bg-white">تماس
                            با ما
                        </div>
                    </div>
                    <div onClick={() => setArea("content")}
                         className="pointer absolute top-[-58px] left-[27%] h-[113px] w-[208px]
                         lg:top-[60%] lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:h-[94px] lg:w-[94px] lg:text-[15px]
                          flex justify-center items-center text-textWhite font-black text-xl rounded-[162px] bg-gradient-to-r from-[#F15A24] to-[#FFBE40]">تولید
                        محتوا
                    </div>
                    <div onClick={() => setArea("platform")}
                         className="pointer absolute top-[-58px] right-[27%] h-[113px] w-[208px]
                          lg:top-[40%] lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:h-[94px] lg:w-[94px] lg:text-[15px]
                          flex justify-center items-center text-textWhite font-black text-xl rounded-[162px] bg-gradient-to-r from-[#0CD2EE] to-[#1C39BB]">پلتفرم
                        VOD
                    </div>
                    <div onClick={() => setArea("about-us")}
                         className="pointer absolute top-[-25px] right-[130px] lg:top-[21%] lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2
                     outline-none h-[49px] w-[90px] lg:h-[60px] lg:w-[60px] font-semibold lg:text-xs text-sm text-text1
                     rounded-[162px] p-[2px] bg-gradient-to-r from-[#0CD2EE] to-[#1C39BB]">
                        <div
                            className="rounded-[162px] flex justify-center items-center h-[45px] lg:h-[55px] lg:w-[55px] bg-white">درباره
                            ما
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Hero