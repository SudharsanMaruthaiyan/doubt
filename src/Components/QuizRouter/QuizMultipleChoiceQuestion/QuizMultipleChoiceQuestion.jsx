import ProgressBar from "@ramonak/react-progress-bar"
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
const QuizMultipleChoiceQuestion = ({question , onAnswer}) => {
    const [isAnswered, setIsAnswered] = useState(false);
    const handleOptionClick = () => {
        if (!isAnswered) {
          onAnswer(question.id);
          setIsAnswered(true);
        }
      };
  return (
    <>
        <div className=" p-8 rounded-t-xl">
            <div id="1">
                <div className=" bg-[#282664] p-5 text-white rounded-t-lg ">
                    <p className=" text-lg font-[poppins]">{question.questionNo}</p>
                    <p className=" text-xl font-[poppins] pt-5">{question.questionText}</p>
                </div>
                <div className="  p-5 rounded-b-lg shadow-lg pt-10">
                    <p className=" font-[poppins] text-[#5C6185] pb-5">Select one:</p>
                    <ul>
                    {/* onChange={onAnswer} */}
                        <RadioGroup>
                            {question.options.map((option, index) => (
                                <div key={index} className=" flex items-center gap-5">
                                    <FormControlLabel id={`option+${index}`} name={question.id} key={index} value={option}  label={option} control={<Radio/>} onClick={handleOptionClick} className=" pb-3 font-[poppins] text-[15px] text-[#5C6185]"/>
                                </div>
                            ))}
                        </RadioGroup>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default QuizMultipleChoiceQuestion