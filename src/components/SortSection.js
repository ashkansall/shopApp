
import Select from 'react-select';


  const categoryOptions = [
      { value: "All", label: "All" },
      { value: "men's clothing", label: "men's clothing" },
      { value: "jewelery", label: "jewelery" },
      { value: "electronics", label: "electronics" },
      { value: "women's clothing", label: "women's clothing" },
];

  const colourStyles = {
      control: (styles) => ({ ...styles, backgroundColor: "transparent", border: "none", focus: "none", boxShadow: "0"}),
      option: (styles, { isDisabled }) => {
        return {
          ...styles,
          backgroundColor: isDisabled ? "" : "white",
          color: "#9CA3AF",
          cursor: isDisabled ? "not-allowed" : "pointer",
        };
      },
      singleValue: (provided) => ({
          ...provided,
          color: "#6B7280",
          
      }),
      
      
}


const SortSection = ({ selectedCategory, onChange }) => {


    return ( 
        <div className="col-span-6 p-2">
            <div className="flex items-center justify-start sm:justify-center">
                    <span className="px-1 mr-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#9CA3AF">
                            <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
                        </svg>
                    </span>
                    <Select 
                    isSearchable={true} 
                    placeholder="Select a category" 
                    value={selectedCategory} 
                    onChange={onChange} 
                    options={categoryOptions} 
                    styles={colourStyles} />
                </div>
        </div>
     );
}
 
export default SortSection;

// 
// 