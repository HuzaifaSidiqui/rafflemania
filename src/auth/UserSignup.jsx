import { Grid, Typography, TextField, InputAdornment, Button ,MobileStepper} from '@mui/material';
import React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';

const UserSignup = () => {
  return (
    <Grid container sx={{ width:"100%", height:"100vh", backgroundColor:"#050A30"}}>
    <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 2 }}>
    <img src="introImg.png" alt="Intro" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
  </Grid>
    <Grid container sx={{ width:"45%", flexDirection:"column"}}>  
        <Grid container sx={{flexDirection:"column", width:"60%", gap:"1rem",pt:"5rem", pl:"7rem"}}>
            <Typography variant='h5' color={'white'}  >RAFFLE MANIA</Typography>
            <Typography variant='h7' color={'white'} >Signup</Typography>
            <TextField
                id="signup-firstname"
                 label="Firstname" 
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
                id="signup-lastname"
                 label="Lastname"
                InputProps={{
                endAdornment: (
                <InputAdornment position="end">
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
            <Button variant="contained" sx={{borderRadius:"1rem"}}>Next</Button>
            <Typography color={'red'} >Already have an account?? <link rel="stylesheet" href="userSignup.jsx" color='white' /> Login</Typography>

            <MobileStepper
      variant="dots"
      steps={4}
      position="static"
      
      sx={{ maxWidth: 400, flexGrow: 1,backgroundColor:"#050A30",color:"white"}}
      
      
    />

        </Grid>
    </Grid>
</Grid>
  );
}

export default UserSignup;
