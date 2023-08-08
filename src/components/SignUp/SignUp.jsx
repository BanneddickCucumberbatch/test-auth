import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from '../../store/slices/userSlice'
import { RegForm } from "../RegForm/RegForm";

const SignUp = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    
    const handleRegister = (email, password, firstName, lastName, age) => {
        const auth = getAuth();
        const userData = {
            email,
            firstName,
            lastName,
            age
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                    firstName,
                    lastName,
                    age
                }));
                localStorage.setItem(`${email}`, JSON.stringify(userData))
            history('/')
            })
            .catch(console.error)        
    }
            
    return ( 
        <RegForm 
            title="register"
            handleClick={handleRegister}
        />
     );
}
 
export {SignUp};