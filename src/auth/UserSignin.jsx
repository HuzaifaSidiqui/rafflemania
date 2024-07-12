import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';

const userSignin = () => {
  return (
    <Grid container sx={{ width:"100%", height:"100vh", backgroundColor:"#050A30"}}>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 2 }}>
        <img src="introImg.png" alt="Intro" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
      </Grid>
        <Grid container sx={{ width:"45%", flexDirection:"column"}}>  
            <Grid container sx={{flexDirection:"column", width:"60%", gap:"1rem",pt:"5rem", pl:"7rem"}}>
                <Typography variant='h5' color={'white'}  >RAFFLE MANIA</Typography>
                <Typography variant='h7' color={'white'} >Welcome To Raffle Mania One Place To Shop Everything</Typography>
                <TextField
                    id="input-with-icon-textfield"
                     label="Username" 
                    InputProps={{
                    endAdornment: (
                    <InputAdornment position="end" >
                    <AccountCircle sx={{color:"white"}}/>
                    </InputAdornment>
                     ),
                     sx: {
                        '& .MuiInputBase-input': {
                          color: 'white',
                        },
                        '& .MuiInputLabel-root': {
                          color: 'white',
                        },
                        '& .MuiInput-underline:before': {
                          borderBottomColor: 'white',
                        },
                        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                          borderBottomColor: 'white',
                        },
                        '& .MuiInput-underline:after': {
                          borderBottomColor: 'white',
                        },
                      },
                    }}
                    variant="standard"
                    sx={{color:"white"}}
                    />
                <TextField
                    id="input-with-icon-textfield"
                     label="Password"
                    InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                    < VisibilityIcon sx={{color:"white"}}/>
                    </InputAdornment>
                     ),
                     sx: {
                        '& .MuiInputBase-input': {
                          color: 'white',
                        },
                        '& .MuiInputLabel-root': {
                          color: 'white',
                        },
                        '& .MuiInput-underline:before': {
                          borderBottomColor: 'white',
                        },
                        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                          borderBottomColor: 'white',
                        },
                        '& .MuiInput-underline:after': {
                          borderBottomColor: 'white',
                        },
                      },
                    }}
                    
                    variant="standard"
                    sx={{color:"white"}}
                    />
                <Typography variant='h6' color={'white'}>Forgot password?</Typography>
                <Button variant="contained" sx={{borderRadius:"1rem"}}>Login</Button>
                <Button variant="outlined" sx={{borderRadius:"1rem"}}>Signup</Button>
                <Typography color={'red'} >Don't have an account??? <Link to="/signup">signup</Link> </Typography>

            </Grid>
        </Grid>
    </Grid>
  )
}

export default userSignin