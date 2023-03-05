import Hero from "../../assets/hero2.png";
import { HiArrowDown } from "react-icons/hi2";
import HeadphoneCard from "./HeadphoneCard";

const HeroSection = () => {
     return (
          <div className="block p-5 lg:p-16 pb-10">
               <div className="lg:flex">
                    <div className="py-8 lg:w-[35%]">
                         <p className="text-5xl lg:text-7xl text-white font-bold capitalize leading-tight lg:leading-snug mb-3">
                              Listen to{" "}
                              <span className="text-green-400">music</span> the
                              right way
                         </p>
                         <p className="text-xl lg:text-2xl text-gray-200 font-medium capitalize leading-tight lg:leading-snug mb-2">
                              Get the best audio sets here from{" "}
                              <span className="text-green-400">
                                   Sound World
                              </span>
                              ...
                         </p>
                         <div className="py-10 lg:py-20 flex space-x-5 text-lg">
                              <button className="p-3 lg:px-5 text-white bg-gradient-to-r from-[#31975a] to-[#065a4f] rounded-lg">
                                   Shop Now
                              </button>
                              <button className="p-3 text-white border rounded-lg">
                                   Get More Info
                              </button>
                              
                         </div>
                    </div>
                    <div className="hidden lg:flex w-[65%] p-2 justify-center">
                         <img className="w-[50%]  max-h-[90%] -z-50" src={Hero} alt="" />
                    </div>
               </div>
               <div className="block lg:mt-20 lg:flex w-full items-center space-y-10 lg:space-y-0">
                   <div className="lg:p-16 pt-16 pb-5 flex space-x-5 lg:space-x-0 snap-center overflow-x-auto lg:w-[65%] lg:grid lg:grid-cols-3 lg:gap-16 lg:order-last">
                         <HeadphoneCard />
                         <HeadphoneCard />
                         <HeadphoneCard />
                    </div> 
                    <div className="flex lg:w-[35%] lg:order-first">
                         <button className="rounded-full mx-auto lg:ml-20 stroke-2 border-2 border-white text-white p-5 hover:text-black hover:bg-white">
                              <HiArrowDown className="stroke-1" size={25} />
                         </button>
                    </div>
                    
               </div>
          </div>
     );
};

export default HeroSection;
