
import { useState, useRef } from "react";
import Header from "./Header";
import { checkValideData } from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();


    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        //Validate the Form data
        // checkValideData(email, password)
        
        // console.log(email.current.value);
        // console.log(password.current.value);

        const message = checkValideData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message)return;
// create a new user, sign in/ sign up
        if(!isSignInForm){
            // Sign Up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              const user = userCredential.user;
              updateProfile(user, {
                displayName: name.current.value, photoURL:  USER_AVATAR,
                // "https://media.licdn.com/dms/image/v2/D5635AQEWQLXo2uLMEQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1728484025530?e=1743472800&v=beta&t=CC-iJrcIzxWzwi7OU1eO2ehZp5aTSDXtDJRxnr861Q8"
              }).then(() => {
                  const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
              }).catch((error) => {
                    setErrorMessage(error.message);
              });
            
            console.log(user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage)
            });

        }else{
             // Sign in logic
             signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + " " + errorMessage);
  });
        }
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
        {!isSignInForm && ( 
        <input
        ref={name}
         type="text"
         placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-800" />)}
        <input
        ref={email}
         type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800" />
        
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