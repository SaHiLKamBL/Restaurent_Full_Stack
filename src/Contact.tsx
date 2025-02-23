import React from 'react'

import Navbar from "./components/Navbar";


function Contact() {
  return (
    <>
      <div className="w-[100vw] h-[80vh] bg-red-400 bg-cover bg-center relative overflow-x-hidden flex justify-center items-center" style={{ backgroundImage: `url('src/assets/bgimage.jpg')` }}>
        <div className="w-[100vw] h-[80vh] absolute bg-black opacity-85 inset-0">
          <Navbar />
          <div className='w-[100vw] flex flex-col justify-center items-center mt-20 '>
            <h1 className='text-9xl  font-bold text-white'>Contact</h1>
            <h2 className='text-white text-6xl mt-10'><span className='text-orange-400'>Home</span>/Contact</h2>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className='w-[100vw] h-[100vh] flex justify-evenly flex-col items-center'>
         <h1 className='text-5xl text-orange-400 font-bold'>_____Contact Us_____</h1>
         <h1 className='text-4xl text-black font-bold'>Contact For Any Query</h1>
         <div className='w-[100vw] h-[15vh] flex justify-around items-center '>
            <div className='w-1/3 h-[10vh] flex flex-col justify-center items-center'>
            <h1 className='text-orange-400 text-3xl font-semibold'>Booking___</h1>
            <h2 className='text-black text-2xl font-medium'>Example@ab.com</h2>
            </div>
            <div className='w-1/3 h-[10vh] flex flex-col justify-center items-center'>
            <h1 className='text-orange-400 text-3xl font-semibold'>Booking___</h1>
            <h2 className='text-black text-2xl font-medium'>Example@ab.com</h2>
            </div>
            <div className='w-1/3 h-[10vh] flex flex-col justify-center items-center'>
            <h1 className='text-orange-400 text-3xl font-semibold'>Booking___</h1>
            <h2 className='text-black text-2xl font-medium'>Example@ab.com</h2>
            </div>
         </div>

      </div>

      <iframe className='w-[40vw] h-[45vh] ' src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD3ppnbg-cGiHU8ckEv-APGSlVI8O2s3Lc&q=ghansoli">
      </iframe>

      


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
      export default Contact;
