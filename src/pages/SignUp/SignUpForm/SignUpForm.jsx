import React, { useState } from 'react'
import './SignUpForm.less'
import api from '../../../api'
import classnames from 'classnames'

export default function SignUpForm() {

  // 受控组件，定义好状态
  let [username, setUsername] = useState('');
  // SetUsername修改用户名的方法
  let [email, setEmail] = useState('xxxx@3sbio.com');
  let [password, setPassword] = useState('');
  let [confirmPwd, setConfirmPwd] = useState('');
  let [errors, setErrors] = useState({});

function onSubmit(e) {
  // 提交表单，获取元素，发送后台
  e.preventDefault();
  console.log(username, email, password,  confirmPwd);
  api.toRegister({
    username,
    email,
    password,
    confirmPwd}).then(res=>{console.log(res.data);
      if (res.data.status===200) {
        alert("注册成功！")
      }

      if(res.data.status===401) {
        alert("注册失败！")
      }

      if(res.data.status===400) {
        alert("输入信息不合法，验证失败！")
        log(res.data.errors);
        setErrors(res.data.errors)
      }


    }).catch(err=>{
      console.log(err);
      
    })
}

  return (
    <div className='signup'>
      <h2 className='title'>欢迎注册阿里云</h2>
      <form onSubmit={onSubmit}>
      <div className="form-group">
        <input type="text" value = {username} onChange={(e)=>{setUsername(e.target.value)}} 
        
        
        className={classnames('form-control',{'is-invalid':errors.username})}
       
        
        placeholder='请输入用户名'/>
        <small   className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <div className="form-group">
        <input type="email" value={email} 
        onChange={(e)=>{setEmail(e.target.value)}}
        className={classnames('form-control', {'is-invalid':errors.email})}  placeholder='请输入邮箱'/>
       
      </div>


      <div className="form-group">
        <input type="password" value={password} 
        onChange={(e)=>{setPassword(e.target.value)}}
        className="form-control" placeholder='请输入密码'/>
       
      </div>

  

      <div className="form-group">
        <input type="password" 
        value = {confirmPwd}
        onChange={(e)=>{setConfirmPwd(e.target.value)}}
        
        className="form-control" placeholder='确认密码'/>
        
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
        
      </div>
  
</form>
    </div>
  )
}
