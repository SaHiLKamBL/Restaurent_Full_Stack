

const Chefs = () => {
    return (
        <>
            <div className="w-[100vw] h-[80vh] flex flex-col justify-evenly items-center">
                <h1 className="text-3xl text-orange-400 font-bold">___Team Members___</h1>
                <h1 className="text-5xl text-black font-bold ">Our Master Chefs</h1>
                <div className="w-[100vw] h-[60vh]  flex justify-evenly items-center">
                    <div className="w-[336px] h-[400px] flex flex-col justify-evenly items-center bg-white hover:scale-110"><img className="w-[288px] h-[288px] rounded-[50%]" src="\assets\team-1.jpg" alt="chef" /> <h1 className="text-black font-bold text-2xl">Sahil Kamble</h1> <p className="text-slate-500 font-medium text-xl ">Head Chef</p></div>
                    <div className="w-[336px] h-[400px] flex flex-col justify-evenly items-center bg-white hover:scale-110"><img className="w-[288px] h-[288px] rounded-[50%]" src="\assets\team-3.jpg" alt="chef" /> <h1 className="text-black font-bold text-2xl">Siddhant Jha</h1> <p className="text-slate-500 font-medium text-xl ">Vice Chef</p></div>
                    <div className="w-[336px] h-[400px] flex flex-col justify-evenly items-center bg-white hover:scale-110"><img className="w-[288px] h-[288px] rounded-[50%]" src="\assets\team-2.jpg" alt="chef" /> <h1 className="text-black font-bold text-2xl">Aum Patel</h1> <p className="text-slate-500 font-medium text-xl ">Cook</p></div>
                    <div className="w-[336px] h-[400px] flex flex-col justify-evenly items-center bg-white hover:scale-110"><img className="w-[288px] h-[288px] rounded-[50%]" src="\assets\team-4.jpg" alt="chef" /> <h1 className="text-black font-bold text-2xl">Sam Singh</h1> <p className="text-slate-500 font-medium text-xl ">Asst. Cook</p></div>
                </div>
            </div>
        </>
    )
}

export default Chefs
