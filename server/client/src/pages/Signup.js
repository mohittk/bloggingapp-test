import React from "react";
import Navbar from "../components/Navbar";
import { signup_user } from "../controllers/Users";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

export default function Signup(){

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleChange = async(e) => {
        e.preventDefault();

        let obj = {
            user_name : name,
            user_email : email,
            user_password : password
        };
        signup_user(obj).then((data) => alert(data.message));

        setEmail("");
        setName("");
        setPassword("");
        navigate('/login');

    }

    // const onClickHandler = () => {
    //     handleChange();
       
    // }
    return(
        <>
        <Navbar />
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Name"
                        value={name}
                        onChange={(e)=> { setName(e.target.value)}} />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e)=> { setEmail(e.target.value)}}/>

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=> { setPassword(e.target.value)}} />

                    <button
                        type="submit"
                        className="w-full text-center py-3 bg-green-400 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
                        onClick={handleChange}
                    >Create Account</button>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <button className="no-underline border-b border-blue text-blue" href="../login/"
                    type="submit" onClick={()=> { navigate('/login');}}>
                        Log in
                    </button>.
                </div>
            </div>
        </div>
        </>
    )

}