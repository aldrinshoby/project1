import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => { 
  var [fname,setfname]=useState("aldrin")
  const changeName=()=>{
  setfname('mridula')
  }
   return (
    <div>
      <Typography variant='h6'>Welcome {fname}</Typography>
      <Button variant='contained'color="success" onClick={changeName}>change Name</Button> 
      <Button variant='outlined'color="success" >option</Button><br></br>
    </div>
  )
}

export default Statebasic

