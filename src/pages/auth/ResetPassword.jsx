// import { Grid, TextField, Button, Box, Alert, Typography } from "@mui/material";
// import { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useResetPasswordMutation } from "../../services/userAuthApi";

// const ResetPassword = () => {
//   const [server_error, setServerError] = useState({})
//   const [server_msg, setServerMsg] = useState({})
//   const [resetPassword] = useResetPasswordMutation()
//   const { id, token } = useParams()
//   const navigate = useNavigate()
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData(e.currentTarget);
//     const actualData = {
//       password: data.get('password'),
//       password2: data.get('password2'),
//     }
//     const res = await resetPassword({ actualData, id, token })
//     if (res.error) {
//       setServerMsg({})
//       setServerError(res.error.data.errors)
//     }
//     if (res.data) {
//       setServerError({})
//       setServerMsg(res.data)
//       document.getElementById('password-reset-form').reset()
//       setTimeout(() => {
//         navigate("/login")
//       }, 3000)
//     }

//   }
//   return <>
//     <Grid container justifyContent='center'>
//       <Grid item sm={6} xs={12}>
//         <h1>Reset Password</h1>
//         <Box component='form' noValidate sx={{ mt: 1 }} id='password-reset-form' onSubmit={handleSubmit}>
//           <TextField margin='normal' required fullWidth id='password' name='password' label='New Password' type='password' />
//           {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
//           <TextField margin='normal' required fullWidth id='password2' name='password2' label='Confirm New Password' type='password' />
//           {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password2[0]}</Typography> : ""}
//           <Box textAlign='center'>
//             <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Save</Button>
//           </Box>
//           {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
//           {server_msg.msg ? <Alert severity='success'>{server_msg.msg}</Alert> : ''}
//         </Box>
//       </Grid>
//     </Grid>
//   </>;
// };

// export default ResetPassword;





import { Grid, TextField, Button, Box, Alert, Typography, Container, Paper } from "@mui/material";
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useResetPasswordMutation } from "../../services/userAuthApi";
import LockResetIcon from '@mui/icons-material/LockReset';

const ResetPassword = () => {
  const [server_error, setServerError] = useState({})
  const [server_msg, setServerMsg] = useState({})
  const [resetPassword, { isLoading }] = useResetPasswordMutation()
  const { id, token } = useParams()
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get('password'),
      password2: data.get('password2'),
    }
    const res = await resetPassword({ actualData, id, token })
    if (res.error) {
      setServerMsg({})
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      setServerError({})
      setServerMsg(res.data)
      document.getElementById('password-reset-form').reset()
      setTimeout(() => {
        navigate("/login")
      }, 3000)
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 4, md: 6 } }}>
      <Grid 
        container 
        justifyContent='center' 
        alignItems='center' 
        sx={{ minHeight: { xs: 'auto', md: '80vh' } }}
      >
        <Grid item xs={12} sm={10} md={8} lg={6} xl={5}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: { xs: 3, sm: 4, md: 5 },
              borderRadius: { xs: 2, sm: 3 },
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}
          >
            {/* Header Section */}
            <Box textAlign='center' mb={3}>
              <LockResetIcon 
                sx={{ 
                  fontSize: { xs: 48, sm: 60, md: 72 }, 
                  color: 'primary.main',
                  mb: 2
                }} 
              />
              <Typography 
                variant='h4' 
                component='h1' 
                sx={{ 
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  fontWeight: 600,
                  mb: 1
                }}
              >
                Reset Password
              </Typography>
              <Typography 
                variant='body2' 
                color='text.secondary'
                sx={{ 
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  px: { xs: 0, sm: 2 }
                }}
              >
                Enter your new password below
              </Typography>
            </Box>

            {/* Form Section */}
            <Box 
              component='form' 
              noValidate 
              sx={{ mt: 2 }} 
              id='password-reset-form' 
              onSubmit={handleSubmit}
            >
              <TextField 
                margin='normal' 
                required 
                fullWidth 
                id='password' 
                name='password' 
                label='New Password' 
                type='password'
                autoComplete='new-password'
                autoFocus
                sx={{
                  '& .MuiInputBase-root': {
                    fontSize: { xs: '0.875rem', sm: '1rem' }
                  }
                }}
              />
              {server_error.password ? (
                <Typography 
                  sx={{ 
                    fontSize: { xs: 11, sm: 12 }, 
                    color: 'error.main', 
                    pl: 1.5,
                    mt: 0.5
                  }}
                >
                  {server_error.password[0]}
                </Typography>
              ) : ""}

              <TextField 
                margin='normal' 
                required 
                fullWidth 
                id='password2' 
                name='password2' 
                label='Confirm New Password' 
                type='password'
                autoComplete='new-password'
                sx={{
                  '& .MuiInputBase-root': {
                    fontSize: { xs: '0.875rem', sm: '1rem' }
                  }
                }}
              />
              {server_error.password2 ? (
                <Typography 
                  sx={{ 
                    fontSize: { xs: 11, sm: 12 }, 
                    color: 'error.main', 
                    pl: 1.5,
                    mt: 0.5
                  }}
                >
                  {server_error.password2[0]}
                </Typography>
              ) : ""}

              <Box textAlign='center'>
                <Button 
                  type='submit' 
                  variant='contained' 
                  fullWidth
                  disabled={isLoading}
                  sx={{ 
                    mt: 3, 
                    mb: 2, 
                    py: { xs: 1.5, sm: 1.8 },
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 2
                  }}
                >
                  {isLoading ? 'Saving...' : 'Save New Password'}
                </Button>
              </Box>

              {server_error.non_field_errors ? (
                <Alert 
                  severity='error'
                  sx={{ 
                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                    mb: 2
                  }}
                >
                  {server_error.non_field_errors[0]}
                </Alert>
              ) : ''}
              
              {server_msg.msg ? (
                <Alert 
                  severity='success'
                  sx={{ 
                    fontSize: { xs: '0.8rem', sm: '0.875rem' },
                    mb: 2
                  }}
                >
                  {server_msg.msg}
                </Alert>
              ) : ''}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResetPassword;