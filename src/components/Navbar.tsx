
import { Link } from "react-router-dom";



const Navbar = () => {

  return (
    <>
      <div className='w-full h-auto flex justify-between items-center mx-5 my-5'>
        <h1 className='text-5xl text-amber-300 font-bold'><Link to={"/"}>SaeResto</Link></h1>
        <div className='w-1/2  flex justify-evenly items-center'>
          <h1 className='text-2xl text-amber-500 hover:text-white font-medium'><Link to={"/"}>Home</Link></h1>
          <h1 className='text-2xl text-amber-500 hover:text-white font-medium' > <Link to={"/About"}>About</Link></h1>
          <h1 className='text-2xl text-amber-500 hover:text-white font-medium'><Link to={"/Service"}>Service</Link></h1>
          <h1 className='text-2xl text-amber-500 hover:text-white font-medium'><Link to={"/Menu"}>Menu</Link></h1>
          <h1 className='text-2xl text-amber-500 hover:text-white font-medium'><Link to={"/Contact"}>Contact</Link></h1>

          <button className='text-white bg-amber-500 w-1/6 h-10'> <Link to={"/"}>BOOK A TABLE</Link></button>
        </div>
      </div>
    </>
  )
}

export default Navbar
