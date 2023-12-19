import React from 'react'
import "./EditProject.css"
import { Attachment, KeyboardAltOutlined } from '@mui/icons-material'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { FaGithub } from "react-icons/fa";
import { IoLogoBehance } from "react-icons/io5";

import { FaSlack } from "react-icons/fa";

import { MdAddToDrive } from "react-icons/md";

import { FaLink } from "react-icons/fa6";

// import { Attachment, } from '@mui/icons-material'/




const EditProfile = () => {
  return (
    // <div >
      
    // </div>


    <div className='main-container'>

      <h1 className='profile-text'> Edit Project</h1>
      <div className='profile-container'>

                  <div className='file-upload'>
                    
                    <div className='box'>

                    <div className='uploadBox'>
                      {/* <Attachment style={{color:'white'}}/> */}
                      <Attachment style={{color:'white'}} />
                      <span className='chooseFile'>Choose FIle</span>
                    </div>

                    <div className='Arrow'><KeyboardArrowDownIcon style={{color:'white'}}/></div>

                   

                    </div>

                    <h4>Max File Size 25kb</h4>
                    

                  </div>

              <div className='detail-container'>

                    <div className='Project-container'>
                          <h2 className='profile-text2'>Project Details</h2>

                          <input type="text" placeholder='Project Name *' style={{ paddingLeft: '15px'  }}  className='input-field'/> <br />
                          <input type="text" placeholder='Project Category'  style={{ paddingLeft: '15px'  }}  className='input-field'/>  <br />
                          <input type="text" placeholder='Roles Needed'   style={{ paddingLeft: '15px'  }} className='input-field'/>  <br />
                          <input type="text" placeholder='Project Stage'   style={{ paddingLeft: '15px'  }} className='input-field'/>  <br />
                          <input type="text" placeholder='Project Summary *'   style={{ paddingLeft: '15px'  }} className='input-field about'/>  
                          <input type="text" placeholder='Project Description *'   style={{ paddingLeft: '15px'  }} className='input-field about'/>  

                          <div className='btn-container'>
                              <button className='save-btn'>Save</button>
                              <button className='submit-btn'>Submit</button>
                          </div>
                    </div>



                    <div className='team-container'>
                        <h2 className='profile-text2'>Team</h2>

                        <input type="text" placeholder='Invite Collaborators' style={{ paddingLeft: '15px'  }}   className='input-field1'/> <br />


                        <div className='btn-container2'>
                            <button className='save-btn-find'>Find Collaborators</button>
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

export default EditProfile





