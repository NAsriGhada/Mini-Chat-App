import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className="user">
        <img src="https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg" alt="" />
        <span>Ghada</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar