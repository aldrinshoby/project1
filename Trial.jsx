import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Trial = () => { 
    var [pagename,setpagename]=useState("Home page");
    const gallerypage =()=>{ 
        setpagename("Gallery page")
    } 
    var [pagename,setpagename]=useState("Home page");
    const contactpage =()=>{ 
        setpagename("contact page")
    }
  return (
    <div> 
        <Button variant="contained"color="success">option</Button><br></br>
        <Button variant="contained"color="error"onClick={contactpage}>contact</Button><br></br>   
        <Button variant="contained"color="primary"onClick={gallerypage}>gallery</Button> 
        <Typography>welcome to {pagename}</Typography>
    </div>
  )
}

export default Trial
