import { Link } from "react-router-dom";
import { SignUp } from "../components/SignUp/SignUp";

const RegisterPage = () => {
    return ( 
        <div className="login-container">
          <div className="links-container">
            <Link to="/login">Sign in</Link>
            <Link to="/register">Register</Link>
          </div>
          <SignUp /> 
        </div>
     );
}
 
export default RegisterPage;