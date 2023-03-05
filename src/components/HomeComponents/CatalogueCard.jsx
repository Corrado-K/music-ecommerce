import HP from '../../assets/hp2.png';

const CatalogueCard = () => {
     return ( 
          <>
          <div className="block min-w-[16rem] max-w-[16rem] lg:min-w-[18rem] lg:max-w-[20rem]  rounded-2xl border border-gray-500">
               <div className="flex items-center glass rounded-t-2xl">
                    <img className='w-2/3 mx-auto p-3' src={HP} alt="" />
               </div>
               <div className="tinted-glass rounded-b-2xl py-3 pb-8 px-3 text-white">
                    <h2 className="text-lg mb-3">Beat HeadPhones With Dobly Surround Sound</h2>
                    <div className='text-md ml-5 mb-3'>
                         <ul className="list-disc space-y-2">
                              <li>Wireless</li>
                              <li>Surround Sound</li>
                              <li>20h Playback Time</li>
                         </ul>
                    </div>
                    <span className='text-green-500 font-medium text-xl my-3'>$150</span>
                    <div className='flex justify-between gap-4 mt-5'>
                         <button className='border border-green-500 text-green-400 w-1/2 p-2 rounded-full text-sm'>Add to Cart</button>
                         <button className='w-1/2 p-2 rounded-full text-sm bg-gradient-to-r from-[#31975a] to-[#0e907e]'>Buy Now</button>
                    </div>

               </div>
          </div>
          </>
      );
}
 
export default CatalogueCard;