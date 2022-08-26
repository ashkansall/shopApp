import React, { useEffect, useState } from 'react';

import LayOut from "../layout/LayOut";
import {products} from "../data.js";
import { useCart, useCartActions } from "../providers/Cartprovider";
import checkInCart from "../utils/checkInCart.js";
import { toast } from 'react-toastify';
import SearchBar from '../components/SearchBar';
import SortSection from '../components/SortSection';

const HomePage = () => {
    const {cart} = useCart();
    const dispatch = useCartActions();

    // for searchBar and Sort Section
    const [allProducts, setAllProducts] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchValue, setSearchValue] = useState("");

    const addProductHandler = (product) => {
        toast.success(`${product.name} Added To Cart`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 500,
        });
        dispatch({type: 'ADD_TO_CART', payload: product});

    }
    // sort category
    const categotyHandler = (e) => {
        setSelectedCategory(e.value);
    } 
    // filter category
    const filterByCategory = (filteredData) => {
        // Avoid filter for empty string
        if (!selectedCategory || selectedCategory === "All") {
          return filteredData;
        }
      
        const filteredProdcuts = filteredData.filter(
          (p) => p.category.indexOf(selectedCategory) !== -1
        );
        console.log(filteredProdcuts);
        return filteredProdcuts;
      };

      useEffect(() => {
        let filteredProducts = filterByCategory(products);
        setAllProducts(filteredProducts);
      }, [selectedCategory])

    return ( 
        <LayOut>
            <div className="mt-10 font-Rubik mb-8 sm:border-b-2 container mx-auto max-w-screen-2xl">
                <div className="sm:grid sm:grid-cols-12 flex flex-col mt-5">
                    <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
                    <SortSection selectedCategory={selectedCategory} onChange={categotyHandler}/>
                </div>
            </div>
            <section className="px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 md:grid-rows-[minmax(260px,_1fr)] md:gap-5 sm:gap-2 container mx-auto max-w-screen-2xl font-Rubik">
                {allProducts.filter((product) => product.name.toLowerCase().includes(searchValue)).map((product) => {
  
                    return (
                        <div className="bg-white rounded-xl p-2 shadow-md my-5" key={product.id}>
                                <div className="bg-gray-100 rounded-xl p-2 flex justify-center items-center">
                                    <img className="object-contain w-auto h-36 rounded-xl" src={product.image} alt={product.name}></img> 
                                </div>
                                {/* product title */}
                                <div className="text-slate-800 text-sm font-medium mb-8 sm:text-base mt-5">
                                    <p className="text-gray-500 truncate">{product.name}</p>
                                    <div className="flex items-center justify-between mt-5">
                                        <p className="">Category:</p>
                                        <p className="text-gray-500 border-b-2">{product.category}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-5">
                                        <p className="">Rating:</p>
                                        <p className="text-gray-500 border-b-2 flex items-center justify-start">
                                            {product.rating.rate}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="#FDE047">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </p>
                                    </div>
                                </div>
                                {/* product desc */}
                                <div className="text-sm flex items-center justify-between mb-6 sm:text-base">
                                    <div className="flex items-center justify-between">
                                        <p className="">Price:</p>
                                        <p className="text-purple-700 text-center ml-1 font-semibold">$ {product.price}</p>
                                    </div>
                                    <button onClick={() => addProductHandler(product)}>
                                        <span className="bg-red-300 flex items-center justify-center p-2 rounded-full hover:shadow-lg transition-all duration-150 font-medium text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div className="p-2 flex items-center justify-center">
                                    {checkInCart(cart, product) ? <span className="text-gray-500 font-medium border-b-2 border-red-300 p-1 cursor-pointer">Continue Order</span> : ""}
                                </div>
                        </div>     
                    )
                })}
            </section>
        </LayOut>
     );
}
 
export default HomePage;
