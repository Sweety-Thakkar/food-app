import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';
import { ICONS } from '../../assets';

const initialState = {
  email: "",
  password: "",
}

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

  const [data, setData] = React.useState(initialState)
  const [error, setError] = React.useState(initialState)

  // const [login, setLogin] = React.useState(false)

  const Navigate = useNavigate()

  // const Data = await api.auth.login(data);
  // console.log('Data :>> ', Data);

  // if (Data.Password === " password  incorrect") {
  //   setLogin(false)
  // }
  // else {
  //   setLogin(true)
  // }
  // if (login === true) {
  //   Navigate("/home")
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  const handleValidate = (name, value) => {
    switch (name) {
      case 'email':
        if(!value || value.trim() === " "){
          return 'Email is required'
        }else return ''
      case 'password':
        if(!value || value.trim() === " "){
          return 'Password is required'
        }else return ''
      default: return ''
    }
  }
  

  const handleChnage = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setError({
      ...error, [name]: handleValidate(name, value)
    })
  };

  console.log('data :>> ', data, error);

  const handleLoginApi = async() => {
    const response = await api.auth.login(data);
    localStorage.setItem("token",response.data.token)
    if(response?.status === 200){
      Navigate('/home')
      localStorage.setItem("data.email",data.email)
    }
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let errorObj = {}
    
    Object.keys(data).forEach((value) => {
      let error = handleValidate(value, data[value])
      if(error){
        errorObj[value] = error
      }
    })
    if(Object.values(errorObj).length){
      setError(errorObj)
      return
    }
    await handleLoginApi()
  }


  return (
    <ThemeProvider theme={theme}>
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
            <ICONS.LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form noValidate style={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              onChange={(e) => handleChnage(e)}
              label="Email Address"
              name="email"
              value={data.email}
              autoComplete="email"
              autoFocus
            />
            <span>{error['email']}</span>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              onChange={(e) => handleChnage(e)}
              label="Password"
              type="password"
              value={data.password}
              id="password"
              autoComplete="current-password"
            />
            <span>{error['password']}</span>
            <br/>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              LogIn
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}