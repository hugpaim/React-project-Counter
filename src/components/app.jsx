import React from "react";
import { useState } from "react";



export default function  App() {

    const [count, setcount] = useState(0);

    function increase(){
        setcount(count+1)
    };
    function decrease() {
        setcount(count-1)
      }
        
    return(
        <div className="container">
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>

        </div>
    )
  }