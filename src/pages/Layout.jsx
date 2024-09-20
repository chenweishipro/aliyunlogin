import React from 'react'

export default function Layout(props) {
  return (
    (
      <div>
        <h2>头部</h2>
  
        {/* 路由出口 */}
        <div>
          {props.children}
        </div>
      </div>
    )
  )
}
