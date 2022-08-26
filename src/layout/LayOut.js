import Navigation from "../components/Navigation";
import Footer from "../pages/Footer";

const LayOut = ({ children }) => {
    return ( 
        <div>
            <Navigation />
            {children}
            <Footer />
        </div>
     );
}
 
export default LayOut;
