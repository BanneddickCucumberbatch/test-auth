import { useState } from "react";
import "./regForm.css";

const RegForm = ({title, handleClick}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [repeatPass, setRepeatPass] = useState('')

    return ( 
        <div className="form-container">
            <input 
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
            />
            <input 
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
            />
            <input 
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min={12}
                placeholder="Age"
            />
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
                // pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])"
            />
            <input
                type="password"
                value={repeatPass}
                onChange={(e) => setRepeatPass(e.target.value)}
                placeholder="Repeat password"
                required
                minLength={8}
                // pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])"
                onKeyUp={() => handleClick(email, pass, firstName, lastName, age)}
                
            />
            <button
                onClick={() => handleClick(email, pass, firstName, lastName, age)}
                onKeyUp={() => handleClick(email, pass, firstName, lastName, age)}
            >
                {title}
            </button>
        </div>
     );
}

export {RegForm}