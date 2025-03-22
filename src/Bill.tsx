
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";


interface Item {
  name: string
  price: number
}



const bill = () => {
  let currentprice: number = 0;

  const location = useLocation();
  const { arr = [] }: { arr?: Item[] } = location.state || {};
  const date = new Date().toLocaleDateString();

  {
    arr.map((e) => {
      currentprice += e.price;
    })
  }
  return (
    <>
      <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
        <div className='w-[25vw] h-auto border-2 border-black flex flex-col items-center px-8 py-10'>
          <h1 className='text-5xl font-bold text-orange-400'>SaeResto</h1>
          <div className='w-[100%] flex flex-col items-center mt-3'>
            <h2>Invoice Number::IND01001259</h2>
            <h2>Invoice Date ::{date}</h2>
          </div>
          <p>-------------------------------------------------</p>
          <div className='w-[100%] flex justify-between items-center  '>
            <h1 className='text-xl font-semibold text-black'>Item</h1>
            <h1 className='text-xl font-semibold text-black'>price</h1>
          </div>
          <p>-------------------------------------------------</p>
          <div className='w-[100%] h-auto flex flex-col items-center '>
            {arr.map((e, index) => (
              <div key={index} className='w-[100%] flex justify-between items-center'>
                <h1 className='text-lg font-medium text-black'>{e.name}</h1>
                <h1 className='text-lg font-medium text-black'>{e.price}</h1>
              </div>
            ))}

          </div>
          <p>-------------------------------------------------</p>
          <div className='w-[100%] flex justify-between items-center '>
            <h1 className='text-lg font-medium text-black'>GST@ 5%</h1>
            <h1 className='text-lg font-medium text-black'>$0.57</h1>
          </div>
          <p>-------------------------------------------------</p>
          <div className='w-[100%] flex justify-between items-center '>
            <h1 className='text-lg font-medium text-black'>TOTAL</h1>
            <h1 className='text-lg font-medium text-black'>${currentprice + 0.57}</h1>
          </div>
          <br />
          <br />
          <button className='w-[20vw] h-[10vh] text-2xl text-white bg-orange-400'><Link to={"/Menu"}>PAY</Link></button>
        </div>

      </div>


    </>
  );
};

export default bill
