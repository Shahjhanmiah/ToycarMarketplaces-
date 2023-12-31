
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon, } from '@heroicons/react/24/solid'
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/AuthProvider';
// import useLocalStorage from 'use-local-storage'
const Nav = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        console.log('click')
        logOut()
            .then(() => {

            })
            .catch(err => console.log(err))
    }

    // toggle 

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
      }, [theme])
    
      const handletogle = (e) => {
        if (e.target.checked) {
          setTheme('dark')
        }
        else {
          setTheme('light')
        }
    
      }



    let Links = [


        { name: "HOME", link: "/" },
        { name: "SERVICE", link: "/" },
        { name: "AllToys", link: "/alltoys" },
        { name: "MyToys", link: '/mytoys' },
        { name: "AddAToy", link: '/addaToys' },






    ];

    let [open, setOpen] = useState(false);


    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <BookOpenIcon className='w-7 h-7 text-blue-600' />
                    <span>ToyCar MarketPlace</span>
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                {/* linke items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link.name}>
                                <Link to={`${link.link}`} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</Link>

                            </li>))
                    }
                    <Link to="/profile">
                        {user?.photoURL ?
                            <img style={{ height: '45px' }} className=' rounded-full mx-2' src={user?.photoURL}></img>
                            : <div></div>
                        }
                    </Link>

                    {user?.uid ?
                        <>


                            <li className='font-semibold'>
                                <button onClick={handleLogout} className="px-8 py-3 font-semibold rounded-full bg-blue-600 text-white font-semibold">Sign Out</button>
                            </li>
                        </>
                        :
                        <Link to='/login'>
                            <button type="button" className="px-8 py-3 font-semibold rounded-full bg-blue-600 text-white font-semibold">Login</button>
                        </Link>
                    }

                </ul>

                <input  onChange={handletogle}
            checked={theme === "light" ? false : true} type="checkbox" className="toggle toggle-accent" />

            </div>
        </div>
    )
}


export default Nav;