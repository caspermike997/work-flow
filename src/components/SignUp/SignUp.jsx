import React from 'react'
import "../SignUp/Sign.css"
import Man from "../../assets/Man.jpeg"

// import Inputs from "../../Inputs/Input"


// import React from 'react'
// import "../Login/Login.css"
// // import Image from "../../assets/image2"

// import Image from "../../assets/Image2.jpeg"
// // import { Checkbox } from 'primereact/checkbox'
// import Button from '../../Inputs/Buttons/Button'



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
