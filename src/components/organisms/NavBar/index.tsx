
export { default } from './NavBar'
import React from 'react'
import './index.scss'

export default function NavBar() {
  return (
    <div
      style={{
        backgroundColor: 'green',
        width: '17rem',
        height: '100vh',
        color: 'white',
        position: 'fixed',
        zIndex: '1',
        top: '0%',
        left: '0%',
      }}
    >
      NavBar
    </div>
  )
}
