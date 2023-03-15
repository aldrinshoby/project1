import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Count = () => {
var [value,setvalue]=useState(0)
const add =() =>{
    setvalue(++value)}
    const min=() =>{ 
     setvalue(--value)   
    }    
      
  return (
    <div>
      <Typography>{value}</Typography>
      <Button variant='contained' color='error' onClick={add}>+</Button>
      <Button variant='contained' color='success' onClick={min}>-</Button>
    
    </div>
  )
}

export default Count
