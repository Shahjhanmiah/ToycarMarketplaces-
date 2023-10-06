import { useEffect, useState } from "react";
import ShopbyDetails from "./ShopbyDetails";


const Shopbycategory = () => {

     const [toyservice,Toyservice] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/userToy')
            .then(res => res.json())
            .then(data => Toyservice(data))
    }, [])
    const handleshow = () => {
        console.log('click')

    }
    return (
        <div>
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