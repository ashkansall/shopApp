import { NavLink } from "react-router-dom";
import { useCart } from "../providers/Cartprovider";
import { useAuth } from "../providers/AuthProvider";

const Navigation = () => {

    const { cart } = useCart();
    const userData = useAuth(); // data obj
    // console.log(userData);

    let activeStyle = {
        backgroundColor: "#7E22CE",
        color: "#fff"
    };

    return ( 
        <div className="container max-w-screen-2xl mx-auto sticky top-0 z-20 font-Rubik">
            <header className="text-sm sm:text-base">
                <nav className="bg-white flex items-center justify-between p-4 shadow-md">
                        <ul className="flex items-center justify-center gap-x-5 sm:gap-x-8 text-slate-800 font-medium">
                            <li>
                                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/" className="block px-4 py-2 hover:bg-purple-700 hover:text-white transition-all duration-100 rounded">Home</NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/cart" className="block px-4 py-2 hover:bg-purple-700 hover:text-white transition-all duration-100 rounded">Cart</NavLink>
                            </li>
                            <li className="relative">
                                <span className="relative">
                                    <svg className="w-7 h-7" fill="#9333ea" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z">
                                        </path>
                                    </svg>
                                </span>
                            {cart.length ? <span className="w-6 h-6 rounded-full bg-red-300 absolute -top-4 -left-2 flex items-center justify-center text-white">{cart.length}</span> : null}
                            </li>
                            <li className="hidden sm:block">
                                <NavLink style={userData ? null : ({ isActive }) => isActive ? activeStyle : undefined} to={userData ? "/profile" : "/signup"} className="block px-4 py-2 hover:bg-purple-700 hover:text-white transition-all duration-100 rounded">
                                    {userData ? <p className="">{userData.name}</p> : "Account"}
                                </NavLink>
                            </li>
                        </ul>

                    {/* <div className="p-2 w-24">
                        <img src={logo} className="w-full" alt="Logo" />
                    </div> */}
                </nav>
            </header>
        </div>
     );
}
 
export default Navigation;




// button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none " aria-controls="navbar-default" aria-expanded="false">
//                             <span>hi</span>
//                             <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                 <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd">
//                                 </path>
//                             </svg>
//                         </button>