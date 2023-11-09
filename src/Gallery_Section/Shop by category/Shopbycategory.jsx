import { useEffect, useState } from "react";
import ShopbyDetails from "./ShopbyDetails";
import { Helmet } from "react-helmet";


const Shopbycategory = () => {

     const [toyservice,Toyservice] = useState([])
    
    useEffect(() => {
        fetch('https://toy-car-server.onrender.com/userToy')
            .then(res => res.json())
            .then(data => Toyservice(data))
    }, [])
    const handleshow = () => {
        console.log('click')

    }
    return (
        <div>
            <Helmet><title>Toy||ShopbyCategory</title></Helmet>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto ml-20  data-aos="slide-up" '>
           {
            toyservice.map(toy=> <ShopbyDetails key={toy._id}
            toy={toy}
            handleshow={handleshow}
            >
            

            </ShopbyDetails>)
           }
           
        </div>
        </div>
    );
};

export default Shopbycategory;