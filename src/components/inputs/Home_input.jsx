import React from 'react'
import Addproduct from '../buttons/addproduct/Addproduct'
import Addproductmodal from '../modals/addproductmodal/Addproductmodal'
import './home_input.css'
const Homeinput = ({onchange , placeholder}) => {
  return (
    <div>
      <div className="input-container">
<input type="text" placeholder={placeholder} onChange={onchange} className='homeInp' />
      <Addproductmodal />
      </div>

    </div>
  )
}

export default Homeinput
