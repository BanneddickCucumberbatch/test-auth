import { useState } from "react";
import "./signinForm.css";

const SigninForm = ({title, handleClick}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    return ( 
        <div className="form-container">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="E-mail"
                required
            />
            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Password"
                required
                minLength={8}
                pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])"
            />
            <button
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </button>
        </div>
     );
}
 
export {SigninForm};