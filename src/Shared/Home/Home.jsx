 import Gallery_Section from '../../Gallery_Section/Gallery_Section';
import Shopbycategory from '../../Gallery_Section/Shop by category/Shopbycategory';
import  logo  from '../Firebase/assets/52323.jpg'

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" >
            <img src={logo}></img>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">My Toy Car</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>

            

            
        </div>
        <h1 className='text-5xl text-orange-400  p-10'> Gallery Section</h1>
        <Gallery_Section></Gallery_Section>
        <br></br>
        <h1 className='text-5xl text-orange-400 p-10'>SubCategory</h1>
        <Shopbycategory></Shopbycategory>
        </div>
        
    );
};

export default Home;