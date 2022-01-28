import Cart from "./Cart"
import SearchBar from "./SearchBar"
import User from "./User"

export default ()=>{

    return (

        <div className="shadow py-2 px-4 flex items-center justify-around  top-0 w-full h-[3rem] bg-white" style={{position:'fixed'}}>
            <SearchBar/>
            <div className="flex gap-4">
            <Cart/>
            <User/>

            </div>
        </div>
 
    )
}