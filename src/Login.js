import React,{useState} from 'react'
import { useDispatch } from "react-redux"
import './Login.css'
//import {login} from './features/userSlice'



function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");
   const [name, setName] = useState("");
   const [profilepic, setProfilepic] = useState("");
    const dispatch = useDispatch();

    // const LoginToApp =(e) => {
    //     e.preventDefault();
    //     auth.signInWithEmailAndPassword(email,password)
    //     .then(userAuth => {
    //         dispatch(login({
    //             email: userAuth.user.email,
    //             uid: userAuth.user.uid,
    //             displayName: userAuth.user.displayName,
    //             photoURL: userAuth.user.photoURL
    //         })
    //         );
    //     })
    //     .catch((error) => alert(error));
    // }
    // const register = () => {
    //     if(!name ) alert("Please enter full name!!")
    //     auth.createUserWithEmailAndPassword(email,password)
    //     .then((userAuth) => {
    //         userAuth.user.updateProfile({
    //             displayName: name,
    //             photoURL: profilepic, 
    //         })
    //     .then( () => {
    //         dispatch(login({
    //             email: userAuth.user.email,
    //             uid: userAuth.user.uid,
    //             displayName: name,
    //             photoURL: profilepic
    //         })
    //         );
    //     });
    // })
    //     .catch(error => alert(error));
  
    // };


    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_LROVks"
            alt=" "/>
    <h1>Make the most of your professional life</h1>
    <br></br>
            <form>
                <input value={name} onChange={e =>setName(e.target.value)}placeholder="Full name (required for if registering)" type="text" />   
                <input value={profilepic} onChange={e =>setProfilepic(e.target.value)}placeholder=" Profile pic url(optional)" type="text" />
                <input value={email} onChange={e =>setEmail(e.target.value)} placeholder=" email" type="email" />
                <input value={password} onChange={e =>setPassword(e.target.value)} placeholder=" password" type="password" />

                <button type="submit" >Sign In</button>
             </form>     
             <p>Not a member?{" "} <span className="login__register" >Register now</span></p>       
        </div>
    )
}

export default Login
