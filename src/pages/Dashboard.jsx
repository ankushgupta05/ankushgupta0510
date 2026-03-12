import { Button, CssBaseline, Grid, Typography, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import ChangePassword from './auth/ChangePassword';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { access_token } = getToken();
  const { data, isSuccess } = useGetLoggedUserQuery(access_token);

  const [userData, setUserData] = useState({ email: "", name: "" });

  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: "", email: "" }));
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate('/');
  };

  useEffect(() => {
    if (data && isSuccess) {
      setUserData({ email: data.email, name: data.name });
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({ email: data.email, name: data.name }));
    }
  }, [data, isSuccess, dispatch]);

  return (
    <>
      <CssBaseline />

      {/* ── TOP BAR ── */}
      <Box sx={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
        background: "linear-gradient(135deg, #581c87, #4338ca)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        px: 3, py: 1.5, boxShadow: "0 2px 12px rgba(0,0,0,0.3)"
      }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box sx={{
            width: 36, height: 36, borderRadius: "10px",
            background: "linear-gradient(135deg, #a855f7, #6366f1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "18px", boxShadow: "0 0 10px rgba(168,85,247,0.5)"
          }}>🚀</Box>
          <Box>
            <Typography sx={{
              fontWeight: 800, fontSize: "0.95rem", letterSpacing: "-0.02em",
              background: "linear-gradient(90deg, #e879f9, #818cf8)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              lineHeight: 1.2
            }}>Ankush Gupta</Typography>
            <Typography sx={{ fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.1em", color: "#a5b4fc", textTransform: "uppercase" }}>
              Dashboard
            </Typography>
          </Box>
        </Box>

        {/* Back to Portfolio */}
        <Button
          variant="outlined"
          size="small"
          onClick={() => navigate('/')}
          sx={{
            color: "#e879f9", borderColor: "#a855f7", fontSize: "0.75rem",
            textTransform: "none", borderRadius: "8px",
            "&:hover": { background: "rgba(168,85,247,0.1)", borderColor: "#e879f9" }
          }}
        >
          ← Portfolio
        </Button>
      </Box>

      {/* ── DASHBOARD BODY ── */}
      <Box sx={{ pt: "64px", minHeight: "100vh", background: "#0f172a" }}>
        <Grid container sx={{ minHeight: "calc(100vh - 64px)" }}>

          {/* Sidebar */}
          <Grid item sm={4} xs={12} sx={{
            background: "linear-gradient(180deg, #1e1b4b 0%, #1e1035 100%)",
            p: 4, color: "white",
            borderRight: "1px solid rgba(168,85,247,0.2)"
          }}>
            <Box sx={{
              width: 80, height: 80, borderRadius: "50%",
              background: "linear-gradient(135deg, #a855f7, #6366f1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "2rem", mb: 2, boxShadow: "0 0 20px rgba(168,85,247,0.4)"
            }}>
              👤
            </Box>

            <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5 }}>
              {userData.name || "User"}
            </Typography>
            <Typography sx={{ color: "#a5b4fc", fontSize: "0.85rem", mb: 0.5 }}>
              {userData.email}
            </Typography>
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, mb: 3 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", animation: "pulse 2s infinite" }} />
              <Typography sx={{ color: "#4ade80", fontSize: "0.75rem", fontWeight: 600 }}>Active</Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Button
                variant="contained"
                color="warning"
                size="large"
                onClick={handleLogout}
                fullWidth
                sx={{ borderRadius: "12px", fontWeight: 700, textTransform: "none" }}
              >
                Logout
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/')}
                fullWidth
                sx={{
                  borderRadius: "12px", fontWeight: 700, textTransform: "none",
                  color: "#a5b4fc", borderColor: "#4338ca",
                  "&:hover": { background: "rgba(99,102,241,0.1)" }
                }}
              >
                ← Back to Portfolio
              </Button>
            </Box>
          </Grid>

          {/* Main Content */}
          <Grid item sm={8} xs={12} sx={{ p: 3, background: "#0f172a" }}>
            <ChangePassword />
          </Grid>

        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;