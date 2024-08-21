import React from 'react'
import { useNavigate } from 'react-router-dom'

function BillBoard() {
    const navigate = useNavigate();

  return (
    <div className='billboard'>
        <div className='billboard-display font2'>
        <h2>Meet</h2>
        <h2 style={{color: "#4FD1C5", marginBottom: "30px"}}>The team</h2>
        <p style={{paddingLeft: "50px", paddingRight: "50px", color:"#718096", fontSize:"0.8rem"}}>MotoGuru Ke is a global sourcing and shipping Company domiciled in
             Nairobi, Kenya. We export and ship new & used vehicles, brand-new & used 
             spare parts, industrial equipment and electronics from our primary source markets in Europe, Middle east and the Orient.</p>
        <button onClick={()=> navigate("/#features")} className='billboard-display-button-1' style={{"border": "none", backgroundColor: "black", color: "white", height:"45px", width: "100px", marginBottom: "10px"}}>Get Started</button>
        <p  className='billboard-display-button-2' style={{color: "#3182CE"}}>Contact us</p>
        </div>
    </div>
  )
}

export default BillBoard