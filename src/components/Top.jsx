import {TbArrowBigUpLines} from "react-icons/tb";
//import {FaHandPointUp} from "react-icons/fa";

const Top = () => {
 const handleTop=()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 }
  return (
    <div className='w-fit fixed top-[88%] right-6 lg:right-2 md:right-2 z-30 hidden md:flex justify-center items-center p-2  border-teal-400 border-2 bg-sky-700  hover:cursor-pointer border-solid rounded-lg shadow-sm shadow-teal-400'  onClick={handleTop}>
        <TbArrowBigUpLines size="30px" className="hover:animate-bounce text-teal-400 cursor-pointer" />
    </div>
  )
}

export default Top;