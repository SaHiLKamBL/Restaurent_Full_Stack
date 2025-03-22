import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer';
import burgers from './burgers.json';


const Menu = () => {
  let navigate = useNavigate();
  const [arr, setArr] = useState<{ name: string; price: number }[]>([]);

  function billing(name: string, price: number) {
    setArr((prevArr) => [...prevArr, { name, price }]);

  }

  function handleclick() {


    navigate("/Bill", { state: { arr } });

  }

  interface Burger {
    name: string;
    price: number;
    img: string;
    dsc: string;
  }



  return (



    <>
      <div className="w-[100vw] h-[80vh] bg-red-400 bg-cover bg-center relative overflow-x-hidden flex justify-center items-center" style={{ backgroundImage: `url('/assets/bgimage.jpg')` }}>
        <div className="w-[100vw] h-[80vh] absolute bg-black opacity-85 inset-0">
          <Navbar />
          <div className='w-[100vw] flex flex-col justify-center items-center mt-20 '>
            <h1 className='text-9xl  font-bold text-white'>Menu</h1>
            <h2 className='text-white text-6xl mt-10'><span className='text-orange-400'>Home</span>/Menu</h2>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className='w-[100vw] h-[15vh] flex flex-col justify-evenly items-center'>
        <h1 className="text-3xl font-bold text-orange-400">____Food Menu____</h1>
        <br />
        <h1 className="text-5xl font-bold text-black ">Most Popular Items</h1>
      </div>
      <br />
      <br />
      <div className='w-[100vw] grid grid-cols-2 grid-rows-12 px-32 '>
        {burgers.map((burger: Burger, index: number) => (
          <div onClick={() => billing(burger.name, burger.price)} key={index} className="w-[40vw] h-[10.5vh] flex justify-between items-center my-4 border-2 border-slate-700 hover:scale-105 cursor-pointer">
            <img className="w-[6vw] h-[10vh] mr-3" src={burger.img} alt="menu1" />
            <div className='flex flex-col justify-center items-center flex-wrap'>
              <p className="text-2xl text-black font-semibold">{burger.name}</p>
              <p className=" text-slate-600 ">{burger.dsc}</p>
            </div>
            <h1 className="text-orange-400 text-2xl font-bold pr-5">${burger.price}</h1>
          </div>
        ))}

      </div>
      <br />

      <div className='w-[100vw] h-[15vh] flex justify-center items-center '>
        <button onClick={handleclick} className='w-[15vw] h-[10vh] bg-orange-400 text-white font-medium text-xl'>Show Bill</button>
      </div>

      <Footer />
    </>
  )
}

export default Menu
