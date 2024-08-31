import { Star } from "lucide-react"
import ProgressBar from "@ramonak/react-progress-bar";
const QuizCard = (props) => {
  return (
    <div className=" p-5 shadow-lg rounded-lg hover:scale-105 transition">
        <div>
            <img src={props.qcard1} alt="" />
        </div>
        <h1 className="  font-[poppins] font-bold pt-2">{props.name}</h1>
        <p className=" text-[#4D4D4D] font-[poppins] py-3 text-[15px]">{props.ctn}</p>
        <div className=" flex items-center gap-3 flex-wrap">
            <div className=" flex items-center gap-1 flex-nowrap">
                <Star className=" stroke-1 stroke-none fill-[#2581F2] w-5" />
                <p className=" text-[#4D4D4D] font-[poppins] text-[15px]">{props.noq1}</p>
            </div>
            <div className=" flex items-center gap-1 flex-nowrap">
                <Star className=" stroke-none fill-[#2581F2] w-5"/>
                <p className=" text-[#4D4D4D] font-[poppins] text-[15px]">{props.noq2}</p>
            </div>
        </div>
        <div className=" pt-3 grid grid-cols-5 items-center gap-3 w-full">
            <ProgressBar completed={props.progress} customLabel=" " height="8px" width="100%" className=" col-span-4"/>
            <p>{props.percentage}</p>
        </div>
    </div>
  )
}

export default QuizCard