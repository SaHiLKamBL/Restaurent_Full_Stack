import React from 'react'

const Footer = () => {
  return (
    <>
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
                <input type="email" placeholder="Enter your email" className="w-[250px] bg-white h-[50px] pl-2" />

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

export default Footer
