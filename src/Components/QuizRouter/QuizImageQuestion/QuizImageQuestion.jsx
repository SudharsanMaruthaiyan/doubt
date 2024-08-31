import { FormControlLabel, Radio, RadioGroup } from "@mui/material"


const QuizImageQuestion = ({question,onAnswer}) => {
  return (
    <>
      <div className=" p-8 rounded-t-xl">
          <div id="1">
              <div className=" bg-[#282664] p-5 text-white rounded-t-lg ">
                  <p className=" text-lg font-[poppins]">{question.questionNo}</p>
                  <p className=" text-xl font-[poppins] pt-5">{question.questionText}</p>
              </div>
              <div className="  p-5 rounded-b-lg shadow-lg pt-10 ">
                  <p className=" font-[poppins] text-[#5C6185] pb-5">Select one:</p>
                  <div className=" flex justify-center">
                      <RadioGroup onChange={onAnswer}>
                        <div className=" grid grid-cols-2 md:gap-8 gap-4 md:gap-x-24">
                          <div className=" flex items-center md:gap-12 pr-12 md:pr-0">
                            <FormControlLabel value="1" control={<Radio/>} label="a"/>
                            <img src={question.imageUrl} alt="" className=" md:w-[100px]" />
                          </div>
                          <div className=" flex items-center md:gap-12 pr-12 md:pr-0">
                            <FormControlLabel value="2" control={<Radio/>} label="b"/>
                            <img src={question.imageUrl2} alt="" className=" md:w-[100px]" />
                          </div>
                          <div className=" flex items-center md:gap-12 pr-12 md:pr-0">
                            <FormControlLabel value="3" control={<Radio/>} label="c"/>
                            <img src={question.imageUrl3} alt="" className=" md:w-[100px]" />
                          </div>
                          <div className=" flex items-center md:gap-12 pr-12 md:pr-0">
                            <FormControlLabel value="4" control={<Radio/>} label="d"/>
                            <img src={question.imageUrl4} alt="" className=" md:w-[100px]" />
                          </div>
                        </div>
                      </RadioGroup>
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default QuizImageQuestion