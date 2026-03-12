// import { Box, TextField, Button, Alert, Typography } from '@mui/material';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useChangeUserPasswordMutation } from '../../services/userAuthApi';
// import { getToken } from '../../services/LocalStorageService'
// const ChangePassword = () => {
//   const [server_error, setServerError] = useState({})
//   const [server_msg, setServerMsg] = useState({})
//   const [changeUserPassword] = useChangeUserPasswordMutation()
//   const { access_token } = getToken()

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const actualData = {
//       old_password: data.get('old_password'),
//       password: data.get('password'),
//       password2: data.get('password2'),
//     }
//     const res = await changeUserPassword({ actualData, access_token })
//     if (res.error) {
//       setServerMsg({})
//       setServerError(res.error.data.errors)
//     }
//     if (res.data) {
//       console.log(res.data)
//       setServerError({})
//       setServerMsg(res.data)
//       document.getElementById("password-change-form").reset();
//     }

//   };
//   // Getting User Data from Redux Store
//   const myData = useSelector(state => state.user)
//   // console.log("Change Password", myData)

//   return <>
//     {/* {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : ""}
//     {server_error.password ? console.log(server_error.password[0]) : ""}
//     {server_error.password2 ? console.log(server_error.password2[0]) : ""} */}
//     <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth: 600, mx: 4 }}>
//       <h1>Change Password</h1>
//       <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} id="password-change-form">
//         <TextField margin="normal" required fullWidth name="old_password" label="Old Password" type="password" id="old_password" />
//         {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.old_password[0]}</Typography> : ""}
//         <TextField margin="normal" required fullWidth name="password" label="New Password" type="password" id="password" />
//         {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
//         <TextField margin="normal" required fullWidth name="password2" label="Confirm New Password" type="password" id="password2" />
//         {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password2[0]}</Typography> : ""}
//         <Box textAlign='center'>
//           <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}> Update </Button>
//         </Box>
//         {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
//         {server_msg.msg ? <Alert severity='success'>{server_msg.msg}</Alert> : ''}
//       </Box>
//     </Box>
//   </>;
// };

// export default ChangePassword;





import { Box, TextField, Button, Alert, Typography, Paper, InputAdornment, IconButton, Container, Divider } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useChangeUserPasswordMutation } from '../../services/userAuthApi';
import { getToken } from '../../services/LocalStorageService';
import LockResetIcon from '@mui/icons-material/LockReset';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ChangePassword = () => {
  const [server_error, setServerError] = useState({});
  const [server_msg, setServerMsg] = useState({});
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [changeUserPassword] = useChangeUserPasswordMutation();
  const { access_token } = getToken();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      old_password: data.get('old_password'),
      password: data.get('password'),
      password2: data.get('password2'),
    };
    const res = await changeUserPassword({ actualData, access_token });
    if (res.error) {
      setServerMsg({});
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      console.log(res.data);
      setServerError({});
      setServerMsg(res.data);
      document.getElementById("password-change-form").reset();
    }
  };

  const myData = useSelector(state => state.user);

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper 
        elevation={6} 
        sx={{ 
          p: 4, 
          borderRadius: 3,
          background: 'linear-gradient(145deg, #ffffff 0%, #f5f7fa 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '5px',
            background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
          }
        }}
      >
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 70,
              height: 70,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
              mb: 2,
              boxShadow: '0 4px 20px rgba(25, 118, 210, 0.3)',
            }}
          >
            <LockResetIcon sx={{ fontSize: 35, color: 'white' }} />
          </Box>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1
            }}
          >
            Change Password
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Keep your account secure by updating your password regularly
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Form Section */}
        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          noValidate 
          id="password-change-form"
        >
          {/* Old Password Field */}
          <TextField
            margin="normal"
            required
            fullWidth
            name="old_password"
            label="Current Password"
            type={showOldPassword ? 'text' : 'password'}
            id="old_password"
            autoComplete="current-password"
            error={!!server_error.old_password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowOldPassword(!showOldPassword)}
                    edge="end"
                  >
                    {showOldPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#1976d2',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#1976d2',
                  borderWidth: 2,
                },
              },
            }}
          />
          {server_error.old_password && (
            <Typography 
              variant="caption" 
              sx={{ 
                color: 'error.main', 
                pl: 2, 
                display: 'block',
                mt: 0.5
              }}
            >
              {server_error.old_password[0]}
            </Typography>
          )}

          {/* New Password Field */}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="New Password"
            type={showNewPassword ? 'text' : 'password'}
            id="password"
            autoComplete="new-password"
            error={!!server_error.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    edge="end"
                  >
                    {showNewPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#1976d2',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#1976d2',
                  borderWidth: 2,
                },
              },
            }}
          />
          {server_error.password && (
            <Typography 
              variant="caption" 
              sx={{ 
                color: 'error.main', 
                pl: 2, 
                display: 'block',
                mt: 0.5
              }}
            >
              {server_error.password[0]}
            </Typography>
          )}

          {/* Confirm Password Field */}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password2"
            label="Confirm New Password"
            type={showConfirmPassword ? 'text' : 'password'}
            id="password2"
            autoComplete="new-password"
            error={!!server_error.password2}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CheckCircleOutlineIcon sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: '#1976d2',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#1976d2',
                  borderWidth: 2,
                },
              },
            }}
          />
          {server_error.password2 && (
            <Typography 
              variant="caption" 
              sx={{ 
                color: 'error.main', 
                pl: 2, 
                display: 'block',
                mt: 0.5
              }}
            >
              {server_error.password2[0]}
            </Typography>
          )}

          {/* Password Requirements Box */}
          <Box 
            sx={{ 
              mt: 2, 
              p: 2, 
              bgcolor: '#f5f7fa', 
              borderRadius: 2,
              border: '1px solid #e0e7ff'
            }}
          >
            <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
              Password Requirements:
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', mt: 0.5 }}>
              • At least 8 characters long
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary' }}>
              • Include uppercase and lowercase letters
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary' }}>
              • Include at least one number
            </Typography>
          </Box>

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              mb: 2,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: 2,
              background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
              boxShadow: '0 4px 15px rgba(25, 118, 210, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(90deg, #1565c0 0%, #1976d2 100%)',
                boxShadow: '0 6px 20px rgba(25, 118, 210, 0.4)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Update Password
          </Button>

          {/* Error/Success Messages */}
          {server_error.non_field_errors && (
            <Alert 
              severity="error" 
              sx={{ 
                mt: 2,
                borderRadius: 2,
                '& .MuiAlert-icon': {
                  fontSize: 24
                }
              }}
            >
              {server_error.non_field_errors[0]}
            </Alert>
          )}
          
          {server_msg.msg && (
            <Alert 
              severity="success" 
              sx={{ 
                mt: 2,
                borderRadius: 2,
                '& .MuiAlert-icon': {
                  fontSize: 24
                }
              }}
            >
              {server_msg.msg}
            </Alert>
          )}
        </Box>

        {/* Footer Tip */}
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            💡 Tip: Use a strong, unique password that you don't use elsewhere
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default ChangePassword;