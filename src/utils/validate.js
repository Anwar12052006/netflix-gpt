
export const checkValideData = (email, password) =>{
const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

if(!isEmailValid) return "Email ID is not valid";
if(!isValidPassword) return "password is not valid";

return null;

};