import React from 'react'
import Header from '../components/Header/Header'

export default function Layout(props) {
  return (
    (
      <div>
       <Header/>
  
        {/* 路由出口 */}
        <div>
          {props.children}
        </div>
      </div>
    )
  )
}
