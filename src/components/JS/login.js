import React from 'react'

function login() {
  return (
    <div className='loginContainer'>
        <form>
            <label>Email</label>
            <input type='email' placeholder='email'/>
            <label>password</label>
            <input type='password' placeholder='*****'/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default login