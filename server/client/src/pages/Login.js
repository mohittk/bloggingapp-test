import React from "react";
import Navbar from "../components/Navbar";
import { login_user } from "../controllers/Users";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login_handleChange = async (e) => {
    e.preventDefault();

    let obj = {
      user_email: email,
      user_password: password,
    };
    login_user(obj).then((data) => {
        localStorage.setItem("user_token", data.token);
      alert(data.message);
      window.location.reload();
    });
  };

  return (
    <>
      <Navbar />
      <section className="flex justify-center items-center h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white rounded p-6 space-y-4">
          <div className="mb-4">
            <p className="text-gray-600 text-center">Sign In</p>
          </div>
          <div>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
            type="submit"
            onClick={login_handleChange}>
              Sign In
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <button className="text-sm text-blue-600 hover:underline"
              type="submit"
              onClick={() => {
                  navigate('/login');
              }}>
                Create Account
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
