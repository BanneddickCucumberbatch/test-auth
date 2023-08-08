import { SigninForm } from "../SigninForm/SigninForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from '../../store/slices/userSlice'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                history('/')
            })
            .catch((error) => {
                const {err} = error.code
                console.log(err)
            })        
    }
    
    return ( 
        <SigninForm
            title="sign in"
            handleClick={handleLogin}
        />
     );
}
 
export {Login};