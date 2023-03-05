import Catalogue from "../components/HomeComponents/Catalogue";
import HeroSection from "../components/HomeComponents/HeroSection";
import Others from "../components/HomeComponents/Others";
import Navbar from "../components/Navbar";


const Home = () => {
     return ( 
          <div>
               <Navbar />
               <HeroSection />
               {/* Catalogue */}
               <Catalogue />
               {/* Offers */}
               <Others />
               {/* New arrivals */}
               {/* Footer */}
               
          </div>
     );
}
 
export default Home;