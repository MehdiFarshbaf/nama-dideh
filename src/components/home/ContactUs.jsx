import { contactUsList } from "../../data/fakeData"

const ContactUs = () => {
    return (
        <section className="w-full flex flex-col gap-14 mb-[140px] justify-center items-center">
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