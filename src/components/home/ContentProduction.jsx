import contentImage from './../../assets/images/content.png'
import {processStep} from "../../data/fakeData";
import CheckCircleIcon from "../icons/CheckCircleIcon";

const ContentProduction = () => {
    return (
        <section className="w-full flex  justify-center mb-36 sm:mb-14">
            <div className="inside flex flex-col justify-center">
                <p className="title-home">تولید محتوا</p>
                <div className="w-full flex justify-center items-start mt-14 sm:mt-5 gap-[50px] md:flex-col">
                    <img src={contentImage} alt="content" className='object-cover rounded-md w-[824px] lg:w-[50%] md:w-full md:h-[423px]'/>
                    <div>
                        <p className='rtl mb-9 text-black font-normal text-sm text-justify'>لورم ایپسوم متن ساختگی با
                            تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                            روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                        <p className='rtl font-bold text-2xl text-text1 mb-3'>مراحل پردازش محتوای شما</p>
                        {processStep.map(item => (
                            <div key={item.id} className="flex justify-end items-start gap-2 mb-6">
                                <div>
                                    <p className="rtl font-bold text-base mb-1">{item.title}</p>
                                    <p className="rtl font-normal text-sm">{item.description}</p>
                                </div>
                                <CheckCircleIcon/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContentProduction