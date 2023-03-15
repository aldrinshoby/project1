import React from 'react'
import { Button,TextField } from '@mui/material'
function Login() {
  return (
    <div><h1>aldrin</h1> 
    <input placeholder="username"/> 
    <input type="password" placeholder ="password"/>
    <br/>
    <br/>
    <TextField label='username' variant= "standard"></TextField>
    <Button variant='contained'>Login</Button>
      
    </div>
  )
}

export default Login
