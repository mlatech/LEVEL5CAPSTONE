import React, {useState} from "react"
import {useNavigate} from 'react-router-dom'; 

export default function Home(){
    const navigate = useNavigate() 
    return(
        <div className="container">
        <h1 className="title">Welcome to Tom Pepper's General Store!</h1>
        <p className="description">
          We are your one-stop shop for all your gardening needs. Whether you're
          a seasoned gardener or just getting started, our store offers a wide
          range of high-quality plants, seeds, and gardening supplies to help you
          create a vibrant and thriving garden.
        </p>
        <button  onClick={()=> navigate ("./plant")} className="button">Explore Our Inventory</button>
      </div>
    );
}