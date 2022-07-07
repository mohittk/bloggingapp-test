import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import {auth_user} from '../controllers/Users'
import { create_article } from "../controllers/Users";
import { useNavigate } from "react-router-dom";

export default function PostArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user_token")) {
      let obj = {
        token: localStorage.getItem("user_token"),
      };
      auth_user(obj).then((data) => {
        if(data){
          
          setIsLoggedIn(true);
        }
        else{
          setIsLoggedIn(false)
        }
      });
    }
  }, []);

  const handleChange= async(e) => {

      e.preventDefault();

      let obj = {
        article_id: JSON.parse(
          atob(localStorage.getItem("user_token").split(".")[1])
        ).id,
          article_title: title,
          article_description: description,
          article_image: image,
          article_thumbnail: thumbnail
      }

      create_article(obj).then((data)=> {
          console.log(data);
          alert(data.message);
          window.location.reload();
      })
  }
  return (
    <>
      <Navbar />

      {isLoggedIn ? ( 
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Post An Article</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="image URL"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="thumbnail URL"
              value={thumbnail}
              onChange={(e) => {
                setThumbnail(e.target.value);
              }}
            />

            <button
              type="submit"
              className="w-full text-center py-3 bg-green-400 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
              onClick={handleChange}
            >
              Publish Article
            </button>
          </div>
        </div>
      </div>
      ): ('')}

       <div className="hero-section flex flex-col">
        <div className="home-content font-bold text-6xl text-center p-5 m-5">
        Want to Post an Article? Sign In Now
        </div>
        <button className="bg-red-500 p-2 w-[20%]" onClick={()=> navigate('/login')}>Sign In</button>
        <div className="font-semibold text-3xl text-center text-gray-700 p-10 m-10">
          Veniam amet minim Lorem laboris sit. Id reprehenderit eiusmod nulla
          qui cillum reprehenderit veniam ex cupidatat cillum. Qui in culpa
          Lorem sit commodo. Exercitation esse elit duis mollit ullamco ex amet
          cupidatat. Nisi eiusmod anim sint ullamco nulla. Ipsum et velit labore
          cillum labore aute. Et duis nostrud id cillum elit tempor adipisicing
          exercitation labore ad enim reprehenderit occaecat esse.
        </div>
      </div>
    </>
  );
}
