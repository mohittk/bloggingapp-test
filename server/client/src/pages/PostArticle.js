import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {auth_user} from '../controllers/Users'
import { create_article } from "../controllers/Users";

export default function PostArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  useState(() => {
    if (localStorage.getItem("user_token")) {
      let obj = {
        token: localStorage.getItem("user_token"),
      };
      auth_user(obj).then(() => {});
    }
  });

  const handleChange= async(e) => {
      e.preventDefault();

      let obj = {
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
    </>
  );
}
