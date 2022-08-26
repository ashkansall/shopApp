import LoginForm from "../components/LoginForm";
import LayOut from "../layout/LayOut";

const LogInPage = () => {
    return ( 
        <LayOut>
            <div className="flex items-center justify-center mt-8 mb-8">
                <h2 className="text-lg font-medium border-b-2 border-red-300 p-1 ">Login To Your Account</h2>
            </div>
            <LoginForm />
        </LayOut>
     );
}
 
export default LogInPage;