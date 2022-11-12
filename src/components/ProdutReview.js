import React from 'react';
import "../styles/ProdutReview.css";

const ProdutReview = (props) => {
  return (
      <>
    <div className="bothimg">
      <img src={props.img} alt="ing"/>
      <h3 className="head">{props.head}</h3>
      <div className="secondline">
        <p>{props.para1}</p>
        <p>{props.para2}</p>
      </div>
    </div>
    </>
  )
}

export default ProdutReview
