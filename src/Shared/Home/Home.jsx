
import Gallery_Section from '../../Gallery_Section/Gallery_Section';
import Shopbycategory from '../../Gallery_Section/Shop by category/Shopbycategory';
 import  logo  from '../Firebase/assets/home-made-robot-desk_23-2148863420.jpg'

const Home = () => {
    return (
        <div>
            <div className="" >
            <img   src={logo} alt='' className='w-full mx-auto h-500 '>
            </img>
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  
                   
                </div>
            </div>

            

            
        </div>
      

          

            <h1 className='text-5xl text-orange-600 p-10 text-center font-bold'> Gallery Section</h1>
            <Gallery_Section></Gallery_Section>
            <br></br>
            <h1 className='text-5xl text-orange-600 p-10 text-center font-bold'>SubCategory</h1>
            <Shopbycategory></Shopbycategory>




        </div>

    );
};

export default Home;