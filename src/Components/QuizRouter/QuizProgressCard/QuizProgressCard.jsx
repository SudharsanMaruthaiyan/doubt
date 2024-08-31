import ProgressBar from "@ramonak/react-progress-bar";
const QuizProgressCard = (props) => {
  
  return (
    <>
        <div className=" shadow-lg p-7 rounded-2xl">
            <h1 className=" font-medium font-[poppins] text-[17px]">Quiz Complite</h1>
            <div className=" grid grid-cols-5 items-center gap-4 pt-7">
                <ProgressBar completed={props.progress} customLabel=" " height="4px" className=" col-span-4"/>
                <p id="myButton">{props.percentage}</p>
            </div>
        </div>
    </>
  )
}

export default QuizProgressCard