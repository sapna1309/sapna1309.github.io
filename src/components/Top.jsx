import { FaHandPointUp } from 'react-icons/fa';

const Top = () => {
 const handleTop=()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 }
  return (
    <div className='w-fit fixed top-[88%]  right-14 z-30 hidden md:flex justify-center items-center p-3  border-gray-400 border-2 hover:border-cyan-400 hover:cursor-pointer border-solid bg-black rounded-xl shadow-sm shadow-gray-200'  onClick={handleTop}>
        <FaHandPointUp  size="26px" className="hover:animate-bounce bg:white hover:text-cyan-600 cursor-pointer" />
    </div>
  )
}

export default Top;