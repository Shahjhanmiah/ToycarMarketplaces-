import Swal from 'sweetalert2'
           
         const AddAToy = () => {

        const handleAddToy = event => {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const quantity = form.quantity.value;
            const seller = form.seller.value;
            const email = form.email.value;
            const price = form.price.value;
            const rating = form.rating.value;
            const photo = form.photo.value;
            const description = form.description.value
            const newToy = { name, quantity, seller, email,price, rating, photo,description }
            console.log(newToy);
    
            fetch('https://toy-car-server.onrender.com/postadd',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newToy)
            })
            .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.insertedId){
                        Swal.fire({
                            title: 'Success!',
                            text: ' AddToy Added Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                    }
                })
        
            }
        
    
    return (
        <div>
            <div>
            <div className="bg-[#F4F3F0] p-24">
                <h2 className="text-3xl font-extrabold">Add a Toy</h2>
                <form onSubmit={handleAddToy}>
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="seller" placeholder="Seller Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="email" placeholder=" Seller Email" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Photo url row */}
                    <div className=" md:flex mb-8 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Detail description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Detail description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add  A Toy" className="btn btn-block bg-#F4F3F0" />

                </form>
            </div>




        </div>
        </div>
    );
};

export default AddAToy;