const Input = ({ label, name, formik, type = "text" }) => {
    return ( 
        <div className="min-h-full flex flex-col items-center justify-center text-sm md:text-base p-2 font-Rubik">
            <div className="w-full">
                    <label className="px-1" htmlFor={name}>{label}</label>
                    <input id={name} type={type} name={name} {...formik.getFieldProps(name)} className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:z-10 sm:text-sm mt-2" placeholder={name}/>
                    {formik.errors[name] && formik.touched[name] && (
                        <div className="text-sm mt-1 text-red-500 p-1">{formik.errors[name]}</div>
                    )}
            </div>
        </div>
     );
}
 
export default Input;