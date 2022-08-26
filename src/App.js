import './App.css';
import HomePage from './pages/HomePage';
import { Routes, Route, } from "react-router-dom";

import CartPage from './pages/CartPage';
import CartProvider from './providers/Cartprovider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckOutPage from './pages/CheckOutPage';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import AuthProvider from './providers/AuthProvider';
import ProfilePage from './pages/ProfilePage';

function App() {
  
  return (
    <AuthProvider>
      <CartProvider>
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </CartProvider>
    </AuthProvider>
       
    
  );
}

export default App;
