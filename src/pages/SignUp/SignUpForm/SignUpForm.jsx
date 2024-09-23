import React, { useState } from 'react'
import './SignUpForm.less'

export default function SignUpForm() {

  // 受控组件，定义好状态
  let [username, setUsername] = useState('');
  // SetUsername修改用户名的方法
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPwd, setConfirmPwd] = useState('');

function onSubmit() {
  // 提交表单，获取元素，发送后台

}

  return (
    <div className='signup'>
      <h2 className='title'>欢迎注册阿里云</h2>
      <form onSubmit={onSubmit}>
      <div className="form-group">
        <input type="text" value = {username} onChange={(e)=>{setUsername(e.target.value)}} className="form-control"  placeholder='请输入用户名'/>
        <small   className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <div className="form-group">
        <input type="email" value={email} className="form-control"  placeholder='请输入邮箱'/>
       
      </div>


      <div className="form-group">
        <input type="password" className="form-control" placeholder='请输入密码'/>
       
      </div>

  

      <div className="form-group">
        <input type="password" className="form-control" placeholder='确认密码'/>
        
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
        
      </div>
  
</form>
    </div>
  )
}
