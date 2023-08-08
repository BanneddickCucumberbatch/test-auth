import { Navigate } from "react-router-dom";
import {useAuth} from './../hooks/use-auth'
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";

const ProfileInfo = () => {
     const dispatch = useDispatch();
     const {isAuth, email} = useAuth();
     const userData = JSON.parse(localStorage.getItem(email))
     return isAuth ? (
          <div>
               <h1>Profile info</h1>
               <p>Email: {userData.email}</p>
               <p>Age: {userData.age}</p>
               <p>First Name: {userData.firstName}</p>
               <p>Last Name: {userData.lastName}</p>
               <button
                    onClick={() => dispatch(removeUser())}    
               >Log out from {email}</button>
          </div>
          
     ) : (
          <Navigate to="/login" />
     )
     
}
 
export default ProfileInfo;