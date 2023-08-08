import { useState } from "react";
import "./signinForm.css";

const SigninForm = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setpasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('E-mail field must be filled');
    const [passwordError, setPasswordError] = useState('Password field must be filled');

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email': 
            setEmailDirty(true)
            break
            case 'password': 
            setpasswordDirty(true)
            break
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Email is uncorrect')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPass(e.target.value)
    }

    // const onEnter = (e) => {
    //     if (e.key === "Enter") {
    //       handleClick(email, pass);
    //     }
    // }
    return ( 
        <div className="form-container">
            {(emailDirty && emailError) && <div style={{color: "red"}}>{emailError}</div>}
            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => emailHandler(e.target.value)} 
                onBlur={(e) => blurHandler(e)}
                placeholder="E-mail"
                required
                // onInvalid={}
            />
            <input
                type="password"
                name="password"
                value={pass}
                onChange={(e) => passwordHandler(e.target.value)}
                onBlur={(e) => blurHandler(e)}
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