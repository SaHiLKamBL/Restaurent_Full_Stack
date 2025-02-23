import "./App.css"

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-red-400 bg-cover bg-center relative overflow-x-hidden" style={{ backgroundImage: `url('src/assets/bgimage.jpg')` }}>
        <div className="w-[100vw] h-[100vh] absolute bg-black opacity-85 inset-0">
          <Navbar />
          <div className="w-[100vw] flex justify-between items-center mx-10 mt-20 ">
            <div className="w-1/2  ">
              <h1 className="text-6xl font-bold text-white">Enjoy Our</h1>
              <br />
              <h1 className="text-6xl font-bold text-amber-300 ">Delicious Meal</h1>
              <br />
              <br />
              <p className=" flex flex-wrap text-2xl font-semibold text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro id est rem, animi, nisi praesentium similique magnam distinctio vero quibusdam corrupti officia neque.</p>
              <button className='text-white text-2xl font-semibold bg-orange-400 w-[213px] h-[57px] my-5 backdrop-opacity-100'> BOOK A TABLE</button>
            </div>
            <div className="w-1/2 flex items-center justify-center  ">
              <img className="animate-[spin_20s_linear_infinite] h-lg w-lg" src="src\assets\pizzaog.png" alt="pizza" />
            </div>
          </div>

        </div>
      </div>


      {/* div-2 */}

      <div className="w-[100vw] h-[150vh] bg-slate-50  ">
        <div className="w-[100vw] h-96 flex justify-evenly items-center ">
          <div className="w-1/5 h-72  flex flex-col justify-evenly items-start px-5 bg-white shadow-lg shadow-black hover:shadow-md ">
            <img src="src\assets\icons8-manager-100.png" alt="img1" />
            <h1 className="text-2xl font-bold text-black">Master Chef</h1>
            <p className="text-lg text-black font-medium">Lorem ipsum dolor elit. Minus modi ipsam laborum quod doloremque porro.</p>
          </div>
          <div className="w-1/5 h-72  flex flex-col justify-evenly items-start px-5 bg-white shadow-lg shadow-black hover:shadow-md">
            <img src="src\assets\icons8-restaurant-100.png" alt="img1" />
            <h1 className="text-2xl font-bold text-black">Quality Food</h1>
            <p className="text-lg text-black font-medium">Lorem ipsum dolor elit. Minus modi ipsam laborum quod doloremque porro.</p>
          </div>
          <div className="w-1/5 h-72  flex flex-col justify-evenly items-start px-5 bg-white shadow-lg shadow-black hover:shadow-md">
            <img src="src\assets\icons8-shopping-cart-100.png" alt="img1" />
            <h1 className="text-2xl font-bold text-black">Online Order</h1>
            <p className="text-lg text-black font-medium">Lorem ipsum dolor elit. Minus modi ipsam laborum quod doloremque porro.</p>
          </div>

          <div className="w-1/5 h-72  flex flex-col justify-evenly items-start px-5 bg-white shadow-lg shadow-black hover:shadow-md">
            <img src="src\assets\icons8-service-100.png" alt="img1" />
            <h1 className="text-2xl font-bold text-black">24/7 service</h1>
            <p className="text-lg text-black font-medium">Lorem ipsum dolor elit. Minus modi ipsam laborum quod doloremque porro.</p>
          </div>

        </div>

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
      </div>





      {/* div-3 */}

      <div className="w-[100vw] h-[90vh] flex flex-col justify-evenly items-center">
        <h1 className="text-2xl font-bold text-orange-400">____Food Menu____</h1>
        <br />
        <h1 className="text-5xl font-bold text-black ">Most Popular Items</h1>
        <div className="grid grid-cols-2 grid-rows-4 gap-5">
          <div className="w-[40vw] h-15 flex justify-evenly items-center my-4">
            <img className="scale-3d mr-3" src="src\assets\menu-1.jpg" alt="menu1" />
            <div>
              <p className="text-2xl text-black font-semibold">Chicken Tikka</p>
              <p className=" text-slate-600 ">Lorem ipsum dolor sit amet consectetur Repellat tempore iure mollitia.</p>
            </div>
            <h1 className="text-orange-400 text-2xl font-bold">$115</h1>
          </div>
          <div className="w-[40vw] h-15 flex justify-evenly items-center my-4 ">
            <img className="scale-3d mr-3" src="src\assets\menu-1.jpg" alt="menu1" />
            <div>
              <p className="text-2xl text-black font-semibold">Chicken Tikka</p>
              <p className=" text-slate-600 ">Lorem ipsum dolor sit amet consectetur Repellat tempore iure mollitia.</p>
            </div>
            <h1 className="text-orange-400 text-2xl font-bold">$115</h1>
          </div>
          <div className="w-[40vw] h-15 flex justify-evenly items-center my-4">
            <img className="scale-3d mr-3" src="src\assets\menu-1.jpg" alt="menu1" />
            <div>
              <p className="text-2xl text-black font-semibold">Chicken Tikka</p>
              <p className=" text-slate-600 ">Lorem ipsum dolor sit amet consectetur Repellat tempore iure mollitia.</p>
            </div>
            <h1 className="text-orange-400 text-2xl font-bold">$115</h1>
          </div>
          <div className="w-[40vw] h-15 flex justify-evenly items-center my-4">
            <img className="scale-3d mr-3" src="src\assets\menu-1.jpg" alt="menu1" />
            <div>
              <p className="text-2xl text-black font-semibold">Chicken Tikka</p>
              <p className=" text-slate-600 ">Lorem ipsum dolor sit amet consectetur Repellat tempore iure mollitia.</p>
            </div>
            <h1 className="text-orange-400 text-2xl font-bold">$115</h1>
          </div>
          <div className="w-[40vw] h-15 flex justify-evenly items-center my-4">
            <img className="scale-3d mr-3" src="src\assets\menu-1.jpg" alt="menu1" />
            <div>
              <p className="text-2xl text-black font-semibold">Chicken Tikka</p>
              <p className=" text-slate-600 ">Lorem ipsum dolor sit amet consectetur Repellat tempore iure mollitia.</p>
            </div>
            <h1 className="text-orange-400 text-2xl font-bold">$115</h1>
          </div>
        </div>
      </div>

      {/* div4 */}


      <div className="w-[100vw] h-[80vh] flex justify-center items-center">
        <div className="w-[85vw] h-[70vh]  flex justify-center items-center">
          <img className="w-[40vw] h-[70vh]" src="src\assets\famdin2.png" alt="famdin" />
          <div className="w-[40vw] h-[70vh] bg-black items-center flex flex-col ">
            <h1 className="text-3xl text-orange-400 font-bold">Reservations___</h1>
            <h1 className="text-4xl text-white font-bold ">Book A Table Online</h1>
            <div className="w-[40vw] h-[20vh] grid grid-cols-2 grid-rows-2 gap-2 px-5 mt-5">
              <input className="w-[18vw] h-[8vh] bg-white px-5 " type="text" placeholder="Enter Your Name..." />
              <input className="w-[18vw] h-[8vh] bg-white px-5" type="Date" placeholder="Enter Date..." />
              <input className="w-[18vw] h-[8vh] bg-white px-5" type="email" placeholder="Enter Your Email..." />
              <input className="w-[18vw] h-[8vh] bg-white px-5" type="number" placeholder="Enter No.of People..." />
            </div>

            <textarea className="bg-white w-[37vw] h-[20vh] px-5 pt-2" name="text" id="text" placeholder="Special Request"></textarea>
            <button className="bg-orange-400 w-[37vw] h-[8vh] text-white mt-5 hover:text-orange-400 hover:bg-white">BOOK NOW</button>
          </div>
        </div>
      </div>

      {/* div-5 */}
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

      {/* div-6 */}
      <br />
      <br />
      <br />

      <div className="w-[100vw] h-[50vh] flex flex-col justify-evenly items-center">
        <h1 className="text-3xl text-orange-400 font-bold">___Testimonial___</h1>
        <h1 className="text-5xl text-black font-bold ">Our Clients Says!!!</h1>
        <div className="w-[100vw] h-[35vh] flex justify-evenly items-center ">

          <div className="w-[30vw] h-[25vh] border-2 border-slate-300 px-6">
            <img className="w-[32px] h-[32px] mt-2" src="src\assets\icons8-quotation-mark-100.png" alt="Quotation mark" />
            <p className="text-md font-medium text-slate-600 mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,Lorem ipsum dolor sit amet.</p>
            <div className="w-[20vw] h-[15vh] flex item-center mt-5">
              <img className="w-[50px] h-[50px] rounded-[50px]" src="src\assets\testimonial-1.jpg" alt="test1" />
              <div className="ml-5">
                <h1 className="text-2xl text-black font-semibold">Client Name</h1>
                <h2 className="text-sm text-slate-600 font-medium">Profession</h2>
              </div>
            </div>
          </div>

          <div className="w-[30vw] h-[25vh]   px-6 bg-orange-400">
            <img className="w-[32px] h-[32px] mt-2" src="src\assets\white quotation.png" alt="Quotation mark" />
            <p className="text-md font-medium text-white mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,Lorem ipsum dolor sit amet.</p>
            <div className="w-[20vw] h-[15vh] flex item-center mt-5">
              <img className="w-[50px] h-[50px] rounded-[50px]" src="src\assets\testimonial-2.jpg" alt="test1" />
              <div className="ml-5">
                <h1 className="text-2xl text-white font-semibold">Client Name</h1>
                <h2 className="text-sm text-white font-medium">Profession</h2>
              </div>
            </div>
          </div>
          <div className="w-[30vw] h-[25vh] border-2 border-slate-300 px-6">
            <img className="w-[32px] h-[32px] mt-2" src="src\assets\icons8-quotation-mark-100.png" alt="Quotation mark" />
            <p className="text-md font-medium text-slate-600 mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,Lorem ipsum dolor sit amet.</p>
            <div className="w-[20vw] h-[15vh] flex item-center mt-5">
              <img className="w-[50px] h-[50px] rounded-[50px]" src="src\assets\testimonial-3.jpg" alt="test1" />
              <div className="ml-5">
                <h1 className="text-2xl text-black font-semibold">Client Name</h1>
                <h2 className="text-sm text-slate-600 font-medium">Profession</h2>
              </div>
            </div>
          </div>

        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

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

export default App;