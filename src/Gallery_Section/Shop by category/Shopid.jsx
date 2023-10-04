import { useEffect, useState } from "react";
import ShopClick from "./ShopClick";

const Shopid = () => {
    const [shopid,Shopidservice] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/userToyid')
            .then(res => res.json())
            .then(data => Shopidservice(data))
    }, [])
   
    return (
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto ml-20  p-10 my-20'>
          {
            shopid.map(toy=><ShopClick
            key={toy._id}
            toy={toy}>

            </ShopClick>)
          }
        </div>
    );
};

export default Shopid;