import React from 'react'
import "../SignUp/Sign.css"
import Man from "../../assets/Man.jpeg"

import Inputs from "../../Inputs/Input"





const SignUp = () => {
  return (
    <div className='SignUp-Container'>

      <div className='box-container'>

        <div className='image-container'>
        <img src={Man} alt="Image1" className='photo' />
        </div>

        <div className='text-container'>
            <h1>Sign Up</h1>
            <h4>Let’s get you to the moon...</h4>

            {/* <input type="text" placeholder='First Name' /> */}

            <Inputs />
        </div>

      </div>


      
    </div>
  )
}

export default SignUp
