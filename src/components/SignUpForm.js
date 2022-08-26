import Input from "../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useLocation } from "react-router-dom";
import {signupUser} from "../services/signupService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth, useAuthActions } from "../providers/AuthProvider";
import { useQuery } from "../hooks/useQuery";
import { useEffect } from "react";


const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: ""
};

const validationSchema = Yup.object({
    name: Yup.string().required("Please Enter a username").min(6, "Name length must be at least 6 characters"),
    email: Yup.string().email("Please Enter your Email").required('email is required'),
    password: Yup.string().required('Please Enter your password').matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    passwordConfirm: Yup.string().required('password confirmation is required').oneOf([Yup.ref('password'), null], "Passwords must match"),
    phoneNumber: Yup.string().required('phonenumber is required').matches(/^[0-9]{11}$/, "invalid format"),
    // terms: Yup.boolean().required("the terms and condition must be accepted").oneOf([true], "You must accept the pricing policy terms and conditions"),
})
const SignUpForm = () => {

    const navigate = useNavigate();
    const setAuth = useAuthActions()

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
        const { name, email, password, phoneNumber } = values;
        const userData = {
            name,
            email,
            password,
            phoneNumber
        };
        try {
           const {data} = await signupUser(userData);
           if (data) {
            toast.success("Account created, Redirecting...", {
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
           
            // localStorage.setItem('authState', JSON.stringify(data)); in authprovider
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
        <div className="max-w-md mx-auto px-1 font-Rubik">
            <form onSubmit={formik.handleSubmit} className="bg-white p-2 rounded-md shadow-md">
            <Input name="name" label="Name" formik={formik}/>
            <Input name="email" label="Email" formik={formik}/>
            <Input name="phoneNumber" label="PhoneNumber" formik={formik} type="tel"/>
            <Input name="password" label="password" type="password" formik={formik}/>
            <Input name="passwordConfirm" label="passwordConfirm" type="password" formik={formik}/>
            <button 
                
                type="Submit"
                className="p-2 bg-purple-700 text-white w-full rounded-lg mt-5">
                Submit
            </button>
            <span className="flex items-center justify-start p-4">
                Already have an account?
                <Link to={`/login?redirect=${redirect}`}>
                    <span className="ml-5 border-b-2 border-red-300 p-1 text-purple-800">Login</span>
                </Link>
            </span>
            </form>
        </div>
     );
}
 
export default SignUpForm;