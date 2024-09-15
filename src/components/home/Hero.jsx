import heroImage from './../../assets/images/hero.png'
import logo2 from './../../assets/images/logo2.png'

const Hero = () => {
    return (
        <section className="mb-[172px] mt-[116px] lg:mt-0 w-full flex justify-center items-center">
            <div
                className="inside w-full flex justify-center items-center h-[1200px] bg-no-repeat bg-center relative bg-[url('./../../assets/images/hero.png')] lg:bg-[url('./../../assets/images/hero2.png')]">
                <div className="hidden lg:absolute  pointer   outline-none lg:h-[60px] lg:w-[60px] font-semibold text-sm lg:text-xs
                     rounded-[162px] p-[2px] bg-gradient-to-r from-[#F15A24] to-[#FFBE40]">
                    <div
                        className="rounded-[162px] flex justify-center items-center h-[45px] lg:h-[55px] lg:w-[55px] bg-white">تماس
                        با ما
                    </div>
                </div>
                {/*<img src={heroImage} alt="hero image" className="object-contain"/>*/}
                <img src={logo2} alt="logo" className="absolute lg:h-[56px] lg:w-[52px]"/>
                <div className=" w-full flex justify-evenly lg:flex-col lg:hidden">
                    <div className="pointer absolute top-[-25px] left-[130px] outline-none h-[49px] w-[90px] lg:h-[60px] lg:w-[60px] font-semibold text-sm lg:text-xs text-text1
                     rounded-[162px] p-[2px] bg-gradient-to-r from-[#F15A24] to-[#FFBE40]
                    ">
                        <div
                            className="rounded-[162px] flex justify-center items-center h-[45px] lg:h-[55px] lg:w-[55px] bg-white">تماس
                            با ما
                        </div>
                    </div>
                    <div
                        className="pointer absolute top-[-58px] left-[27%] h-[113px] w-[208px] flex justify-center items-center text-textWhite font-black text-xl rounded-[162px] bg-gradient-to-r from-[#F15A24] to-[#FFBE40]">تولید
                        محتوا
                    </div>
                    <div
                        className="pointer absolute top-[-58px] right-[27%] h-[113px] w-[208px] flex justify-center items-center text-textWhite font-black text-xl rounded-[162px] bg-gradient-to-r from-[#0CD2EE] to-[#1C39BB]">پلتفرم
                        VOD
                    </div>
                    {/*<div className="pointer absolute top-[-25px] right-[130px] lg:right-[46%] lg:top-[21%]*/}
                    {/*<div className="pointer absolute top-[-25px] right-[130px] lg:right-1/2 lg:transform lg:-translate-x-1/2 lg:top-[21%]*/}
                    <div className="pointer absolute top-[-25px] right-[130px] lg:top-[21%]
                     outline-none h-[49px] w-[90px] lg:h-[60px] lg:w-[60px] font-semibold lg:text-xs text-sm text-text1
                     rounded-[162px] p-[2px] bg-gradient-to-r from-[#0CD2EE] to-[#1C39BB]
                    ">
                        <div className="rounded-[162px] flex justify-center items-center h-[45px] lg:h-[55px] lg:w-[55px] bg-white">درباره ما
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero