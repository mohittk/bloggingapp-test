import React from 'react';
import Navbar from '../components/Navbar'
import {useState} from 'react'
import { useEffect } from 'react';
import {Link } from 'react-router-dom'
import Container from '../components/Container';
import {auth_user} from '../controllers/Users';
import { get_all_articles } from '../controllers/Users';


 
export default function Articles() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [articles, setArticles] = useState([]);
    
    useEffect(() =>{ 
      if(localStorage.getItem("user_token")){
        let obj = {
          token: localStorage.getItem("user_token"),
        };
        auth_user(obj).then((data)=>{
          if(data){
         
            setIsLoggedIn(true);
            get_all_articles().then((data)=>{
              console.log(data);
              setArticles(data.message);
              
            });
          }
          else{
            setIsLoggedIn(false);
          }
        })

      }
    }, []);
   




return (
    <>
      <div className=" ">
            <Navbar active="articles" />
      </div>
        <>
          <div className="show-jobs-container bg-white shadow-2xl rounded-xl  p-16 ml-10 mr-10 mt-10">
            {articles.map((article) => (
                <Container
                title={article.article_title}
                description={article.article_description}
                image={article.article_image}
                thumbnail={article.article_thumbnail}
                />
              ))
            }
            {/* <Container 
            title="Mohits dev talk"
            description="heyyyyyyyy" /> */}
          </div>
        </>
      ) 
        
      
    </>
  );
      }
