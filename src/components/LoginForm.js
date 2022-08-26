
import Input from "../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { loginUser } from "../services/loginService.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth, useAuthActions } from "../providers/AuthProvider";
import { useQuery } from "../hooks/useQuery";
import { useEffect } from "react";

const initialValues = {
    email: "",
    password: "",

};
const validationSchema = Yup.object({
    email: Yup.string().email("Please Enter your Email").required('email is required'),
    password: Yup.string().required('Please Enter your password').matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
})

const LoginForm = () => {

    const navigate = useNavigate();
    const setAuth = useAuthActions();

    const query = useQuery();
    const redirect = query.get('redirect') || "/"; //getting the redirect value(cehckout) from query string
    console.log(redirect);

    const auth = useAuth();


    useEffect(() => {
        if (auth) {
            navigate(redirect);
        }
    }, [redirect, auth])

    const onSubmit = async (values) => {
        try {
            const { data } = await loginUser(values);
            if (data) {
                toast.success("login Successful, Redirecting...", {
                    position: "bottom-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    });
               }
               setAuth(data); //whith setAuth the data will be stored in a state and we ca use it further way in the app
               
            //    localStorage.setItem('authState', JSON.stringify(data)); in authProvider
                setTimeout(() => {
                    if (redirect) {
                        navigate(redirect);
                    }else{
                        navigate("/")
                    }
                }, 1000);
        } catch (error) {
            if (error.response && error.response.data.message) {
                toast.error(error.response.data.message, {
                    position: "bottom-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    })
            }
        }
    }


    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
        
    });

    return ( 
        <div className="max-w-md px-1 mx-auto font-Rubik">
            <form onSubmit={formik.handleSubmit} className="bg-white p-2 rounded-md shadow-md ">
            <Input name="email" label="Email" formik={formik}/>
            <Input name="password" label="password" type="password" formik={formik}/>
            <button 
                type="Submit"
                className="p-2 bg-purple-700 text-white w-full rounded-lg mt-5">
                Login
            </button>
            <span className="flex items-center justify-start p-4">
                Dont have an account?
                <Link to={`/signup?redirect=${redirect}`}>
                    <span className="ml-5 border-b-2 border-red-300 p-1 text-purple-800">SignUp</span>
                </Link>
            </span>
        </form>
        </div>
     );
}
 
export default LoginForm;