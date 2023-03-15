import { Button } from '@mui/material'
import React from 'react'

const counter = () => {
    var [value,variablename]=useState(0);
  
  return (
    <div>
      <Typography>{values}</Typography> 
      <Button variant ='contained' color="success">plus</Button> 
      <Button variant='contained' color="error">minus</Button>
    </div>
  )
}

export default counter
