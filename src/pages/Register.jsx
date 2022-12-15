import React from 'react'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {  auth } from "../firebase";


const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].value

    try{
      const res = createUserWithEmailAndPassword(auth, email, password)
    }catch(err){
      
    }
    

  // e.target.reset();
}
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chat App</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input type="file" style={{display: "none"}} id='file'/>
                <label htmlFor="file">
                    <i class="fa-solid fa-file-arrow-up"></i>
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Do you have an account? Login</p>
        </div>
    </div>
  )
}

export default Register