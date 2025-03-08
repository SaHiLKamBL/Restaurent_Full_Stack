

import Navbar from "./components/Navbar";
import About2 from './components/About_div';
import Chefs from './components/Chefs';
import Footer from './components/Footer';


function About() {
  return (
    <>
      <div className="w-[100vw] h-[80vh] bg-red-400 bg-cover bg-center relative overflow-x-hidden flex justify-center items-center" style={{ backgroundImage: `url('/assets/bgimage.jpg')` }}>
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
      <About2 />

      <br />
      <br />
      <br />


      <Chefs />


      <Footer />

    </>
  )
}
export default About;
