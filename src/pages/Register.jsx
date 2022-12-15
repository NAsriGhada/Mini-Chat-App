import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chat App</span>
            <span className='title'>Register</span>
            <form>
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