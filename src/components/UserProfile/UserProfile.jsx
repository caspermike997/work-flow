import React from 'react'
import "../../components/UserProfile/Userprofile.css"
import { Attachment, KeyboardAltOutlined } from '@mui/icons-material'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { FaGithub } from "react-icons/fa";
import { IoLogoBehance } from "react-icons/io5";

import { FaSlack } from "react-icons/fa";

import { MdAddToDrive } from "react-icons/md";

import { FaLink } from "react-icons/fa6";





const UserProfile = () => {
  return (
 

    <div className='main-container'>

      <h1 className='profile-text'>Profile</h1>
      <div className='profile-container'>

                  <div className='file-upload'>
                    
                    <div className='box'>

                    <div className='uploadBox'>
                      <Attachment style={{color:'white'}}/>
                      <span className='chooseFile'>Choose FIle</span>
                    </div>

                    <div className='Arrow'><KeyboardArrowDownIcon style={{color:'white'}}/></div>

                    </div>

                    <h4>Max File Size 25kb</h4>
                    

                  </div>

              <div className='detail-container'>

                    <div className='personal-container'>
                          <h2 className='profile-text2'>Personal Details</h2>

                          <input type="text" placeholder='FirstName*' style={{ paddingLeft: '15px'  }}  className='input-field'/> <br />
                          <input type="text" placeholder='LastName*'  style={{ paddingLeft: '15px'  }}  className='input-field'/>  <br />
                          <input type="text" placeholder='Address'   style={{ paddingLeft: '15px'  }} className='input-field'/>  <br />
                          <input type="text" placeholder='About*'   style={{ paddingLeft: '15px'  }} className='input-field about'/>  

                          <div className='btn-container'>
                              <button className='save-btn'>Save</button>
                              <button className='submit-btn'>Submit</button>
                          </div>
                    </div>



                    <div className='prof-container'>
                        <h2 className='profile-text2'>Professional Details</h2>

                        <input type="text" placeholder='Skills*' style={{ paddingLeft: '15px'  }}   className='input-field1'/> <br />

                        <h2 className='profile-text2'>Portfolio</h2>


                            <div className='inputWrapper'>

                              <FaGithub className='PortfolioIicons'/> 
                              <input type="text" placeholder='GitHub'  style={{ paddingLeft: '55px'  }}  className='input-field1'

                              />
                            </div> <br />

                            <div className='inputWrapper'>

                              <IoLogoBehance  className='PortfolioIicons'/> 
                              <input type="text" placeholder='Behance'  style={{ paddingLeft: '55px' }}  className='input-field1'

                              />
                            </div> <br />

                            <div className='inputWrapper'>

                              <FaSlack className='PortfolioIicons'/> 
                              <input type="text" placeholder='Slack'  style={{ paddingLeft: '55px' }}  className='input-field1'

                              />
                            </div> <br />

                            <div className='inputWrapper'>

                              <MdAddToDrive className='PortfolioIicons'/> 
                              <input type="text" placeholder='Google Drive'  style={{ paddingLeft: '55px' }}  className='input-field1'

                              />
                            </div> <br />

                            <div className='inputWrapper'>

                              <FaLink className='PortfolioIicons'/> 
                              <input type="text" placeholder='Others'  style={{ paddingLeft: '55px' }}  className='input-field1'

                              />
                            </div> 



                        {/* <input type="text" placeholder='Github*'  className='input-field'/>  <br />
                        <input type="text" placeholder='Behance'  className='input-field'/>  <br />
                        <input type="text" placeholder='Google drive'  className='input-field'/>  <br />
                        <input type="text" placeholder='Slack*'  className='input-field'/>  <br />
                        <input type="text" placeholder='Others'  className='input-field'/>  */}

                        <div className='btn-container'>
                            <button className='save-btn'>Save</button>
                            <button className='submit-btn'>Submit</button>
                        </div>
                    </div>




                    <div className='password-container'>
                           <h2 className='profile-text2'>Change Password</h2>

                          <input type="text" placeholder='Old Password*'  style={{ paddingLeft: '15px'  }} className='input-field'/> <br />
                          <input type="text" placeholder='Current Password*' style={{ paddingLeft: '15px'  }} className='input-field'/>  <br />
                          <input type="text" placeholder='New Password *'  style={{ paddingLeft: '15px'  }}  className='input-field'/>  <br />                          

                          <div className='btn-container'>
                              <button className='submit-btn'>Submit</button>
                          </div>
                    </div>

              </div>


      </div>

      <button className='delete-btn'>Delete Account</button>
    </div>
  )
}

export default UserProfile
