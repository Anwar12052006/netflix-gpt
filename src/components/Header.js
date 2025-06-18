import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";



const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () =>{
    
signOut(auth).then(() => {
  dispatch(removeUser());
}).catch((error) => {
  navigate("/error");
});
  };

    useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(
          addUser({
          uid: uid,
           email: email,
            displayName: displayName,
       photoURL: photoURL,
      })
      );
      navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
  <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img 
    className="w-44"
    src={LOGO}
 alto="logo"
    />
    {user && (
    <div className="flex items-center gap-4 py-1 mr-20">
      <img 
      className="w-12 h-12"
      alt="userProfile"
      src={user?.photoURL}
      />
      <button onClick={handleSignOut}className="font-bold text-white flex ">(Sign out)</button>
    </div>
    )}
  </div>
  );
};

export default Header;