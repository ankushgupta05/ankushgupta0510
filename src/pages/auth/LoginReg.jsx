// import { Grid, Card, Tabs, Typography, Tab, Box } from '@mui/material';
// import { useState } from 'react';
// import Pic1 from '../../images/pic1.png'
// import Registration from './Registration';
// import UserLogin from './UserLogin';
// import { ShoppingBag } from '@mui/icons-material';

// const TabPanel = (props) => {
//   const { children, value, index } = props;
//   return (
//     <div role='tabpanel' hidden={value !== index}>
//       {
//         value === index && (
//           <Box>{children}</Box>
//         )
//       }
//     </div>
//   )
// }
// const LoginReg = () => {
//   const [value, setValue] = useState(0);
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   }
//   return <>
//     <Grid container sx={{ height: '90vh' }}>
//       <Grid item lg={7} sm={5} sx={{
//         backgroundImage: `url(${Pic1})`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         display: { xs: 'none', sm: 'block' }
//       }}>
//       </Grid>
//       <Grid item lg={5} sm={7} xs={12}>
//         <Card sx={{ width: '100%', height: '100%' }}>
//           <Box sx={{ mx: 3, height: 530 }}>
//             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//               <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
//                 <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
//                 <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
//               </Tabs>
//             </Box>
//             <TabPanel value={value} index={0}>
//               <UserLogin />
//             </TabPanel>
//             <TabPanel value={value} index={1}>
//               <Registration />
//             </TabPanel>
//           </Box>
//           <Box textAlign='center' sx={{ mt: 2 }}>
//             <ShoppingBag sx={{ color: 'purple', fontSize: 100 }} />
//             <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Geek-Shop</Typography>
//           </Box>
//         </Card>
//       </Grid>
//     </Grid>
//   </>;
// };

// export default LoginReg;



import { Card, Tabs, Typography, Tab, Box } from "@mui/material";
import { useState } from "react";
import Registration from "./Registration";
import UserLogin from "./UserLogin";
import { ShoppingBag } from "@mui/icons-material";

const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const LoginReg = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <style>{`
        .loginreg-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100%;
          padding: 32px 16px;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
        }

        .loginreg-card {
          width: 100%;
          max-width: 440px;
          border-radius: 20px !important;
          box-shadow: 0 24px 64px rgba(0,0,0,0.4) !important;
          background: #ffffff !important;
          overflow: hidden;
        }

        .loginreg-header {
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          padding: 28px 24px 20px;
          text-align: center;
        }

        .loginreg-header-icon {
          background: rgba(255,255,255,0.15);
          border-radius: 50%;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
        }

        .loginreg-body {
          padding: 8px 24px 28px;
        }

        .loginreg-tabs .MuiTabs-root {
          border-bottom: 1px solid #e5e7eb;
          margin-bottom: 16px;
        }

        .loginreg-tabs .MuiTab-root {
          font-weight: 700 !important;
          font-size: 0.9rem !important;
          text-transform: none !important;
          letter-spacing: 0.01em !important;
          flex: 1;
        }

        @media (max-width: 480px) {
          .loginreg-card { max-width: 100%; border-radius: 12px !important; }
          .loginreg-wrap { padding: 16px 12px; }
        }
      `}</style>

      <div className="loginreg-wrap">
        <Card className="loginreg-card">

          {/* HEADER */}
          <div className="loginreg-header">
            <div className="loginreg-header-icon">
              <ShoppingBag sx={{ color: "#fff", fontSize: 32 }} />
            </div>
            <Typography
              variant="h5"
              sx={{ color: "#fff", fontWeight: 800, letterSpacing: "-0.02em" }}
            >
              Ankush Gupta
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.7)", mt: 0.5, fontSize: "0.82rem" }}
            >
              {value === 0 ? "Welcome back! Sign in to continue." : "Create your account today."}
            </Typography>
          </div>

          {/* BODY */}
          <div className="loginreg-body">
            <div className="loginreg-tabs">
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                variant="fullWidth"
              >
                <Tab label="Login" />
                <Tab label="Register" />
              </Tabs>
            </div>

            <TabPanel value={value} index={0}>
              <UserLogin />
            </TabPanel>

            <TabPanel value={value} index={1}>
              <Registration />
            </TabPanel>
          </div>

        </Card>
      </div>
    </>
  );
};

export default LoginReg;