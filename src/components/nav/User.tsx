import { Person } from "react-bootstrap-icons"

export default ()=>{

    return (
       <div className="relative bottom-[.1rem]">
           <span className="absolute bottom-[0rem] right-[.2rem] mx-2 shadow bg-red-400 rounded-full h-3 w-3 flex justify-center items-center text-sm text-white"></span>
           <Person size={25}/>
       </div>
    )
}