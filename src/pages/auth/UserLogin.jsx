// import { TextField, Button, Box, Alert, Typography, CircularProgress } from '@mui/material';
// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { setUserToken } from '../../features/authSlice';
// import { getToken, storeToken } from '../../services/LocalStorageService';
// import { useLoginUserMutation } from '../../services/userAuthApi';

// const UserLogin = () => {
//   const [server_error, setServerError] = useState({})
//   const navigate = useNavigate();
//   const [loginUser, { isLoading }] = useLoginUserMutation()
//   const dispatch = useDispatch()
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData(e.currentTarget);
//     const actualData = {
//       email: data.get('email'),
//       password: data.get('password'),
//     }
//     const res = await loginUser(actualData)
//     if (res.error) {
//       // console.log(typeof (res.error.data.errors))
//       // console.log(res.error.data.errors)
//       setServerError(res.error.data.errors)
//     }
//     if (res.data) {
//       // console.log(typeof (res.data))
//       // console.log(res.data)
//       storeToken(res.data.token)  // will be stored token in local storage
//       let { access_token } = getToken()  
//       dispatch(setUserToken({ access_token: access_token }))   // token will be stored in redux state
//       navigate('/dashboard')
//     }
//   }
//   let { access_token } = getToken()
//   useEffect(() => {
//     dispatch(setUserToken({ access_token: access_token }))
//   }, [access_token, dispatch])


//   return <>
//     {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : ""}
//     {server_error.email ? console.log(server_error.email[0]) : ""}
//     {server_error.password ? console.log(server_error.password[0]) : ""}
//     <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
//       <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
//       {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
//       <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
//       {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
//       <Box textAlign='center'>
//         {isLoading ? <CircularProgress /> : <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>}
//       </Box>
//       <NavLink to='/sendpasswordresetemail' >Forgot Password ?</NavLink>
//       {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
//     </Box>
//   </>;
// };

// export default UserLogin;


import { TextField, Button, Box, Alert, Typography, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate, useLocation } from 'react-router-dom'; // Added useLocation
import { setUserToken } from '../../features/authSlice';
import { getToken, storeToken } from '../../services/LocalStorageService';
import { useLoginUserMutation } from '../../services/userAuthApi';

const UserLogin = () => {
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const location = useLocation(); // 🔥 Get location state
  const [loginUser, { isLoading }] = useLoginUserMutation()
  const dispatch = useDispatch()
  
  // 🔥 Get redirect info from location state
  const redirectMessage = location.state?.message;
  const from = location.state?.from;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password'),
    }
    const res = await loginUser(actualData)
    if (res.error) {
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      storeToken(res.data.token)  // will be stored token in local storage
      let { access_token } = getToken()  
      dispatch(setUserToken({ access_token: access_token }))   // token will be stored in redux state
      
      // 🔥 Check if there's a pending contact form
      const pendingForm = localStorage.getItem('pendingContactForm');
      
      if (pendingForm && from === '/contact') {
        // Redirect back to contact page with form data
        navigate('/contact');
      } else if (from) {
        // Redirect to the page user came from
        navigate(from);
      } else {
        // Normal redirect to dashboard
        navigate('/dashboard');
      }
    }
  }
  
  let { access_token } = getToken()
  useEffect(() => {
    dispatch(setUserToken({ access_token: access_token }))
  }, [access_token, dispatch])


  return <>
    {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : ""}
    {server_error.email ? console.log(server_error.email[0]) : ""}
    {server_error.password ? console.log(server_error.password[0]) : ""}
    
    {/* 🔥 Show redirect message if coming from contact page */}
    {redirectMessage && (
      <Alert severity="info" sx={{ mb: 2 }}>
        {redirectMessage}
      </Alert>
    )}
    
    <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
      <Box textAlign='center'>
        {isLoading ? <CircularProgress /> : <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>}
      </Box>
      <NavLink to='/sendpasswordresetemail' >Forgot Password ?</NavLink>
      {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
    </Box>
  </>;
};

export default UserLogin;