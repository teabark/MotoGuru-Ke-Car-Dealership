import React from "react"
import { useNavigate } from "react-router-dom";

export default function Nav(){

    const navigate = useNavigate();

    function handleClick(path){
        navigate(`/${path}`)
    }

    return (        
    <div className="primary-nav">
       <div onClick={()=>handleClick("")} className="nav">Home</div>
       <div onClick={()=>handleClick("about")} className="nav">About</div>
       <div onClick={()=>handleClick("contacts")} className="nav">Contact</div>
    </div>);
}