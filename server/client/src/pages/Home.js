import React from "react";
import Navbar from "../components/Navbar";
import {Link} from 'react'

export default function Home() {
  return (
    <>
     <Navbar />
      <div className="hero-section">
        <div className="home-content font-bold text-6xl text-center p-5 m-5">
          "Hey! welcome to the blogging application by MBA and beyond"
        </div>
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
