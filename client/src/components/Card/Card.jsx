import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card(props) {

  const navigate = useNavigate();

  function handleReadMore(){
    navigate(`/read/${props.id}`)
  }

  function truncateText(text, length){
    if (text.length <= length){
       return text;
    } else {
      return text.substring(0, length) + "...";
    }
  }

  return (
    <div onClick={handleReadMore} className="card" style={{ width: "18rem" }}>
      <img src={props.img} style={{maxHeight: "240px", minHeight:"210px"}} alt="..." loading='lazy'/>
      <span className={`${props.availability}`}>{props.availability}</span>
      <div className="card-body">
        <div className="card-title">
          <span className="card-span-year px-1 ">{props.year}</span>
          <h4 style={{maxHeight: "70px", height:"70px", display: "flex", alignItems: "center"}}>{props.name}</h4>
        </div>
        <div className="card-title">
          <span className="card-span-spec px-2 py-2">{props.transmission}</span>
          <span className="card-span-spec px-2 py-2">{props.cc}</span>
          <span className="card-span-spec px-2 py-2">{props.mileage}</span>
        </div>
        <div className="card-text">
          <p>{truncateText(props.description, 100)}</p>
          <hr />
          <p className="card-price">KES {props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
