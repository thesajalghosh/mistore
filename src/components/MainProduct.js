import React from 'react';
import ProdutReview from './ProdutReview';
import "../styles/MainProduct.css"

const MainProduct = () => {
  return (
    <div className="mainContainer">
      
      <ProdutReview img="https://i02.appmifile.com/259_operator_in/04/02/2022/f76f28e3d4f5b1fce78d461e12e00bc7.jpg?width=606&height=252" head="All About Performance!" para1="Redmi Note 11T 5G" para2="₹ 16,999"/>
      <ProdutReview img="https://i02.appmifile.com/149_operator_in/04/02/2022/7f9762559b5d78130b310719d37daaea.jpg?width=606&height=252" head="Your Home-Guard with High Resolution!" para1=" Mi Home Security Camera 2k Pro" para2="₹ 4,499"/>
    </div>
  )
}

export default MainProduct
