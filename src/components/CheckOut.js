import { NavLink } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { useCart } from "../providers/Cartprovider";
import productImg from "../assets/images/product.gif";

const CheckOut = () => {

    const auth = useAuth();
    const {cart, total} = useCart();
    console.log(cart);
    console.log(auth);

    if (!cart.length) return (
        <div className="py-2 px-4 container mx-auto max-w-screen-2xl mt-8 font-Rubik">
                        <div className="p-4 rounded-lg border flex flex-col justify-center items-center gap-y-4">
                            <span className="bg-gray-100">
                                <img src={productImg} alt="" className="rounded-lg bg-gray-100 w-16 h-16"/>  
                            </span>
                            <h4>There are no products!</h4>
                            <p className="text-center">You can go to the following page to select products:</p>
                            <NavLink to="/" className="mt-8 border-b-2 border-b-purple-700 font-bold hover:rounded-md p-1 transition-all duration-100">Home</NavLink>
                    </div>
                </div>
    );


    return ( 
        <div className="grid grid-cols-12 gap-x-6 p-2 md:p-0 mt-8 container mx-auto max-w-screen-2xl font-Rubik">
            <div className="md:col-span-6 col-span-12 mb-5 px-4 bg-white shadow-md rounded-lg text-gray-500">
                <p className="mt-3 font-semibold bg-purple-700 p-2 text-white rounded-lg text-center mb-4">User Details</p>
                <p className="py-3">Name : {auth.name}</p>
                <p className="py-3">Email : {auth.email}</p>
                <p className="py-3">phoneNumber : {auth.phoneNumber}</p>
            </div>
            <div className="md:col-span-6 col-span-12 mb-5 px-4 bg-white shadow-md rounded-lg text-gray-500">
                <div className="mb-4">
                    <p className="mt-3 font-semibold bg-red-300 p-2 text-white rounded-lg text-center mb-4">Your Order</p>
                    {cart && cart.map((item) => {
                        return (
                            <div key={item.id} className="p-2">
                                {item.name} * <span className="border-b-2 border-gray-300">{item.quantity}</span> : <span className="font-bold">$ {item.quantity * item.offPrice}</span>
                            </div> 
                        )
                    })}
                </div>
                <hr />
                <div className="px-2 py-3 flex items-center justify-between">
                   <p className="py-1 text-center">Total Price: <span className="font-semibold">${total}</span></p>
                   <button className="p-2 rounded-lg flex items-center justify-between hover:border-0 hover:bg-purple-700 hover:text-white transition-all duration-200">
                        Complete Order
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 15" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" cliprule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default CheckOut;