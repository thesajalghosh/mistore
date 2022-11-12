import React from 'react'
import '../styles/StarProduct.css';

const StarProduct = () => {
  return (
    <div className="mainContainer">
      <div className="leftimg"><img src="https://i02.appmifile.com/389_operator_in/03/11/2022/3a2148271bbafdacbc1108301b5aefd3.jpg?width=612&height=612" alt="left side "/></div>
      <div className="rightimg">
        <div  className="upper">
            <div className="upperleft"><img src="https://i02.appmifile.com/963_operator_in/03/11/2022/6318458aa85664cc34604a000fad1bef.jpg?width=612&height=612" alt="img1"/></div>
            <div className="upperleft"><img src="https://i02.appmifile.com/292_operator_in/03/11/2022/4da1f175194008446d2cedcc70723c59.jpg?width=612&height=612" alt="img2"/></div>
        </div>
        <div className="lower"><img src="https://i02.appmifile.com/865_operator_in/03/11/2022/edadd6e1786c3c4ee608487b74a103c1.jpg?width=612&height=612" alt="img3"/></div>


      </div>
    </div>
  )
}

export default StarProduct
