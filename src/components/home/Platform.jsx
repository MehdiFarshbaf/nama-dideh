import platformImage from './../../assets/images/platform.png'

const Platform = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center mb-6">
            <p className="title-home rtl">پلتفرم VOD</p>
            <div className="inside flex items-center gap-[20px] xl:flex-col lg:mt-[80px]">
                <img src={platformImage} alt="platform" className="object-cover w-[1200px] h-[492px] lg:w-full lg:h-[150px]" />
                <div>
                    <p className="rtl font-normal text-sm text-black">ارائه رایگان نرم افزار پلتفرم ساز (نسخه پایه)
                        و همچنین ارائه متدهای مختلف زمانی / مالی پشتیبانی و نسخه ارتقا یافته برای VOD/OTT/IPTV
                        امکان اختصاصی سازی UI/UX نرم افزار</p>
                    <p className="rtl font-normal text-sm text-black">

                    </p>
                </div>

            </div>
        </section>
    )
}
export default Platform