import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Articles from '../pages/Articles';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import DashboardUser from '../pages/DashboardUser';
import PostArticle from '../pages/PostArticle';


export default function Router() {
    return(
        <>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/articles" element={<Articles />} />
            <Route exact path="/postarticle" element={<PostArticle />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/user/dashboard" element={<DashboardUser />} />
        </Routes>
        </>
    )
}