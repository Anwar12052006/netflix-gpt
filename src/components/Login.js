
import { useRef, useState } from "react";
import Header from "./Header";
import { checkValideData } from "../utils/validate";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        //Validate the Form data
        // checkValideData(email, password)
        
        console.log(email.current.value);
        console.log(password.current.value);

        const message = checkValideData(name.current.value,email.current.value, password.current.value);
        setErrorMessage(message);

        // sign in / sign up
    };

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
    <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
        ref={email}
         type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800" />
        {!isSignInForm && ( 
        <input
        ref={name}
         type="text"
         placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-800" />)}
        <input
        ref={password} 
        type="Password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800" />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up  Now" : "Already registered? Sign In Now."}
        </p>
    </form>
 </div>
    );  
};
export default Login;