import SignUpForm from "../components/SignUpForm";
import LayOut from "../layout/LayOut";

const SignUpPage = () => {
    return ( 
        <LayOut>
            <div className="flex items-center justify-center mt-2 mb-8">
                <h2 className="text-lg font-medium border-b-2 border-red-300 p-1 ">Create new account</h2>
            </div>
            <SignUpForm />
        </LayOut>
     );
}
 
export default SignUpPage;