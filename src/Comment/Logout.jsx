import { useContext } from "react";
import { AuthContext } from "../Shared/Context/AuthProvider";
import { Link } from "react-router-dom";


const Logout = () => {
    const  {user,logOut} = useContext(AuthContext) 
    const handleLogout = () => {
        console.log('click')
        logOut()
          .then(() => {
    
          })
          .catch(err => console.log(err))
      }

    return (
        <div>
            {user?.uid ?
        <>
          
          <li> <button onClick={handleLogout} type="button" className="px-8 py-3 font-semibold rounded-full bg-orange-400">Sign Out</button></li>
  
        </>
        :
        <Link to='/login'>
        <button type="button" className="px-8 py-3 font-semibold rounded-full bg-orange-400">Login</button>
        </Link>
      }
            
        </div>
    );
};

export default Logout;