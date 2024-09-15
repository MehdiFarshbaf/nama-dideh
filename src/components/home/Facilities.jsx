import {FacilitiesList} from "../../data/fakeData";

const Facilities = () => {
    return (
        <section className="w-full flex flex-col justify-center mb-[137px] md:mb-[94px]">
            <p className="title-home">امکانات VOD</p>
            <div className="w-full flex justify-center items-center mt-11 gap-[132px] md:flex-wrap md:gap-[100px] sm:gap-0 sm:justify-center justify-items-center">
                {FacilitiesList.map(item => (
                    <div className="flex flex-col justify-center items-center sm:w-[50%] sm:mb-[60px] sm:items-center" key={item.id}>
                        {item.icon}
                        <p className="mt-8 sm:mt-[28px] rtl font-normal text-base text-black">{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Facilities 