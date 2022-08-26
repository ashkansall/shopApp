import { Link, NavLink } from "react-router-dom";
import LayOut from "../layout/LayOut";
import { useCart, useCartActions } from "../providers/Cartprovider";

const CartPage = () => {

    const {cart} = useCart();
    const dispatch = useCartActions();

    const incHandler = (cartItem) => {
        dispatch({type: 'ADD_TO_CART', payload: cartItem});
    }
    const decHandler = (cartItem) => {
        dispatch({type: 'REMOVE_PRODUCT', payload: cartItem})
    }

    if (!cart.length) {
        return (
            <LayOut>
                <div className="py-2 px-4 container mx-auto max-w-screen-2xl mt-8 font-Rubik">
                        <div className="p-2 mb-4 relative">
                            <h3 className="font-semibold ">Cart</h3>
                            <div className="w-2 h-2 bg-purple-700 rounded-full absolute top-0 left-1"></div>
                        </div>
                        <div className="p-4 rounded-lg bg-red-300 flex flex-col justify-center items-center gap-y-4">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100px" height="100px">
                                    <path fill="#FDA4AF" d="M87.2,56.7c1.1-2.2,1.8-4.6,1.8-7.2c0-6.6-4.2-12.3-10-14.5c0,0,0,0,0,0c0-11.6-9.4-21-21-21 c-9.8,0-18,6.7-20.3,15.8c-1.5-0.5-3-0.8-4.7-0.8c-7.7,0-14,5.8-14.9,13.3C12.9,43.4,9,48,9,53.5C9,59.9,14.1,65,20.5,65 c0.2,0,0.4,0,0.5,0c0,0.2,0,0.3,0,0.5C21,76.8,30.2,86,41.5,86c6.4,0,12.2-3,15.9-7.6c2.2,2.2,5.2,3.6,8.6,3.6 c4.7,0,8.7-2.7,10.7-6.5c1.1,0.3,2.2,0.5,3.3,0.5c6.1,0,11-4.9,11-11C91,61.7,89.5,58.7,87.2,56.7z"/><path fill="#fdfcef" d="M69,49h-5.8c-2.5,0.8-4.5-1.3-4.5-3.8c0-2.3,1.8-4.2,4.1-4.5c0-0.2-0.1-0.4-0.1-0.5c0-2.5,2-4.5,4.5-4.5 c1.4,0,2.7,0.7,3.5,1.7c0.1-2.6,2.3-4.7,5-4.7c2.8,0,5,2.2,5,5c0,0.4-0.1,0.9-0.2,1.3c0.6-0.8,1.6-1.3,2.7-1.3 c1.8,0,3.2,1.3,3.5,3.1c0.2,0,0.4-0.1,0.5-0.1c2.5,0,4.5,2,4.5,4.5s-2,4.5-4.5,3.8h-9.5H72v1h-3V49z"/><path fill="#472b29" d="M75.5,32c3,0,5.5,2.5,5.5,5.5c0,0,0,0,0,0c0.6-0.4,1.3-0.5,2-0.5c1.8,0,3.4,1.3,3.9,3c0,0,0.1,0,0.1,0 c3.1,0,5.5,2.8,4.9,6c-0.5,2.4-2.7,4-5.1,4H72.1c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h14.7c1.9,0,3.7-1.3,4.1-3.2 c0.5-2.6-1.4-4.8-3.9-4.8c-0.1,0-0.2,0-0.3,0l-0.1,0c0,0,0,0-0.1,0c-0.2,0-0.5-0.2-0.5-0.4c-0.2-1.5-1.5-2.6-3-2.6 c-0.9,0-1.7,0.4-2.3,1.1c-0.1,0.1-0.2,0.2-0.4,0.2c-0.1,0-0.2,0-0.2-0.1c-0.2-0.1-0.3-0.3-0.3-0.6c0.2-0.6,0.2-1.1,0.1-1.5 c-0.2-2.1-2-3.9-4.1-4.1c-2.6-0.2-4.7,1.7-4.9,4.2c0,0.2-0.2,0.4-0.3,0.5c-0.1,0-0.1,0-0.2,0c-0.2,0-0.3-0.1-0.4-0.2 c-0.8-1-1.9-1.5-3.1-1.5c-2.2,0-4,1.8-4,4c0,0.1,0,0.2,0,0.3l0,0.1c0,0.1,0,0.3-0.1,0.4S62.7,41,62.6,41c-2.4,0.2-4,2.4-3.5,4.9 c0.4,1.9,2.2,3.1,4.1,3.1h6c0.3,0,0.5,0.2,0.5,0.5S69.4,50,69.1,50h-5.9c-2.5,0-4.7-1.7-5.1-4.1c-0.5-2.8,1.3-5.2,3.9-5.7 c0,0,0-0.1,0-0.1c0-2.8,2.2-5,5-5c1.2,0,2.3,0.4,3.2,1.2C70.8,33.8,72.9,32,75.5,32L75.5,32z"/><path fill="#472b29" d="M77.3 39.3c1.4 0 2.6 1 2.9 2.3.4-.2.8-.3 1.2-.3 1.2 0 2.2.9 2.4 2.1.2 0 .4-.1.6-.1 1.5 0 2.8 1.2 2.9 2.7 0 .1-.1.3-.2.3 0 0 0 0 0 0-.1 0-.2-.1-.2-.2-.1-1.3-1.2-2.3-2.4-2.3-.2 0-.5 0-.7.1 0 0 0 0-.1 0-.1 0-.1 0-.2-.1-.1 0-.1-.1-.1-.2 0-1-.8-1.9-1.9-1.9-.4 0-.9.2-1.2.5 0 0-.1.1-.2.1 0 0-.1 0-.1 0-.1 0-.1-.1-.2-.2-.1-1.3-1.2-2.3-2.5-2.3-.2 0-.4 0-.7.1 0 0 0 0-.1 0-.1 0-.2-.1-.2-.2 0-.1 0-.3.2-.3C76.7 39.3 77 39.3 77.3 39.3L77.3 39.3zM63.4 40.8c1.3 0 2.5.9 2.9 2.2 0 .1 0 .3-.2.3 0 0 0 0-.1 0-.1 0-.2-.1-.2-.2-.3-1.1-1.3-1.8-2.4-1.8-.1 0-.2 0-.3 0 0 0 0 0 0 0-.1 0-.2-.1-.2-.2 0-.1.1-.3.2-.3C63.1 40.8 63.2 40.8 63.4 40.8L63.4 40.8z"/><path fill="#fff" d="M15.4 51H5.5C5.2 51 5 50.8 5 50.5S5.2 50 5.5 50h9.9c.3 0 .5.2.5.5S15.7 51 15.4 51zM18.5 51h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5S18.8 51 18.5 51zM23.5 53h-9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h9c.3 0 .5.2.5.5S23.8 53 23.5 53zM12.5 53h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5S12.8 53 12.5 53zM9.5 53h-2C7.2 53 7 52.8 7 52.5S7.2 52 7.5 52h2c.3 0 .5.2.5.5S9.8 53 9.5 53zM15.5 55h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5S15.8 55 15.5 55zM18.5 46c-.2 0-.8 0-1 0-.3 0-.5.2-.5.5s.2.5.5.5c.2 0 .8 0 1 0 .3 0 .5-.2.5-.5S18.8 46 18.5 46zM18.5 48c-.2 0-4.8 0-5 0-.3 0-.5.2-.5.5s.2.5.5.5c.2 0 4.8 0 5 0 .3 0 .5-.2.5-.5S18.8 48 18.5 48zM23.5 50c-.2 0-2.8 0-3 0-.3 0-.5.2-.5.5s.2.5.5.5c.2 0 2.8 0 3 0 .3 0 .5-.2.5-.5S23.8 50 23.5 50zM84 66H74c-.3 0-.5-.2-.5-.5S73.7 65 74 65h10c.3 0 .5.2.5.5S84.3 66 84 66zM88 66h-2c-.3 0-.5-.2-.5-.5S85.7 65 86 65h2c.3 0 .5.2.5.5S88.3 66 88 66zM93 68H83c-.3 0-.5-.2-.5-.5S82.7 67 83 67h10c.3 0 .5.2.5.5S93.3 68 93 68zM81 68h-1c-.3 0-.5-.2-.5-.5S79.7 67 80 67h1c.3 0 .5.2.5.5S81.3 68 81 68zM77.9 68H76c-.3 0-.5-.2-.5-.5S75.7 67 76 67h1.9c.3 0 .5.2.5.5S78.2 68 77.9 68zM87 64h-5c-.3 0-.5-.2-.5-.5S81.7 63 82 63h5c.3 0 .5.2.5.5S87.3 64 87 64zM84 70h-2c-.3 0-.5-.2-.5-.5S81.7 69 82 69h2c.3 0 .5.2.5.5S84.3 70 84 70z"/><path fill="#8b8bc1" d="M44.4,73.3c-3.7,0-7.8-2-7.8-6.5V41.9l-2.9-3.4v-3.3c0-4.6,2-6.5,7-6.5h23.7c4.9,0,7,1.9,7,6.5v3.3l-2.9,3.3 v24.9c0,4.5-4.1,6.5-7.9,6.5H44.4z"/><path fill="#472b29" d="M64.3,29.4c5.2,0,6.3,2.2,6.3,5.8v0.2v1v1.9L68,41.2l-0.3,0.4v0.5v24.6c0,4-3.6,5.8-7.2,5.8H44.4 c-3.5,0-7.1-1.8-7.1-5.8V42.2v-0.5L37,41.3l-2.6-3v-2v-1v-0.2c0-3.6,1-5.8,6.3-5.8L64.3,29.4 M64.3,28H40.7C35,28,33,30.5,33,35.2 v0.2v1v2.5l2.9,3.4v24.6c0,4.7,4.1,7.2,8.5,7.2h16.1c4.5,0,8.6-2.5,8.6-7.2V42.2l2.9-3.3v-2.5v-1v-0.2C72,30.5,70.1,28,64.3,28 L64.3,28z"/><g><path fill="#6869ad" d="M47.1,55.4V42.9c0-0.9,0.8-1.6,1.8-1.6l0,0c1,0,1.8,0.7,1.8,1.6v12.2V65c0,0.9-0.8,1.6-1.8,1.6l0,0 c-1,0-1.8-0.7-1.8-1.6V63"/></g><g><path fill="#6869ad" d="M40.2,55.4V42.9c0-0.9,0.8-1.6,1.8-1.6l0,0c1,0,1.8,0.7,1.8,1.6v12.2V65c0,0.9-0.8,1.6-1.8,1.6l0,0 c-1,0-1.8-0.7-1.8-1.6V63"/></g><g><path fill="#6869ad" d="M54.1,55.5V42.9c0-0.9,0.8-1.6,1.8-1.6l0,0c1,0,1.8,0.7,1.8,1.6v12.2v10c0,0.9-0.8,1.6-1.8,1.6l0,0 c-1,0-1.8-0.7-1.8-1.6V63"/></g><g><path fill="#6869ad" d="M61.2,55.5V42.9c0-0.9,0.8-1.6,1.8-1.6l0,0c1,0,1.8,0.7,1.8,1.6v12.2v10c0,0.9-0.8,1.6-1.8,1.6l0,0 c-1,0-1.8-0.7-1.8-1.6V63"/></g><g><path fill="#472b29" d="M63,41.5c0.8,0,1.5,0.5,1.5,1.2v12.5v10.2c0,0.6-0.7,1.2-1.5,1.2s-1.5-0.5-1.5-1.2v-2.1v-7.7V42.7 C61.5,42,62.2,41.5,63,41.5 M63,41c-1.1,0-2,0.8-2,1.7v12.8v7.7v2.1c0,0.9,0.9,1.7,2,1.7s2-0.8,2-1.7V55.2V42.7 C65,41.8,64.1,41,63,41L63,41z"/></g><g><path fill="#472b29" d="M42,67c-1,0-1.8-0.8-1.8-1.9V61c0-0.1,0.1-0.3,0.3-0.3s0.3,0.1,0.3,0.3v4.1c0,0.8,0.6,1.4,1.3,1.4 s1.3-0.6,1.3-1.4V42.9c0-0.8-0.6-1.4-1.3-1.4s-1.3,0.6-1.3,1.4v8c0,0.1-0.1,0.3-0.3,0.3s-0.3-0.1-0.3-0.3v-8c0-1,0.8-1.9,1.8-1.9 s1.8,0.8,1.8,1.9v22.2C43.8,66.2,43,67,42,67z"/></g><g><path fill="#472b29" d="M56,41.5c0.8,0,1.5,0.5,1.5,1.2v12.5v10.2c0,0.6-0.7,1.2-1.5,1.2s-1.5-0.5-1.5-1.2v-2.1v-7.7V42.7 C54.5,42,55.2,41.5,56,41.5 M56,41c-1.1,0-2,0.8-2,1.7v12.8v7.7v2.1c0,0.9,0.9,1.7,2,1.7s2-0.8,2-1.7V55.2V42.7 C58,41.8,57.1,41,56,41L56,41z"/></g><g><path fill="#472b29" d="M49,41.5c0.8,0,1.5,0.5,1.5,1.2v12.5v10.2c0,0.6-0.7,1.2-1.5,1.2s-1.5-0.5-1.5-1.2v-2.1v-7.7V42.7 C47.5,42,48.2,41.5,49,41.5 M49,41c-1.1,0-2,0.8-2,1.7v12.8v7.7v2.1c0,0.9,0.9,1.7,2,1.7s2-0.8,2-1.7V55.2V42.7 C51,41.8,50.1,41,49,41L49,41z"/></g><g><path fill="#472b29" d="M35.6,45.6v6.8h0c-1.2,0-2.2-0.8-2.2-1.7v-3.4C33.4,46.3,34.4,45.6,35.6,45.6L35.6,45.6 M37,44.2h-1.4 c-2,0-3.6,1.4-3.6,3.1v3.4c0,1.7,1.6,3.1,3.6,3.1H37V44.2L37,44.2z"/></g><g><path fill="#472b29" d="M69.4,45.6c1.2,0,2.2,0.8,2.2,1.7v3.4c0,0.9-1,1.7-2.2,1.7h-0.1L69.4,45.6L69.4,45.6 M69.4,44.2h-1.5v9.6h1.5 c2,0,3.6-1.4,3.6-3.1v-3.4C73,45.6,71.4,44.2,69.4,44.2L69.4,44.2z"/></g><g><path fill="#472b29" d="M56.9,25.4c1.1,0,2.1,1.1,2.1,2.5V28H46.7v-0.2c0-1.3,0.9-2.5,2.1-2.5H56.9 M56.9,24h-8.2 c-1.9,0-3.5,1.7-3.5,3.9v1.6h15.1v-1.6C60.3,25.7,58.8,24,56.9,24L56.9,24z"/></g><g><path fill="#472b29" d="M70.5,38.8h-37c-0.1,0-0.3-0.1-0.3-0.3s0.1-0.3,0.3-0.3h37c0.1,0,0.3,0.1,0.3,0.3S70.6,38.8,70.5,38.8z"/></g><g><path fill="#472b29" d="M63.5,32.8h-29c-0.1,0-0.3-0.1-0.3-0.3s0.1-0.3,0.3-0.3h29c0.1,0,0.3,0.1,0.3,0.3S63.6,32.8,63.5,32.8z"/></g><g><path fill="#472b29" d="M67.5,69.8h-30c-0.1,0-0.3-0.1-0.3-0.3s0.1-0.3,0.3-0.3h30c0.1,0,0.3,0.1,0.3,0.3S67.6,69.8,67.5,69.8z"/></g><g><path fill="#472b29" d="M68.5,32.8h-3c-0.1,0-0.3-0.1-0.3-0.3s0.1-0.3,0.3-0.3h3c0.1,0,0.3,0.1,0.3,0.3S68.6,32.8,68.5,32.8z"/></g><g><path fill="#472b29" d="M40.5,58c-0.1,0-0.3-0.1-0.3-0.3v-3.5c0-0.1,0.1-0.3,0.3-0.3s0.3,0.1,0.3,0.3v3.5C40.7,57.9,40.6,58,40.5,58z"/></g><g><path fill="#472b29" d="M71.5,36h-37c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h37c0.3,0,0.5,0.2,0.5,0.5S71.8,36,71.5,36z"/></g><g><path fill="#fdfcef" d="M41.3,70.5c0,0,1.6,0,3.5,0s3.5-1.6,3.5-3.5c0-1.8-1.3-3.2-3.1-3.5c0-0.2,0.1-0.4,0.1-0.5 c0-1.9-1.6-3.5-3.5-3.5c-1,0-2,0.5-2.6,1.2c-0.4-1.8-2-3.2-3.9-3.2c-2.2,0-4,1.8-4,4c0,0.2,0,0.4,0.1,0.6c-0.4-0.3-1-0.6-1.6-0.6 c-1.2,0-2.2,0.9-2.5,2.1c-0.2,0-0.4-0.1-0.5-0.1c-1.9,0-3.5,1.6-3.5,3.5s1.6,3.5,3.5,3.5s7.5,0,7.5,0V71h7V70.5z"/><path fill="#472b29" d="M43 66c-.1 0-.3-.1-.3-.3 0-1.2 1-2.2 2.2-2.2 0 0 .7 0 1.2.1.1 0 .2.2.2.3 0 .1-.2.2-.3.2C45.6 64 45 64 45 64c-.9 0-1.7.8-1.7 1.7C43.3 65.9 43.1 66 43 66zM36.3 70A.5.5 0 1 0 36.3 71 .5.5 0 1 0 36.3 70z"/><path fill="#472b29" d="M44.8,71h-3.5c-0.3,0-0.5-0.2-0.5-0.5S41,70,41.3,70h3.5c1.7,0,3-1.3,3-3c0-1.5-1.1-2.8-2.6-3 c-0.1,0-0.3-0.1-0.3-0.2s-0.1-0.2-0.1-0.4c0-0.2,0-0.3,0-0.5c0-1.7-1.3-3-3-3c-0.8,0-1.6,0.4-2.2,1c-0.1,0.1-0.3,0.2-0.5,0.1 c-0.2,0-0.3-0.2-0.4-0.4c-0.3-1.6-1.8-2.8-3.4-2.8c-1.9,0-3.5,1.6-3.5,3.5c0,0.1,0,0.3,0,0.4c0,0.2-0.1,0.4-0.2,0.5 s-0.4,0.1-0.6,0c-0.4-0.3-0.8-0.4-1.2-0.4c-1,0-1.8,0.7-2,1.6c0,0.3-0.3,0.4-0.6,0.4c-0.2,0-0.3,0-0.5,0c-1.7,0-3,1.3-3,3 s1.3,3,3,3h7.5c0.3,0,0.5,0.2,0.5,0.5S34.5,71,34.3,71h-7.5c-2.2,0-4-1.8-4-4s1.8-4,4-4c0.1,0,0.1,0,0.2,0c0.4-1.2,1.5-2,2.8-2 c0.3,0,0.7,0.1,1,0.2c0.2-2.3,2.1-4.2,4.5-4.2c1.8,0,3.5,1.1,4.2,2.8c0.7-0.5,1.5-0.8,2.3-0.8c2.2,0,4,1.8,4,4c0,0,0,0.1,0,0.1 c1.7,0.4,3,2,3,3.9C48.8,69.2,47,71,44.8,71z"/><path fill="#472b29" d="M39.3,70c-0.2,0-0.8,0-1,0c-0.3,0-0.5,0.2-0.5,0.5S38,71,38.3,71c0.2,0,0.8,0,1,0c0.3,0,0.5-0.2,0.5-0.5 S39.5,70,39.3,70z"/></g>
                                </svg>
                            </span>
                            <h4>Your Cart Is Empty</h4>
                            <p className="text-center">You can go to the following page to see more products:</p>
                            <NavLink to="/" className="mt-8 border-b-2 border-b-purple-600 text-white font-bold hover:rounded-md p-1 transition-all duration-100">Home</NavLink>
                    </div>
                </div>
            </LayOut>
        )
    };

    return ( 
        <LayOut>
            <div className="font-Rubik grid grid-cols-12 mt-8 gap-x-5 px-2 container mx-auto max-w-screen-2xl text-xs sm:text-sm md:text-base gap-y-6">
                <div className="p-2 md:col-span-7 col-span-12 sm:col-span-10 sm:col-start-2 rounded-lg bg-white shadow-md md:mb-6">
                    {cart.map((item) => {
                        return (
                            <div className="flex items-center justify-start gap-x-4 border-b-2 last:border-b-0 py-2" key={item.id}>
                                <div>
                                    <div className="bg-gray-200 rounded-xl p-2 flex justify-center items-center w-36 sm:w-40 mb-3">
                                        <img className="rounded-xl w-full" src={item.image}></img>
                                    </div>
                                </div>
                                <div className="font-medium flex flex-col gap-y-6 p-2">
                                    {item.name}
                                    <div className="font-medium">
                                    category : <span className="text-purple-600 p-1">{item.category}</span>
                                    </div>
                                    <div className="mb-5">
                                        <span className="border-b-2 border-purple-600 p-1">price</span>:
                                        <span className="bg-red-300 p-1 ml-2 rounded-md text-white">$ {item.offPrice * item.quantity}</span>
                                        <span className="p-1 ml-2 line-through text-gray-400">{item.price !== item.offPrice? item.price : ""}</span>
                                    </div>
                                    {/* button add, remove quantity */}
                                    <div className="text-gray-500 flex items-center justify-start">
                                        {item.quantity === 1 ? 
                                            <button onClick={() => decHandler(item)} className="p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                         : 
                                            <button onClick={() => decHandler(item)} className="p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                                                </svg>
                                            </button>
                                         }
                                        <button className="p-1">{item.quantity}</button>
                                        <button onClick={() => incHandler(item)} className="p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div> 
                        )
                        
                    })}
                </div>
                <CartSummery />
            </div>
        </LayOut>
     );
}
 
