import { Link } from "react-router-dom";
import { Login } from "./../components/Login/Login";
import './loginPage.css'

const LoginPage = () => {
    return ( 
        <div className="login-container">
          <div className="links-container">
          <Link to="/login">Sign in</Link>
          <Link to="/register">Register</Link>
          </div>
          <Login /> 
        </div>
     );
}
 
export default LoginPage;