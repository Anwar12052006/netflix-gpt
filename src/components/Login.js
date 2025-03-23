
import { useState } from "react";
import Header from "./Header";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return ( 
    <div>
        <Header />
    <div className="absolute">
        <img 
        src="
https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg
" alt="logo"
/>
    </div>
    <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800" />
        {!isSignInForm && ( 
        <input
         type="text"
         placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-800" />)}
        <input type="Password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800" />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up  Now" : "Already registered? Sign In Now."}
        </p>
    </form>
 </div>
    );  
};
export default Login;