import platformImage from './../../assets/images/platform.png'

const Platform = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center mb-6">
            <p className="title-home rtl">پلتفرم VOD</p>
            <div className="inside flex items-center gap-[20px] lg:flex-col lg:mt-[80px]">
                <img src={platformImage} alt="platform" className="object-cover w-[1200px] h-[492px] lg:w-full lg:h-[150px]"/>
                <p className="rtl font-normal text-sm text-black">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                    است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
            </div>
        </section>
    )
}
export default Platform