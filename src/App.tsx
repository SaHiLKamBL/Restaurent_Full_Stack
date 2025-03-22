import "./App.css"
import Service from "./components/Service_div";
import Navbar from "./components/Navbar";
import About from "./components/About_div";
import Chefs from "./components/Chefs";
import Footer from "./components/Footer";
import { useForm, SubmitHandler } from "react-hook-form"


function App() {
  type Inputs = {
    example: string
    username: string
    date: string
    email: string
    people: number
    text: string
    exampleRequired: string
  }

  const {
    register,
    handleSubmit,
    reset,

  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    reset();

    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let res = await r.json();
    console.log(res);
  };

  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-red-400 bg-cover bg-center relative overflow-x-hidden" style={{ backgroundImage: `url('/assets/bgimage.jpg')` }}>
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
              <img className="animate-[spin_20s_linear_infinite] h-lg w-lg" src="\assets\pizzaog.png" alt="pizza" />
            </div>
          </div>

        </div>
      </div>


      {/* div-2 */}

      <Service />

      <br />
      <br />

      <About />

      <br />
      <br />



      {/* div-3 */}

      <div className="w-[100vw] h-[90vh] flex flex-col justify-evenly items-center">
        <h1 className="text-3xl font-bold text-orange-400">____Food Menu____</h1>
        <br />
        <h1 className="text-5xl font-bold text-black ">Most Popular Items</h1>
        <div className="grid grid-cols-2 grid-rows-4 gap-5">
          <div className="w-[40vw] h-[10.5vh] flex justify-between items-center my-4 border-2 border-slate-700 hover:scale-105 cursor-pointer">
            <img className="w-[6vw] h-[10vh] mr-3" src="\assets\menu-1.jpg" alt="menu1" />
            <div className='flex flex-col justify-center items-center flex-wrap'>
              <p className="text-2xl text-black font-semibold">"VEG Aloo Tikki"</p>
              <p className=" text-slate-600 ">"Potato Tikki ,indian quisiun"</p>
            </div>
            <h1 className="text-orange-400 text-2xl font-bold pr-5">$12</h1>
          </div>
          <div className="w-[40vw] h-[10.5vh] flex justify-between items-center my-4 border-2 border-slate-700 hover:scale-105 cursor-pointer">
            <img className="w-[6vw] h-[10vh] mr-3" src="\assets\menu-1.jpg" alt="menu1" />
            <div className='flex flex-col justify-center items-center flex-wrap'>
              <p className="text-2xl text-black font-semibold">"VEG Aloo Tikki"</p>
              <p className=" text-slate-600 ">"Potato Tikki ,indian quisiun"</p>
            </div>
            <h1 className="text-orange-400 text-2xl font-bold pr-5">$12</h1>
          </div>
          <div className="w-[40vw] h-[10.5vh] flex justify-between items-center my-4 border-2 border-slate-700 hover:scale-105 cursor-pointer">
            <img className="w-[6vw] h-[10vh] mr-3" src="\assets\menu-1.jpg" alt="menu1" />
            <div className='flex flex-col justify-center items-center flex-wrap'>
              <p className="text-2xl text-black font-semibold">"VEG Aloo Tikki"</p>
              <p className=" text-slate-600 ">"Potato Tikki ,indian quisiun"</p>
            </div>
            <h1 className="text-orange-400 text-2xl font-bold pr-5">$12</h1>
          </div>
          <div className="w-[40vw] h-[10.5vh] flex justify-between items-center my-4 border-2 border-slate-700 hover:scale-105 cursor-pointer">
            <img className="w-[6vw] h-[10vh] mr-3" src="\assets\menu-1.jpg" alt="menu1" />
            <div className='flex flex-col justify-center items-center flex-wrap'>
              <p className="text-2xl text-black font-semibold">"VEG Aloo Tikki"</p>
              <p className=" text-slate-600 ">"Potato Tikki ,indian quisiun"</p>
            </div>
            <h1 className="text-orange-400 text-2xl font-bold pr-5">$12</h1>
          </div>
          <div className="w-[40vw] h-[10.5vh] flex justify-between items-center my-4 border-2 border-slate-700 hover:scale-105 cursor-pointer">
            <img className="w-[6vw] h-[10vh] mr-3" src="\assets\menu-1.jpg" alt="menu1" />
            <div className='flex flex-col justify-center items-center flex-wrap'>
              <p className="text-2xl text-black font-semibold">"VEG Aloo Tikki"</p>
              <p className=" text-slate-600 ">"Potato Tikki ,indian quisiun"</p>
            </div>
            <h1 className="text-orange-400 text-2xl font-bold pr-5">$12</h1>
          </div>
          <div className="w-[40vw] h-[10.5vh] flex justify-between items-center my-4 border-2 border-slate-700 hover:scale-105 cursor-pointer">
            <img className="w-[6vw] h-[10vh] mr-3" src="\assets\menu-1.jpg" alt="menu1" />
            <div className='flex flex-col justify-center items-center flex-wrap'>
              <p className="text-2xl text-black font-semibold">"VEG Aloo Tikki"</p>
              <p className=" text-slate-600 ">"Potato Tikki ,indian quisiun"</p>
            </div>
            <h1 className="text-orange-400 text-2xl font-bold pr-5">$12</h1>
          </div>
        </div>
      </div>

      {/* div4 */}


      <div className="w-[100vw] h-[80vh] flex justify-center items-center">
        <div className="w-[85vw] h-[70vh]  flex justify-center items-center">
          <img className="w-[40vw] h-[70vh]" src="\assets\famdin2.png" alt="famdin" />
          <div className="w-[40vw] h-[70vh] bg-black items-center flex flex-col ">
            <h1 className="text-3xl text-orange-400 font-bold">Reservations___</h1>
            <h1 className="text-4xl text-white font-bold ">Book A Table Online</h1>
            <form action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
              <div className="w-[40vw] h-[20vh] grid grid-cols-2 grid-rows-2 gap-2 px-5 mt-5">
                <input  {...register("username")} className="w-[18vw] h-[8vh] bg-white px-5 " type="text" placeholder="Enter Your Name..." />
                <input  {...register("date")} className="w-[18vw] h-[8vh] bg-white px-5" type="Date" placeholder="Enter Date..." />
                <input  {...register("email")} className="w-[18vw] h-[8vh] bg-white px-5" type="email" placeholder="Enter Your Email..." />
                <input  {...register("people")} className="w-[18vw] h-[8vh] bg-white px-5" type="number" placeholder="Enter No.of People..." />
              </div>
              <textarea  {...register("text")} className="bg-white w-[37vw] h-[20vh] px-5 pt-2 mx-5" placeholder="Special Request"></textarea>
              <input onClick={() => { alert("Table has successfully Booked") }} type="submit" value="BOOK NOW" className="bg-orange-400 w-[37vw] h-[8vh] mx-5 text-white mt-5 hover:text-orange-400 hover:bg-white" />
            </form>
          </div>
        </div>
      </div>

      {/* div-5 */}



      <Chefs />

      {/* div-6 */}
      <br />
      <br />
      <br />

      <div className="w-[100vw] h-[50vh] flex flex-col justify-evenly items-center">
        <h1 className="text-3xl text-orange-400 font-bold">___Testimonial___</h1>
        <h1 className="text-5xl text-black font-bold ">Our Clients Says!!!</h1>
        <div className="w-[100vw] h-[35vh] flex justify-evenly items-center ">

          <div className="w-[30vw] h-[25vh] border-2 border-slate-300 px-6">
            <img className="w-[32px] h-[32px] mt-2" src="\assets\icons8-quotation-mark-100.png" alt="Quotation mark" />
            <p className="text-md font-medium text-slate-600 mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,Lorem ipsum dolor sit amet.</p>
            <div className="w-[20vw] h-[15vh] flex item-center mt-5">
              <img className="w-[50px] h-[50px] rounded-[50px]" src="\assets\testimonial-1.jpg" alt="test1" />
              <div className="ml-5">
                <h1 className="text-2xl text-black font-semibold">Client Name</h1>
                <h2 className="text-sm text-slate-600 font-medium">Profession</h2>
              </div>
            </div>
          </div>

          <div className="w-[30vw] h-[25vh]   px-6 bg-orange-400">
            <img className="w-[32px] h-[32px] mt-2" src="\assets\white quotation.png" alt="Quotation mark" />
            <p className="text-md font-medium text-white mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,Lorem ipsum dolor sit amet.</p>
            <div className="w-[20vw] h-[15vh] flex item-center mt-5">
              <img className="w-[50px] h-[50px] rounded-[50px]" src="\assets\testimonial-2.jpg" alt="test1" />
              <div className="ml-5">
                <h1 className="text-2xl text-white font-semibold">Client Name</h1>
                <h2 className="text-sm text-white font-medium">Profession</h2>
              </div>
            </div>
          </div>
          <div className="w-[30vw] h-[25vh] border-2 border-slate-300 px-6">
            <img className="w-[32px] h-[32px] mt-2" src="\assets\icons8-quotation-mark-100.png" alt="Quotation mark" />
            <p className="text-md font-medium text-slate-600 mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,Lorem ipsum dolor sit amet.</p>
            <div className="w-[20vw] h-[15vh] flex item-center mt-5">
              <img className="w-[50px] h-[50px] rounded-[50px]" src="\assets\testimonial-3.jpg" alt="test1" />
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

      <Footer />
    </>
  )
}

export default App;