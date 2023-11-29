import React from 'react'
import "../../components/Verification/Verification.css"
import Image3 from "../../assets/Image3.png"
import { EventBus } from 'primereact/utils'
import Button from '../../Inputs/Buttons/Button'



const Verification = () => {
  return (
    <div className='auth-container'>
      <div  className='verification-container'>
            <div className='Image3-container'>
                <img src={Image3} alt="Image3"  className='Image3'/>
            </div>

            <div className='Code-box'>
                <div className='Text-Container'>
                <div className='Title-text'>Verification Code</div>
                <div className='sub-Text'>Enter the verification code we just <br/> sent you on your email address .</div>
                </div>
               
               
                <div className='btn-recieve'>

                <div className='Input-div'>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                </div>

                     <Button />
                    <div className='recieve-code'>Didn’t receive a code? Resend</div>
                </div>

            </div>
      </div>
    </div>
  )
}

export default Verification
