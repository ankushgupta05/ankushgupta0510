// import { CssBaseline } from "@mui/material";
// import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Layout = () => {
//   const { pathname } = useLocation();
//   const isHome = pathname === "/";

//   return (
//     <>
//       <CssBaseline />
//       {!isHome && <Navbar />}
//       <Outlet />
//       {!isHome && <Footer />}
//     </>
//   );
// };

// export default Layout;




// import { CssBaseline } from "@mui/material";
// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { ScrollProvider } from "../context/ScrollContext";



// const Layout = () => {
//   return (
//     <>
//       <CssBaseline />
//       <ScrollProvider>
//         <Navbar />
//         <Outlet />
//         <Footer />
//       </ScrollProvider>
//     </>
//   );
// };

// export default Layout;





import { CssBaseline } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ScrollProvider } from "../context/ScrollContext";
import LoginReg from "./auth/LoginReg";

const Layout = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <CssBaseline />
      <ScrollProvider>
        <Navbar onLoginClick={() => setShowLogin(true)} />

        {/* POPUP — only on home route */}
        {isHome && showLogin && (
          <div
            onClick={() => setShowLogin(false)}
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.6)",
              zIndex: 8000,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              paddingTop: "32px",
              overflowY: "auto",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#fff",
                borderRadius: "16px",
                width: "90%",
                maxWidth: "900px",
                maxHeight: "85vh",
                overflowY: "auto",
                position: "relative",
                boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
              }}
            >
              <button
                onClick={() => setShowLogin(false)}
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "16px",
                  background: "none",
                  border: "none",
                  fontSize: "1.6rem",
                  cursor: "pointer",
                  color: "#555",
                  zIndex: 10,
                  lineHeight: 1,
                }}
              >
                ✕
              </button>
              <LoginReg />
            </div>
          </div>
        )}

        <Outlet />
        <Footer />
      </ScrollProvider>
    </>
  );
};

export default Layout;