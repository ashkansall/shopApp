const SearchBar = ({ searchValue, setSearchValue }) => {


    const searchHandler = (e) => {
        const value = e.target.value;

        setSearchValue(value.toLowerCase());
        console.log(value);
    }


    return ( 
        <div className="col-span-6 p-2">
                        <div className="flex items-center">
                            <span className="px-1 mr-5 sm:mr-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="transparent" viewBox="0 0 24 24" stroke="#9CA3AF" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                            <input value={searchValue} onChange={searchHandler} placeholder="Search..." type="text" className="sm:w-full form-input bg-transparent border-0 outline-none focus:ring-0 text-gray-500" />
                        </div>
                    </div>
     );
}
 
export default SearchBar;