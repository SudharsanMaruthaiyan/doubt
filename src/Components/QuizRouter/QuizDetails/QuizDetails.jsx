import { QuizPrecentage } from "../../../assets/Api/QuizPrecentage";
import QuizNavigation from "../QuizNavigation/QuizNavigation";
import QuizProgressCard from "../QuizProgressCard/QuizProgressCard";
import QuizQuestions from "../QuizQuestions/QuizQuestions";
import QuizMultipleChoiceQuestion from "../QuizMultipleChoiceQuestion/QuizMultipleChoiceQuestion";
import QuizImageQuestion from "../QuizImageQuestion/QuizImageQuestion";
import { QuizQuestion } from "../../../assets/Api/QuizQuestion";
import { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { ButtonGroup } from "@mui/material";

const QuizProgressBar = ({progress})=>{
  return(
    <>
      <div className=" shadow-lg p-7 rounded-2xl">
          <h1 className=" font-medium font-[poppins] text-[17px]">Quiz Complite</h1>
          <div className=" grid grid-cols-5 items-center gap-4 pt-7">
              <ProgressBar completed={progress} customLabel=" " height="4px" className=" col-span-4"/>
              <p>{progress}%</p>
          </div>
      </div>
    </>
  )
}

const QuizNavigationn = ({ totalQuestions, currentQuestion, onNavigate, onFinish }) => {
  return(
    <>
      <div className="mb-4 mt-8 w-full shadow-2xl rounded-2xl p-8">
        <div>
          <h1 className=" font-medium font-[poppins] text-[17px]">Quiz Navigation</h1>
        </div>
        <div className=" grid grid-cols-3 gap-5 mt-5">
          {[...Array(totalQuestions)].map((_, index) => (
            <button  className=" bg-gray-400 rounded-lg py-3 font-bold hover:bg-gray-200 hover:opacity-25 transition-colors"
                key={index} 
                variant={currentQuestion === index ? "default" : "outline"}
                onClick={() => onNavigate(index)}
              >
                {index + 1}
            </button>
          ))}
        </div>
          <div className=" flex justify-center">
          <ButtonGroup  className="w-fit py-3 px-10 bg-[#282664] text-white hover:bg-white border-2 hover:text-black hover:border-[#282664] mt-5" onClick={onFinish}><p className=" font-[poppins] ">Finish</p></ButtonGroup>
          </div>
      </div>
    </>
  )
}

const QuizDetails = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleAnswer = (answer) => {
    // Here you would typically check if the answer is correct
    // and update the score accordingly

    // Increase progress by 10%
    setProgress(prev => Math.min(prev + 20, 100));

    // Move to next question
    if (currentQuestion < QuizQuestion.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handleNavigate = (QuizQuestion) => {
    setCurrentQuestion(questionIndex);
  };

  const handleFinish = () => {
    // Implement quiz finish logic here
    console.log("Quiz finished");
  };

  const renderQuestion = ()=>{
  const [open, setOpen] = useState(false)
    return(
      <>
      <div className=" shadow-2xl mt-12 rounded-xl"> 
          <div className=" rounded-2xl  shadow-2xl">
              <h1 className=" font-bold font-[poppins] border-b-2 p-5 pl-8">Quiz</h1>
              <div>
                  {
                    QuizQuestion.map((question, index)=>{
                        if (question.type === 'multiple-choice'){
                            return <QuizMultipleChoiceQuestion key={index} question={question} onAnswer={handleAnswer}/>
                        }
                        else if (question.type === 'image'){
                            return <QuizImageQuestion key={index} question={question} onAnswer={handleAnswer}/>
                        }
                        else{
                            return <p key={index}>Unkonw Quesitons Type</p>
                        }
                    })
                  }
              </div>
              <div>
                  <div className=" flex justify-end p-8">
                      <button onClick={()=>{
                          setOpen(!open)
                      }} className=" font-[poppins] font-bold ">Answer</button>
                  </div>
                  <div className={` transition  ${open? 'block transition' : ' hidden'}`}>
                      <h1 className="bg-[#1176F0]  text-white pl-8 py-3 font-bold font-[poppins]">Solution</h1>
                      <div className=" p-8">
                          <div className=" flex items-center gap-5"> 
                              <p className=" font-[poppins] font-bold">Answer 1:</p>
                              <p className=" font-[poppins] ">Lorem ipsum dolor sit.</p>
                          </div>
                          <div className=" flex items-center gap-5 py-4">
                              <p className=" font-[poppins] font-bold">Answer 2:</p>
                              <p className=" font-[poppins] ">Lorem ipsum dolor sit.</p>
                          </div>
                          <div className=" flex items-center gap-5">
                              <p className=" font-[poppins] font-bold">Answer 3:</p>
                              <p className=" font-[poppins] ">Lorem ipsum dolor sit.</p>
                          </div>
                          <div className=" flex items-center gap-5 py-4">
                              <p className=" font-[poppins] font-bold">Answer 4:</p>
                              <p className=" font-[poppins] ">Lorem ipsum dolor sit.</p>
                          </div>
                          <div className=" flex items-center gap-5">
                              <p className=" font-[poppins] font-bold">Answer 5:</p>
                              <p className=" font-[poppins] ">Lorem ipsum dolor sit.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
      </div>
      </>
    )
  }

  return (
    <div className=' max-w-[100%}'>
      <div className=' w-[90%] mx-auto py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          <div className="lg:order-1 order-2 col-span-4 lg:col-span-1">
              <QuizProgressBar progress={progress} />
              <div className=" flex justify-center">
                <QuizNavigationn 
                  totalQuestions={QuizQuestion.length}
                  currentQuestion={currentQuestion}
                  onNavigate={handleNavigate}
                  onFinish={handleFinish}
                />
              </div>
          </div>
          <div className='lg:order-2 order-1 col-span-4 lg:col-span-3 bg-[#f7f8fbb1] p-5 lg:p-12 rounded-3xl'>
              <div>
                <h1 className=" font-bold font-[poppins] text-3xl">Quiz</h1>
                <ul className=" flex flex-wrap gap-3 pt-3">
                  <li className=" flex items-center gap-2"><a href="" className=" text-[13px]">Home</a>
                    <div className=" w-1 h-1 rounded-full bg-[#4F547B]"></div>
                  </li>
                  <li className=" flex items-center gap-2"><a href="" className=" text-[13px]">All courses</a>
                  <div className=" w-1 h-1 rounded-full bg-[#4F547B]"></div>
                  </li>
                  <li className=" flex items-center gap-2"><a href="" className=" text-[13px]">User Experience Design</a>
                  <div className=" w-1 h-1 rounded-full bg-[#4F547B]"></div>
                  </li>
                  <li className=" flex items-center gap-2"><a href="" className=" text-[13px]">User Interface</a>
                  <div className=" w-1 h-1 rounded-full bg-[#4F547B]"></div>
                  </li>
                </ul>
              </div>
              <div className="">
                {renderQuestion()}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizDetails