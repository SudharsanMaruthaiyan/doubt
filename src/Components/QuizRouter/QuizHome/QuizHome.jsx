import { Link } from "react-router-dom";
import { QCourseCardApi } from "../../../assets/Api/QCourseCardApi"
import QuizCard from "../QuizCard/QuizCard"
import QuizDetails from "../QuizDetails/QuizDetails"
import { ChevronRight } from "lucide-react";

// import { Apple ,Search,User,CalendarDays,TrendingCard} from "lucide-react"
const QuizHome = () => {
  return (
    <>
        <div className="max-w-[100%]">
        <div className=" w-[90%] mx-auto py-10">
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className=" md:col-span-1 col-span-3">
                <div className=" shadow-lg rounded-lg py-5 ">
                  <div className=" flex justify-between w-full hover:bg-[#1176F0] hover:text-white py-2 px-3">
                    <h1 className=" font-[poppins] pl-2">Trending Articels</h1>
                    <ChevronRight className=" w-5"/>
                  </div>
                  <div className=" flex justify-between w-full hover:bg-[#1176F0] hover:text-white py-2 px-3">
                    <h1 className=" font-[poppins] pl-2">Trending Articels</h1>
                    <ChevronRight className=" w-5"/>
                  </div>
                  <div className=" flex justify-between w-full hover:bg-[#1176F0] hover:text-white py-2 px-3">
                    <h1 className=" font-[poppins] pl-2">Trending Articels</h1>
                    <ChevronRight className=" w-5"/>
                  </div>
                  <div className=" flex justify-between w-full hover:bg-[#1176F0] hover:text-white py-2 px-3">
                    <h1 className=" font-[poppins] pl-2">Trending Articels</h1>
                    <ChevronRight className=" w-5"/>
                  </div>
                </div>
            </div>
            <div className=" col-span-3">
              <div>
                <h1 className=" text-[28px] font-[poppins] font-bold">
                  Trending Articles
                </h1>
                <hr className=" mb-2 p-[1.2px] bg-[#E3E3E3]" />
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 my-5">
                
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    QCourseCardApi.map((e,index)=>{
                      return(
                        <>
                          <div key={index}>
                                <Link to={"/quizdetail"}>
                                  <QuizCard qcard1={e.qcard1} 
                                  name={e.name}
                                  ctn={e.ctn}
                                  noq1={e.noq1}
                                  noq2={e.noq2}
                                  progress={e.progress}
                                  percentage={e.percentage}
                                  />
                                </Link>
                          </div>
                          
                        </>
                      )
                    })
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuizHome