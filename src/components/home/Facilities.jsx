import {FacilitiesList, planOne, planThree, planTwo} from "../../data/fakeData";
import TickIcon from "../icons/TickIcon";

const Facilities = () => {
    return (
        <section className="w-full flex flex-col justify-center mb-[137px] md:mb-[94px]">
            <p className="title-home rtl">امکانات VOD</p>
            <div
                className="w-full mb-[100px] sm:mb-[70px] flex justify-center items-center mt-11 gap-[132px] md:flex-wrap md:gap-[100px] sm:gap-0 sm:justify-center justify-items-center">
                {FacilitiesList.map(item => (
                    <div className="flex flex-col justify-center items-center sm:w-[50%] sm:mb-[60px] sm:items-center"
                         key={item.id}>
                        {item.icon}
                        <p className="mt-8 sm:mt-[28px] rtl font-normal text-base text-black">{item.title}</p>
                    </div>
                ))}
            </div>
            <div className="inside flex justify-center">
               <div className="shadow-lg w-full max-w-[1100px]  rounded-[20px]">
                   <table
                       className="table-auto items-center w-full max-w-[1100px]  rounded-[20px] overflow-hidden ">
                       <thead>
                       <tr className="h-[76px]  bg-gradient-to-r from-bgRed to-bgBlue">
                           <td className="text-center text-textWhite font-bold text-2xl">پلن 3</td>
                           <td className="text-center text-textWhite font-bold text-2xl border-r-textWhite border-r-[3px] border-l-textWhite border-l-[3px]">پلن
                               2
                           </td>
                           <td className="text-center text-textWhite font-bold text-2xl">پلن 1</td>
                       </tr>
                       </thead>
                       <tbody className="shadow-xl">
                       {planThree.map((item, index) => (
                           <tr className="h-[56px] sm:h-[43px] odd:bg-bgBlue2">
                               <td className="text-center font-normal text-2xl text-textGray  h-[56px] sm:h-[43px]">
                                   <div className="flex justify-center items-center gap-2">{item.facility}{item.state && <TickIcon/>}</div>
                               </td>
                               <td className="text-center font-normal text-2xl text-textGray border-r-[3px] border-l-[3px]">
                                   <div className="flex justify-center items-center gap-2">{planTwo[index].facility}{planTwo[index].state && <TickIcon/>}</div>
                               </td>
                               <td className="text-center font-normal text-2xl text-textGray">
                                   <div className="flex justify-center items-center gap-2">{planThree[index].facility}{planThree[index].state && <TickIcon/>}</div>
                               </td>
                           </tr>
                       ))}
                       </tbody>
                   </table>
               </div>
            </div>
        </section>
    )
}
export default Facilities 