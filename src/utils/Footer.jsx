import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MessageIcon from '@mui/icons-material/Message';

const Footer = () => {
  return (
    <Grid container sx={{height:"11rem", width:"100%", backgroundColor:"#070917",pt:"1.2rem",pl:"1rem"}}>
      <Grid container sx={{height:"100%", width:"40%", gap:"1rem",flexDirection:"column",pl:"1rem",pt:"0.2rem"}}>
          <Typography sx={{color:"white",pt:"1rem",fontSize:"16px"}}>STAY CONNECTED</Typography>
          <Stack sx={{flexDirection:"row",gap:"1rem", justifyContent:"flex-start"}}>
            <FacebookIcon sx={{color:"white"}}/>
            <TwitterIcon sx={{color:"white"}}/>
            <InstagramIcon sx={{color:"white"}}/>
            <MessageIcon sx={{color:"white"}}/>
            <WhatsAppIcon sx={{color:"white"}}/>

          </Stack>
          <Typography sx={{color:"white"}}>Copyright c 2010-2021 raffle mania. All rights reserved </Typography>
      </Grid>

      <Grid container sx={{width:"20%", height:"100%",flexDirection:"column",gap:"0.3rem",justifyContent:"center"}}>
          <Typography sx={{color:"white"}}>SHOPPING WITH US</Typography>
          <Typography sx={{color:"white",fontSize:"14px"}}>Making Options</Typography>
          <Typography sx={{color:"white",fontSize:"14px"}}>Delivery Opyions</Typography>
          <Typography sx={{color:"white",fontSize:"14px"}}>Buyer Protection</Typography>
      </Grid>

      <Grid container sx={{width:"20%", height:"100%",flexDirection:"column",gap:"0.3rem",justifyContent:"center"}}>
          <Typography sx={{color:"white"}}>CUSTOMER SERVICE</Typography>
          <Typography sx={{color:"white",fontSize:"14px"}}>Customer Service</Typography>
          <Typography sx={{color:"white",fontSize:"14px"}}>Transaction Service</Typography>
          <Typography sx={{color:"white",fontSize:"14px"}}>Take Our Feedback Service</Typography>
      </Grid>

      <Grid container sx={{width:"20%", height:"100%",flexDirection:"column",gap:"0.3rem",pt:"1.5rem"}}>
          <Typography sx={{color:"white"}}>COLLABRATE WITH US</Typography>
          <Typography sx={{color:"white",fontSize:"14px"}}>Partnership With Us</Typography>
          <Typography sx={{color:"white",fontSize:"14px"}}>Affiliate Programe</Typography>
      </Grid>
    </Grid>
  )
}

export default Footer