import React from 'react'
import Grid from '@mui/material/Grid';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
  return (
    <Grid container sx={{height: "40%", width:"100%", backgroundColor:"#050A30", paddingTop:"0.7rem", paddingLeft:"0.7rem" , paddingRight:"0.7rem"}}>
      <Grid container sx={{width:"30%"}}>
          <img src="Logo.png" alt="" srcset="" />
      </Grid>
      <Grid container sx={{width:"50%", listStyleType:"none", color:"white", alignItems:"center", justifyContent:"flex-end", gap:"2rem", cursor:"pointer"}}>
          <li>Home</li>
          <li>MyOrder</li>
          <li>Message</li>
          <li>Sign-in</li>
      </Grid>
      <Grid container sx={{color:"white", width:"20%", gap:"2rem", alignItems:"center", justifyContent:"center", cursor:"pointer"}}>
          <NotificationsNoneIcon/>
          <ShoppingCartIcon/>
          <PersonIcon/>
      </Grid>
    </Grid>
  )
}

export default Navbar