import contectImage from './../../assets/images/content.png'
const Contentproduction = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center mb-36 sm:mb-14">
            <p className="title-home">تولید محتوا</p>
            <div className="w-full flex justify-center items-start mt-14 gap-[100px]">
                <img src={contectImage} alt="content" className='object-fill rounded-md w-[824px]' />
                <div>
                    <p className='rtl mb-9 text-black font-normal text-sm text-justify'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                    <p className='rtl font-bold text-2xl text-text1'>مراحل پردازش محتوای شما</p>
                </div>
            </div>
        </section>
    )
}
export default Contentproduction