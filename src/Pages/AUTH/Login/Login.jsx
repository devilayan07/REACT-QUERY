import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMutation } from '@tanstack/react-query';
import { AddloginNow } from '../../../Api/Functions/login.api';
import { toast } from 'react-toastify';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { IconButton,InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
  const navigate=useNavigate()
    const[user,setUser]=useState({
        email:"",
        password:""
    })
    const[error,setError]=useState("")
    const[isvisible,setVisible]=useState(false)

    const toggle=()=>{
      setVisible(!isvisible)
    }

    const {mutate,isPending}=useMutation({
        mutationFn:AddloginNow,
        onSuccess:(data)=>{
          console.log(data,"hhh")
           navigate("/")
            toast.success(data.message)
            localStorage.setItem("token",data.token)
        }
    })

    const validation=()=>{
        let error={};
        if(!user.email){
            error.email="Email is Required"
        }
        if(!user.password){
            error.password="Password is Required"
        }

        return error;

    }

    console.log(error)

    const SubmitInfo=(e)=>{
        e.preventDefault()
        setError(validation())

        const formdata=new FormData()

        formdata.append("email",user.email)
        formdata.append("password",user.password)

        mutate(formdata)
    }

    let name,value

    const postUserData=(e)=>{
        name=e.target.name;
        value=e.target.value

        if(name==="email"){
            if(value.length===0){
                setError({...error,email:"Email is Required"})
                setUser({...user,email:""})
            }
            else{
                setError({...error,email:""})
                setUser({...user,email:value})
            }
        }

        if(name==="password"){
            if(value.length===0){
                setError({...error,password:"Password is Required"})
                setUser({...user,password:""})
            }
            else{
                setError({...error,password:""})
                setUser({...user,password:value})
            }
        }
    }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={SubmitInfo} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={user.email}
              onChange={postUserData}
              autoComplete="email"
              autoFocus
            />
                         <span style={{color:"red"}}>
    {" "}
        {error.email}{" "}
    </span>

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={!isvisible ? "password" :"text"}
              id="password"
              value={user.password}
              onChange={postUserData}
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggle} className="icon"> 
                      {isvisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                )
              }}



            />
                          <span style={{color:"red"}}>
    {" "}
        {error.password}{" "}
    </span>


            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {isPending ?  <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Loading...
            </Button> :
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign In
                      </Button>
          
 }
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to={"/register"} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}