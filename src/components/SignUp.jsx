import { Form } from "./Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setUser} from './../store/slices/userSlice'

const SignUp = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }));
                history('/')
            })
            .catch(console.error)        
    }
    return ( 
        <Form
            title="register"
            handleClick={handleRegister}
        />
     );
}
 
export {SignUp};