export default CartPage;

const CartSummery = () => {
    const {total, cart} = useCart();
    const originalTotalPrice = cart.length ? cart.reduce((prevValue, curValue) => prevValue + curValue.quantity * curValue.price , 0) : 0;
    
    return ( 
        <div className="md:col-span-5 col-span-12 h-96 bg-white shadow-md rounded-lg p-2 mb-6 font-Rubik">
            <div className="relative p-2 mb-6">
                <span className="border-b-2 border-purple-600 py-1">Cart Summary</span>
                <div className="w-2 h-2 absolute top-0 left-1 bg-purple-700 rounded-full"></div>
            </div>
            <div className="p-2 flex items-center justify-between">
                Total Price : <span className="rounded-md text-gray-400 p-1 font-bold">$ {originalTotalPrice}</span>
            </div>
            <div className="p-2 flex items-center justify-between border-b-2">
                Discount Price : <span className="rounded-md text-gray-400 p-1 font-bold">$ {originalTotalPrice - total}</span>
            </div>
            <div className="p-2 flex items-center justify-between mb-6">
                Net Price : <span className="border-purple-600 text-purple-600 p-1 font-bold">$ {total}</span>
            </div>
            <div className="text-center">
                <p className="text-sm text-gray-400 p-2 border rounded-lg">The shipping cost is calculated based on the address, delivery time, weight and volume of your shipment</p>
            </div>
            {/* checkout */}
            <div className="p-2 flex justify-center items-center mt-3">
                <Link to='/signup?redirect=/checkout'>
                    <button className="bg-purple-700 p-2 rounded-lg text-white hover:shadow-purple-400 hover:shadow-lg hover:border-0 transition-all duration-100 shado">
                        checkout
                    </button>
                </Link>
            </div>
            
        </div>
     );
}
 