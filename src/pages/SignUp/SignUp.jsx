import React from 'react'
import SignUpForm from './SignUpForm/SignUpForm'

export default function SignUp() {
  return (
   <div>
     <div className='row'>
      <div className="col-md-3"></div>
      <div className="col-md-6">
      <SignUpForm/>
      {/* 注册表单 */}
      </div>
      <div className="col-md-3"></div>

      

    </div>
   </div>
  )
}
