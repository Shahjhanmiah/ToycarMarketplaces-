import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import App from "../../../App";
import { Helmet } from "react-helmet";

const MyToys = () => {
    const loadedPostadd = useLoaderData();
    const [postadd, setPostadd] = useState(loadedPostadd);
    return (
        <div>
            <Helmet><title>Toy|| MyToy</title></Helmet>
            <div>
                <div className='m-20'>
                   
                    <div>
                       <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-20 mx-20 mp-10'>
                        
                            {
                                postadd.map(post => <App
                                  key={post._id}
                                  post={post}
                                  postadd={postadd}
                                  setPostadd={setPostadd}
                                ></App>)
                              }
                        
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyToys;