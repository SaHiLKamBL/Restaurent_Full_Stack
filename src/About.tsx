import React from 'react'

import Navbar from "./components/Navbar";


function About()  {
  return (
    <>
    <div className="w-[100vw] h-[80vh] bg-red-400 bg-cover bg-center relative overflow-x-hidden flex justify-center items-center" style={{ backgroundImage: `url('src/assets/bgimage.jpg')` }}>
    <div className="w-[100vw] h-[80vh] absolute bg-black opacity-85 inset-0"> 
   <Navbar />
   <div className='w-[100vw] flex flex-col justify-center items-center mt-20 '>
           <h1 className='text-9xl  font-bold text-white'> About Us</h1>
           <h2 className='text-white text-6xl mt-10'><span className='text-orange-400'>Home</span>/About</h2>
   </div>
    </div>
      </div> 
   <br />
   <br />
   <br />
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
                <p className="text-6xl font-bold text-orange-400 mr-2 ml-1">15</p>
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
     
        <div className="w-[100vw] h-[80vh] flex flex-col justify-evenly items-center">
        <h1 className="text-3xl text-orange-400 font-bold">___Team Members___</h1>
        <h1 className="text-5xl text-black font-bold ">Our Master Chefs</h1>
        <div className="w-[100vw] h-[60vh]  flex justify-evenly items-center">
          <div className="w-[336px] h-[400px] flex flex-col justify-evenly items-center bg-white hover:scale-110"><img className="w-[288px] h-[288px] rounded-[50%]" src="src\assets\team-1.jpg" alt="chef" /> <h1 className="text-black font-bold text-2xl">Sahil Kamble</h1> <p className="text-slate-500 font-medium text-xl ">Head Chef</p></div>
          <div className="w-[336px] h-[400px] flex flex-col justify-evenly items-center bg-white hover:scale-110"><img className="w-[288px] h-[288px] rounded-[50%]" src="src\assets\team-3.jpg" alt="chef" /> <h1 className="text-black font-bold text-2xl">Siddhant Jha</h1> <p className="text-slate-500 font-medium text-xl ">Vice Chef</p></div>
          <div className="w-[336px] h-[400px] flex flex-col justify-evenly items-center bg-white hover:scale-110"><img className="w-[288px] h-[288px] rounded-[50%]" src="src\assets\team-2.jpg" alt="chef" /> <h1 className="text-black font-bold text-2xl">Aum Patel</h1> <p className="text-slate-500 font-medium text-xl ">Cook</p></div>
          <div className="w-[336px] h-[400px] flex flex-col justify-evenly items-center bg-white hover:scale-110"><img className="w-[288px] h-[288px] rounded-[50%]" src="src\assets\team-4.jpg" alt="chef" /> <h1 className="text-black font-bold text-2xl">Sam Singh</h1> <p className="text-slate-500 font-medium text-xl ">Asst. Cook</p></div>
        </div>
      </div>


      <div className="w-[100vw] h-[70vh] bg-black flex justify-center items-center">
        <div className="flex justify-between items-start w-[70vw]">

          {/* Company Section */}
          <div className="w-1/4 flex flex-col items-start">
            <h1 className="text-3xl text-orange-400 font-bold mb-4">Company___</h1>
            <div>
              <h1 className="text-md font-[15px] text-white flex items-center mb-1">
                <img src="src/assets/icons8-right-arrow-24.png" className="w-[16.8px] h-[16.8px] mr-2" alt=">" /> About Us
              </h1>
              <h1 className="text-md font-[15px] text-white flex items-center mb-1">
                <img src="src/assets/icons8-right-arrow-24.png" className="w-[16.8px] h-[16.8px] mr-2" alt=">" /> Contact Us
              </h1>
              <h1 className="text-md font-[15px] text-white flex items-center mb-1">
                <img src="src/assets/icons8-right-arrow-24.png" className="w-[16.8px] h-[16.8px] mr-2" alt=">" /> Privacy Policy
              </h1>
              <h1 className="text-md font-[15px] text-white flex items-center mb-1">
                <img src="src/assets/icons8-right-arrow-24.png" className="w-[16.8px] h-[16.8px] mr-2" alt=">" /> Reservation
              </h1>
              <h1 className="text-md font-[15px] text-white flex items-center mb-1">
                <img src="src/assets/icons8-right-arrow-24.png" className="w-[16.8px] h-[16.8px] mr-2" alt=">" /> Terms & Condition
              </h1>
            </div>
          </div>

          {/* Contact Section */}
          <div className="w-1/4 flex flex-col items-start">
            <h1 className="text-3xl text-orange-400 font-bold mb-4">Contact___</h1>
            <div>
              <h1 className="text-md font-[15px] text-white flex items-center mb-1">
                <img className="w-[16.8px] h-[16.8px] mr-2" src="src/assets/icons8-location-50.png" alt=">" /> 123 Street, New York, USA
              </h1>
              <h1 className="text-md font-[15px] text-white flex items-center mb-1">
                <img className="w-[16.8px] h-[16.8px] mr-2" src="src/assets/icons8-call-50.png" alt=">" /> +012 345 67890
              </h1>
              <h1 className="text-md font-[15px] text-white flex items-center mb-1">
                <img className="w-[16.8px] h-[16.8px] mr-2" src="src/assets/icons8-mail-50.png" alt=">" /> info@example.com
              </h1>
            </div>
          </div>

          {/* Opening Section */}
          <div className="w-1/4 flex flex-col items-start">
            <h1 className="text-3xl text-orange-400 font-bold mb-4">Opening___</h1>
            <div>
              <h1 className="text-lg font-[20px] text-white flex items-center mb-1">
                Monday - Saturday
              </h1>
              <h1 className="text-md font-[15px] text-white flex items-center mb-1">
                09AM - 09PM
              </h1>
              <h1 className="text-lg font-[20px] text-white flex items-center mb-1">
                Sunday
              </h1>
              <h1 className="text-md font-[15px] text-white flex items-center mb-1">
                10AM - 08PM
              </h1>

            </div>
          </div>

          {/* Newsletter Section */}
          <div className="w-1/4 flex flex-col items-start">
            <h1 className="text-3xl text-orange-400 font-bold mb-4">Newsletter___</h1>
            <div>
              <h1 className="text-md font-[15px] text-white flex items-center mb-1">
                About UsDolor amet sit justo amet elitr clita ipsum elitr est.
              </h1>
              <span className="text-md font-[15px]  flex items-center mb-1">
                <input type="email" placeholder="Enter your email" className="w-[200px] bg-white h-[50px] pl-5" />
            
                <button className="bg-orange-400 text-white h-[50px] w-[100px]">Sign Up</button>
              </span>

            </div>
          </div>

        </div>
       


      </div>
    <div className="w-[100vw] h-[10vh] flex justify-between items-center bg-black mt-0.5">
                   <div className="w-1/2 flex flex-col justify-evenly items-start mx-5">
                     <h1 className="text-lg font-semibold text-white ">© Your Site Name, All Right Reserved. Designed By HTML Codex</h1>
                     <h1 className="text-lg font-semibold text-white ">Distributed By ThemeWagon</h1>
                   </div>
                   <div className="w-1/4 flex justify-center items-center">
                  <h2 className="text-white font-medium text-2xl mr-5"> Home</h2> <h2 className="text-white font-medium text-2xl mr-5">Cookies</h2> <h2 className="text-white font-medium text-2xl mr-5">Help</h2> <h2 className="text-white font-medium text-2xl mr-5">FQAs</h2>
                   </div>
        </div>


    </>
  )
}
export default About;
