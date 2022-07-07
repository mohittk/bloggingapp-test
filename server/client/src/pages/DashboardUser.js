import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { auth_user, get_user_by_id, get_articles } from "../controllers/Users";

export default function DashboardUser() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [articleposted, setArticleposted] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("user_token")) {
      let obj = {
        token: localStorage.getItem("user_token"),
      };
      auth_user(obj).then((data) => {
        if (data) {
          let obj = {
            id: JSON.parse(
              atob(localStorage.getItem("user_token").split(".")[1])
            ).id,
          };
          get_user_by_id(obj).then((data) => {
            setName(data.message.user_name);
            setEmail(data.message.user_email);
          });

          get_articles(obj).then((data) => {
            console.log(data);
            setArticleposted(data.message);
          });
        }
      });
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="profile bg-white shadow-2xl rounded-xl  p-16 ml-10 mr-10 mt-20">
        <div className="profile-details text-left text-2xl w-[25%] rounded border-indigo-600 font-semibold border-2">
          <h1 className="m-2 p-2"> Name : {name}</h1>
          <h1 className="m-2 p-2"> Email Address : {email} </h1>
        </div>

        <div className="response-section">
          <div className="text-3xl font-semibold m-10">
            Articles Posted By You
          </div>

          {articleposted
            ? articleposted.map(article => <div className="rounded flex flex-row" key={article._id}>
            <div className=""> {article.article_title}</div>
            <div className=""> {article.article_description}</div>
            
            </div> )
            : ""}
        </div>
      </div>
    </>
  );
}
