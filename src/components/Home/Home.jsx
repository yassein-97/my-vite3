import React from "react";
import Navbar from "../Navbar/Navbar";
import test from '../../assets/images/logo.png'
import demo from '../../assets/images/react.svg'
import done from '../../assets/images/img-5.jpg'



export default function Home() {
  return (
    <>
      <h1>hello from Home</h1>
      <img src={test} alt="" />
      <img src={demo} alt="" />
      <img src={done} alt="" />
     </>
  );
}
