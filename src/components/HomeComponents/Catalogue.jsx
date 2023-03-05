import CatalogueCard from "./CatalogueCard";

import { FaTruckMoving } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

import OfferHP from "../../assets/hp31.png";

import Countdown from "react-countdown";


const Catalogue = () => {
     return (
          <div className="block p-5 lg:p-12 bg-[#0000009e] py-16">
               <h2 className="text-center text-3xl lg:text-5xl font-bold text-white">
                    Catalogue
               </h2>
               <div className="flex gap-5 lg:justify-between py-6 mt-5 overflow-x-auto">
                    <CatalogueCard />
                    <CatalogueCard />
                    <CatalogueCard />
                    <CatalogueCard />
                    <CatalogueCard />
               </div>
               {/* Banner */}
               <div className="bg-gradient-to-r from-[#31975a] to-[#065a4f] w-full rounded-2xl mt-20 py-8">
                    <h2 className="text-3xl font-bold text-white text-center">
                         Why Choose Sound World?
                    </h2>
                    <div className="lg:flex block text-md mt-10">
                         <ul className="lg:flex lg:justify-between space-y-5 lg:space-y-0 w-full lg:px-20 px-8 text-white">
                              <li className="flex items-center lg:text-2xl font-semibold space-x-5">
                                   <FaTruckMoving className="text-5xl" />{" "}
                                   <span>Free Delivery</span>{" "}
                              </li>
                              <li className="flex items-center lg:text-2xl font-semibold space-x-5">
                                   <BiSupport className="text-5xl" />{" "}
                                   <span>24/7 Customer Support</span>
                              </li>
                              <li className="flex items-center lg:text-2xl font-semibold space-x-5">
                                   <BsPatchCheckFill className="text-5xl" />{" "}
                                   <span>Verified Products</span>
                              </li>
                         </ul>
                    </div>
               </div>

               {/* Exclusive Offers */}
               <div className="lg:grid lg:grid-cols-3 block mt-24">
                    <div className="lg:col-span-1">
                         <div className="flex items-center mx-auto rounded-full bg-gradient-to-b w-fit p-10 from-[#31975a] to-[#065a4f]">
                              <img
                                   className="mx-auto rounded-full"
                                   width={500}
                                   src={OfferHP}
                                   alt=""
                              />
                         </div>
                    </div>
                    <div className="lg:col-span-2 lg:pl-32 mt-10">
                         <div className="h-full">
                              <h2 className="lg:text-5xl text-3xl font-medium text-white ml-2">Newest Product <span className="lg:text-3xl text-xl font-light">- With an exclusive offer </span></h2>
                              <p className="mt-10 mb-3 text-2xl font-light text-white ml-2">Offer ends</p>
                              <div className="text-white text-6xl bg-gradient-to-r from-[#31975a] to-[#065a4f] flex justify-center items-center w-full lg:w-96 p-4 rounded-xl">
                                   <Countdown date={Date.now() + 100000}/>
                              </div>
                              <div className="py-10 lg:py-20 flex">
                                   <div className="space-x-5">
                                        <button className="p-3 px-5 text-white border rounded-lg">
                                             View Details
                                        </button> 
                                        <button className="p-3 px-5 text-white bg-gradient-to-r from-[#31975a] to-[#065a4f] rounded-lg">
                                             Shop Now
                                        </button>    
                                   </div>
                                   
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Catalogue;
