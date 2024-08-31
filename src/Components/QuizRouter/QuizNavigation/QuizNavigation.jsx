
const QuizNavigation = () => {
  return (
    <>
        <div className="shadow-lg p-7 rounded-2xl mt-12">
            <h1 className=" font-medium font-[poppins] text-[17px] pb-8">Quiz Navigation</h1>
            <div className=" flex gap-4 flex-wrap">
                <div className=" py-2 px-4 rounded-lg font-bold shadow-lg bg-[#b9c3deb2] hover:bg-[#ffffff] hover:opacity-30 transition-opacity w-fit"><a href="#1">1</a></div>
                <div className=" py-2 px-4 rounded-lg font-bold shadow-lg bg-[#b9c3deb2] hover:bg-[#ffffff] hover:opacity-30 transition-opacity w-fit"><a href="#2">2</a></div>
                <div className=" py-2 px-4 rounded-lg font-bold shadow-lg bg-[#b9c3deb2] hover:bg-[#ffffff] hover:opacity-30 transition-opacity w-fit"><a href="#3">3</a></div>
                <div className=" py-2 px-4 rounded-lg font-bold shadow-lg bg-[#b9c3deb2] hover:bg-[#ffffff] hover:opacity-30 transition-opacity w-fit"><a href="#4">4</a></div>
                <div className=" py-2 px-4 rounded-lg font-bold shadow-lg bg-[#b9c3deb2] hover:bg-[#ffffff] hover:opacity-30 transition-opacity w-fit"><a href="#5">5</a></div>
                <div className=" py-2 px-4 rounded-lg font-bold shadow-lg bg-[#b9c3deb2] hover:bg-[#ffffff] hover:opacity-30 transition-opacity w-fit"><a href="#6">6</a></div>
            </div>
            <div className=" pt-7">
              <button className=" py-4 px-10 bg-[#282664] rounded-lg text-white hover:bg-white border-2 hover:text-black hover:border-[#282664]">Finish</button>
            </div>
        </div>
    </>
  )
}

export default QuizNavigation