import React from 'react'
import { useNavigate } from 'react-router';
function TotalPrice() {
  const navigate=useNavigate();
  return (
    <>
    <div className='totalprice'>
      <p>TOTAL PRICE : &#8377; 5000</p>
      <button onClick={()=>navigate('/confirmorder')}>Place Order</button>
    </div>
    </>
  )
}

export default TotalPrice