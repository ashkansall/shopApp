import { useAuth } from "../providers/AuthProvider";

const Profile = () => {
    const auth = useAuth();
    return ( 
        <div className="px-2 md:px-0 font-Rubik">
            <div className="my-5 p-4 bg-white shadow-md rounded-lg text-gray-500 max-w-lg container mx-auto">
                <p className="mt-3 font-semibold bg-purple-700 p-2 text-white rounded-lg text-center mb-4">User Profile</p>
                <p className="py-3">Name : {auth.name}</p>
                <p className="py-3">Email : {auth.email}</p>
                <p className="py-3">phoneNumber : {auth.phoneNumber}</p>
            </div>
        </div>
     );
}
 
export default Profile;