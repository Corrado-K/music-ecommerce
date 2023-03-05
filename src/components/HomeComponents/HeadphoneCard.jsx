import HeadPhonesImage from '../../assets/hero1.png';

const HeadphoneCard = () => {
     return ( 
          <div className=" w-80 rounded-lg glass py-2 px-5 block justify-center lg:border lg:border-gray-500">
               <img className='relative w-20 -mt-16 mx-auto' src={HeadPhonesImage} alt="" />
               <div className='mt-5 space-y-1'>
                    <p className='text-lg font-medium text-white'>Sony Headphones</p>
                    <p className="text-green-400">$100 <span className="text-white line-through ml-3">$120</span></p>
               </div>
          </div>
      );
}
 
export default HeadphoneCard;