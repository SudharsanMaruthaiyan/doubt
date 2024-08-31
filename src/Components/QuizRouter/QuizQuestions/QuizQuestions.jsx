import { useState } from "react";
import { QuizQuestion } from "../../../assets/Api/QuizQuestion";
import QuizMultipleChoiceQuestion from "../QuizMultipleChoiceQuestion/QuizMultipleChoiceQuestion"
import QuizImageQuestion from "../QuizImageQuestion/QuizImageQuestion"

const QuizQuestions = () => {
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

export default QuizQuestions