// import { Grid, TextField, Button, Box, Alert, Typography } from "@mui/material";
// import { useState } from 'react';
// import { useSendPasswordResetEmailMutation } from "../../services/userAuthApi";
// const SendPasswordResetEmail = () => {
//   const [server_error, setServerError] = useState({})
//   const [server_msg, setServerMsg] = useState({})
//   const [sendPasswordResetEmail, { isLoading }] = useSendPasswordResetEmailMutation()
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData(e.currentTarget);
//     const actualData = {
//       email: data.get('email'),
//     }
//     const res = await sendPasswordResetEmail(actualData)
//     if (res.error) {
//       console.log(typeof (res.error.data.errors))
//       console.log(res.error.data.errors)
//       setServerMsg({})
//       setServerError(res.error.data.errors)
//     }
//     if (res.data) {
//       console.log(typeof (res.data))
//       console.log(res.data)
//       setServerError({})
//       setServerMsg(res.data)
//       document.getElementById('password-reset-email-form').reset()
//     }
//   }
//   return <>
//     <Grid container justifyContent='center'>
//       <Grid item sm={6} xs={12}>
//         <h1>Reset Password</h1>
//         <Box component='form' noValidate sx={{ mt: 1 }} id='password-reset-email-form' onSubmit={handleSubmit}>
//           <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
//           {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
//           <Box textAlign='center'>
//             <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Send</Button>
//           </Box>
//           {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
//           {server_msg.msg ? <Alert severity='success'>{server_msg.msg}</Alert> : ''}
//         </Box>
//       </Grid>
//     </Grid>
//   </>;
// };

// export default SendPasswordResetEmail;




import { Grid, TextField, Button, Box, Alert, Typography, Container, Paper } from "@mui/material";
import { useState } from 'react';
import { useSendPasswordResetEmailMutation } from "../../services/userAuthApi";
import EmailIcon from '@mui/icons-material/Email';

const SendPasswordResetEmail = () => {
  const [server_error, setServerError] = useState({})
  const [server_msg, setServerMsg] = useState({})
  const [sendPasswordResetEmail, { isLoading }] = useSendPasswordResetEmailMutation()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
    }
    const res = await sendPasswordResetEmail(actualData)
    if (res.error) {
      console.log(typeof (res.error.data.errors))
      console.log(res.error.data.errors)
      setServerMsg({})
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      console.log(typeof (res.data))
      console.log(res.data)
      setServerError({})
      setServerMsg(res.data)
      document.getElementById('password-reset-email-form').reset()
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
              <EmailIcon 
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
                Enter your email address and we'll send you a link to reset your password
              </Typography>
            </Box>

            {/* Form Section */}
            <Box 
              component='form' 
              noValidate 
              sx={{ mt: 2 }} 
              id='password-reset-email-form' 
              onSubmit={handleSubmit}
            >
              <TextField 
                margin='normal' 
                required 
                fullWidth 
                id='email' 
                name='email' 
                label='Email Address' 
                type='email'
                autoComplete='email'
                autoFocus
                sx={{
                  '& .MuiInputBase-root': {
                    fontSize: { xs: '0.875rem', sm: '1rem' }
                  }
                }}
              />
              {server_error.email ? (
                <Typography 
                  sx={{ 
                    fontSize: { xs: 11, sm: 12 }, 
                    color: 'error.main', 
                    pl: 1.5,
                    mt: 0.5
                  }}
                >
                  {server_error.email[0]}
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
                  {isLoading ? 'Sending...' : 'Send Reset Link'}
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

export default SendPasswordResetEmail;