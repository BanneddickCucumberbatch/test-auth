import { Form } from "./Form";
import { EmailAuthCredential, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import {setUser} from './../store/slices/userSlice'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
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
            title="sign in"
            handleClick={handleLogin}
        />
     );
}
 
export {Login};