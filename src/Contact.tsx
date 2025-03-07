import React from 'react'

import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import { useForm, SubmitHandler } from "react-hook-form"

function Contact() {
  
  type Inputs = {
    subject: string
 message:string
  
    email:string
    
    name:string
   
  }

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    reset();
  
    let r = await fetch("http://localhost:3000/contact", {
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

      <div className='w-[100vw] h-[50vh] flex justify-evenly flex-col items-center'>
        <h1 className='text-5xl text-orange-400 font-bold'>_____Contact Us_____</h1>
        <h1 className='text-4xl text-black font-bold'>Contact For Any Query</h1>
        <div className='w-[100vw] h-[15vh] flex justify-around items-center '>
          <div className='w-1/3 h-[10vh] flex flex-col justify-center items-center'>
            <h1 className='text-orange-400 text-3xl font-semibold'>Booking___</h1>
            <h2 className='text-black text-2xl font-medium'>Example@ab.com</h2>
          </div>
          <div className='w-1/3 h-[10vh] flex flex-col justify-center items-center'>
            <h1 className='text-orange-400 text-3xl font-semibold'>General___</h1>
            <h2 className='text-black text-2xl font-medium'>info@ab.com</h2>
          </div>
          <div className='w-1/3 h-[10vh] flex flex-col justify-center items-center'>
            <h1 className='text-orange-400 text-3xl font-semibold'>Technical___</h1>
            <h2 className='text-black text-2xl font-medium'>tech@ab.com</h2>
          </div>
        </div>

      </div>

      <div className='w-[100vw] h-[80vh] flex justify-evenly items-center'>

        <iframe className='w-[45vw] h-[65vh] ' src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD3ppnbg-cGiHU8ckEv-APGSlVI8O2s3Lc&q=ghansoli">
        </iframe>
        <div className='w-[40vw] h-[65vh] '>
        <form action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
          <div className='w-[40vw] flex justify-evenly items-center gap-2 mb-4'>
            <input {...register("name")} className='h-[10vh] border-2 border-black pl-5 w-[20vw]' type="text" placeholder='Enter Name' />
            <input  {...register("email")} className='h-[10vh] border-2 border-black pl-5 w-[20vw]' type="email" placeholder='Enter Email' />
          </div>
          <input  {...register("subject")} className='w-[40vw] h-[10vh] border-2 border-black pl-5 mb-4' type="text" placeholder='Subject' />
          <textarea  {...register("message")} className='w-[40vw] h-[30vh] border-2 border-black pl-5' placeholder='Message' />
          <input onClick={()=>{alert("Contact successfully")}} type="submit" value="BOOK NOW" className="bg-orange-400 w-[38vw] h-[8vh] mx-4 text-white mt-5 "/>
          </form>
        </div>

      </div>


      <Footer />


    </>
  )
}
export default Contact;
