import { useEffect, useState } from "react";
import AllToyService from "./AllToyService";

const AllToys = () => {
    const [alltoys, AllToyservice] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/userToyAll')
            .then(res => res.json())
            .then(data => AllToyservice(data))
    }, [])
    return (
        <div>

            <div>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-20 mx-20 mp-10 "data-aos="zoom-in-up"ata-aos-duration="50"'>
                    {
                        alltoys.map(toy => <AllToyService key={toy._id}
                            toy={toy}

                        >


                        </AllToyService>)
                    }

                </div>
            </div>
        </div>
    );
};

export default AllToys;