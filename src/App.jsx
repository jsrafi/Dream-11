
import { useState } from 'react'
import './App.css'
import Players from './Components/Plyers/Players';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer';

function App() {

  const [credit, setCredit] = useState(0);

  const handleFreeCredit = () => {
    setCredit(credit + 6000000)
    toast.success('Credit Added to your account', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const adjustCredit = (price) => {
    console.log(price)
    const newCredit = credit - price;
    setCredit(newCredit)
  }

  const addCredit =(select)=>
  {
    const newCredit = credit + select.price;
    setCredit(newCredit)
  }


  return (
    <>
      <div className='relative max-w-[1200px] mx-auto '>
        <nav className='flex justify-between items-center mt-5 sticky  backdrop-blur-sm bg-white/90 top-0 z-10 mx-1'>
          <img src={'logo.png'} alt="" />
          <div className='flex gap-2 md:gap-10 items-center'>
            <ul className='md:flex gap-10 text-[#131313b6] hidden  '>
              <li>Home</li>
              <li>Fixtures</li>
              <li>Teams</li>
              <li>Schedules</li>
            </ul>
            <img className=' md:hidden' src={'icon.png'} alt="" />

            <button className='flex items-center border-2 px-2 py-2 md:px-4 md:py-2 gap-1 font-semibold md:text-base text-xs rounded-lg'>{credit} coin <img className='md:w-max w-4' src={'Currency.png'} alt="" /></button>
          </div>
        </nav>

        <header className=''>



          <main className='bg-[url("https://i.ibb.co.com/2jKKJgk/bg-shadow.png")] bg-black rounded-2xl flex flex-col justify-center items-center gap-7 p-10 mt-8 mx-2'>

            <img className='md:w-max w-48 ' src={'banner-main.png'} alt="" />
            <h1 className='text-white font-bold text-[30px] md:text-[40px] text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h3 className='text-[#ffffffc4] text-[20px] md:text-[24px] text-center'>Beyond Boundaries Beyond Limits</h3>
            <button onClick={handleFreeCredit} className=" bg-black text-yellow-400 font-bold text-sm md:text-lg px-6 py-3 rounded-lg border-4 border-yellow-400 shadow-[0_0_10px_rgba(240,255,0,0.8)] hover:shadow-[inset_0_0_10px_rgba(240,255,0,0.8)] ">Claim Free Credit</button>

          </main>


        </header>
        <Players credit={credit} adjustCredit={adjustCredit} addCredit={addCredit}></Players>
        
      </div>
      <Footer></Footer>



      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
