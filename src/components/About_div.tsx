import React from 'react'
import Number from './Number'

let About_div = () => {
    return (
        <>
            <div className="w-full h-[80vh] flex justify-between items-center px-5 ">
                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                    <img className="w-80 h-80 " src="src\assets\about-1.jpg" alt="about1" />
                    <div className="flex justify-start items-end">
                        <img className="h-60 w-60" src="src\assets\about-2.jpg" alt="about1" />
                    </div>
                    <div className="flex justify-end items-start">
                        <img className="h-60 w-60" src="src\assets\about-3.jpg" alt="about1" />
                    </div>
                    <img className="w-80 h-80" src="src\assets\about-4.jpg" alt="about1" />
                </div>

                <div className="w-[50vw] flex justify-evenly flex-col items-start">
                    <h1 className="text-4xl font-bold text-orange-400">About Us</h1>
                    <br />
                    <span className="text-3xl font-bold text-black flex ">Welcome to <img src="src\assets\icons8-restaurant-52.png" alt="reto" />Saeresto</span>
                    <p className="text-xl text-slate-600 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed similique explicabo beatae sapiente tempora non odio molestias iure itaque quo.
                    </p>
                    <br />
                    <p className="text-xl text-slate-600 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed similique explicabo beatae sapiente tempora non odio molestias iure itaque quo.
                    </p>
                    <br />
                    <br />

                    <div className="w-[50vw] flex  items-center px-5 ">

                        <div className="flex items-center w-1/3 border-orange-400 border-l-4 mr-10" >
                            <p  className="text-6xl font-bold text-orange-400 mr-2 ml-1"><Number/></p>
                            <p>
                                <h1 className="text-2xl text-slate-600 font-medium m-0">Years of</h1>
                                <h1 className="text-3xl text-black font font-semibold m-0">Experience</h1>
                            </p>
                        </div>

                        <div className="flex items-center w-1/2 border-l-4 border-l-orange-400">
                            <p className="text-6xl font-bold text-orange-400 mr-2 ml-1">50</p>
                            <p>
                                <h1 className="text-2xl text-slate-600 font-medium m-0">Popular</h1>
                                <h1 className="text-3xl text-black font font-semibold m-0">Master Chef</h1>
                            </p>
                        </div>
                    </div>
                    <button className='mt-10 text-white text-2xl font-semibold bg-orange-400 w-[213px] h-[57px] my-5 backdrop-opacity-100'>Read More</button>


                </div>

            </div>
        </>
    )
}

export default About_div
