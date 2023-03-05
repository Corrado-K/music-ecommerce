import { useState } from "react";
import { FaHeadphones } from "react-icons/fa";
import { HiOutlineBars3, HiShoppingBag, HiOutlineMagnifyingGlass } from "react-icons/hi2";

const Navbar = () => {

     const [show, setShow] = useState(false);

     const displayHandler = () => {
          setShow(!show);
     }
     
     return (
          <>
               {/* Mobile nav */}
               <div className="flex lg:hidden sticky top-0 z-50 lg:bg-[#041626d2] bg-[#041626] text-white h-16 p-2 px-5 items-center justify-between">
                    {/* Logo */}
                    <div className="block">
                         <button onClick={displayHandler}>
                              <HiOutlineBars3 size={25} />
                         </button>
                    </div>
                    <div className="text-md flex space-x-3 items-center">
                         <FaHeadphones className="text-green-400" size={25} />
                         <span>Sound World</span>
                    </div>
                    <div className="text-xl">
                         <HiShoppingBag size={25} />
                    </div>
               </div>

               {/* Menu */}
               <div className={`lg:hidden block absolute bg-gray-800 text-gray-100 w-52 p-5 space-y-5 m-2 rounded-lg transition-all duration-300 ease-in-out ${show ? '' : '-translate-x-96'}`}>
                    <p>Home</p>
                    <p>Shop</p>
                    <p>About Us</p>
                    <p>Contact</p>
               </div>


               {/* Desktop nav */}
               <div className="hidden lg:flex sticky top-0 z-50 bg-[#041626] text-white h-28 p-2 px-10 items-center justify-between">
                    
                    <div className="text-2xl flex space-x-3 items-center hover:bg-gray-800 p-5 rounded-md">
                         <FaHeadphones size={35} />
                         <span>Sound World</span>
                    </div>
                    <div className="flex text-xl space-x-10">
                         <span>Home</span>
                         <span>Shop</span>
                         <span>About Us</span>
                         <span>Contact</span>
                    </div>
                    <div className="flex space-x-10 items-center">
                         <HiOutlineMagnifyingGlass size={35} />
                         <HiShoppingBag size={35} />
                         <button className="px-5 py-3 text-lg border rounded-md border-white hover:bg-white hover:text-black">Login</button>
                    </div>
               </div>
          </>
     );
};

export default Navbar;
