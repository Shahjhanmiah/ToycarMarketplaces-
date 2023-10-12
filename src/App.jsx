import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const App = ({ post, postadd, setPostadd }) => {
    const { name, quantity, seller, email, price, rating, photo, description, _id } = post
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://toy-car-server.onrender.com/postadd/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = postadd.filter(cof => cof._id !== _id);
                            setPostadd(remaining);
                        }
                    })

            }
        })
    }
    return (
        <div>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex space-x-4">
                    <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold text-xl font-semibold text-blue-600">Name:{name}</a>
                        <span className="text-xs dark:text-gray-400 text-xl font-semibold text-blue-600">quantity:{quantity}</span>
                    </div>
                </div>
                <div>
                    <img src={photo} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold text-blue-600">Seller:{seller}</h2>
                    <p className="text-sm dark:text-gray-400 text-xl font-semibold text-blue-600">Email:{email}</p>
                    <p className="text-sm dark:text-gray-400 text-xl font-semibold text-blue-600">Pice:{price}</p>
                    <p className="text-sm dark:text-gray-400 text-xl font-semibold text-blue-600">Rating:{rating}</p>
                    <p className="text-sm dark:text-gray-400  font-semibold text-blue-600">description:{description}</p>

                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="space-x-2">
                        <button aria-label="Share this post" type="button" className="p-2 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                            </svg>
                        </button>
                        <button aria-label="Bookmark this post" type="button" className="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex space-x-2 text-sm dark:text-gray-400">

                        <div className="card-actions flex-row-reverse justify-end">
                            <div className="btn-group btn-group-vertical space-y-4">
                                <button className="btn">View</button>
                                <Link to={`/updateToy/${_id}`}>
                                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-blue-600 text-white text-1xl font-bold ">Edite</button>

                                </Link>

                                <button
                                    onClick={() => handleDelete(_id)}
                                    className="btn bg-blue-700 text-white">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;