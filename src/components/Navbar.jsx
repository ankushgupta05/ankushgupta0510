// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { getToken } from "../services/LocalStorageService";

// const Navbar = () => {
//   const { access_token } = getToken();
//   const [isOpen, setIsOpen] = useState(false);

//   const linkClass = ({ isActive }) =>
//     `block px-4 py-2 rounded-md transition ${
//       isActive ? "bg-purple-800" : "hover:bg-purple-700"
//     }`;

//   return (
//     <nav className="bg-purple-900 text-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">

//           {/* Logo */}
//           <h1 className="text-xl font-bold">My-Awesome Portfolio</h1>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-4">

//             <NavLink to="/" className={linkClass}>
//               Home
//             </NavLink>

//             <NavLink to="/about" className={linkClass}>
//               About
//             </NavLink>

//             <NavLink to="/project" className={linkClass}>
//               Project
//             </NavLink>

//             <NavLink to="/contact" className={linkClass}>
//               Contact
//             </NavLink>

//             <NavLink to="/achievement" className={linkClass}>
//               Technology Achieved
//             </NavLink>

//             {access_token ? (
//               <NavLink to="/dashboard" className={linkClass}>
//                 Dashboard
//               </NavLink>
//             ) : (
//               <NavLink to="/login" className={linkClass}>
//                 Login / Registration
//               </NavLink>
//             )}
//           </div>

//           {/* Mobile Button */}
//           <button
//             className="md:hidden focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-purple-800 px-4 pb-4 space-y-2">

//           <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
//             Home
//           </NavLink>

//           <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>
//             About
//           </NavLink>

//           <NavLink to="/project" className={linkClass} onClick={() => setIsOpen(false)}>
//             Project
//           </NavLink>

//           <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>
//             Contact
//           </NavLink>

//           <NavLink to="/achievement" className={linkClass} onClick={() => setIsOpen(false)}>
//             Technology Achieved
//           </NavLink>

//           {access_token ? (
//             <NavLink to="/dashboard" className={linkClass} onClick={() => setIsOpen(false)}>
//               Dashboard
//             </NavLink>
//           ) : (
//             <NavLink to="/login" className={linkClass} onClick={() => setIsOpen(false)}>
//               Login / Registration
//             </NavLink>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// // import LoginReg from "./pages/auth/LoginReg";
// import LoginReg from "../pages/auth/LoginReg";
// import ResetPassword from "../pages/auth/ResetPassword";
// import SendPasswordResetEmail from "../pages/auth/SendPasswordResetEmail";
// import Contact from "../pages/Contact";
// import Dashboard from "../pages/Dashboard";
// import Home from "../pages/Home";
// import Layout from "../pages/Layout";
// // import Base from "../pages/Base";
// import { useSelector } from "react-redux";

// function App() {
//   const { access_token } = useSelector((state) => state.auth);

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             {/* <Route index element={<Base />} /> */}
//             <Route path="contact" element={<Contact />} />
//             <Route
//               path="login"
//               element={!access_token ? <LoginReg /> : <Navigate to="/dashboard" />}
//             />
//             <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
//             <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
//           </Route>
//           <Route
//             path="/dashboard"
//             element={access_token ? <Dashboard /> : <Navigate to="/login" />}
//           />
//           <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;



// import { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { getToken } from "../services/LocalStorageService";
// import { useScroll } from "../context/ScrollContext";

// const Navbar = () => {
//   const { access_token } = getToken();
//   const [isOpen, setIsOpen] = useState(false);
//   const { homeRef, aboutRef, projectRef, contactRef, achievementRef, loginRef, scrollTo } = useScroll();
//   const location = useLocation();
//   const isHome = location.pathname === "/";

//   const linkClass = ({ isActive }) =>
//     `block px-4 py-2 rounded-md transition ${
//       isActive ? "bg-purple-800" : "hover:bg-purple-700"
//     }`;

//   const handleScroll = (e, ref) => {
//     if (isHome) { e.preventDefault(); scrollTo(ref); setIsOpen(false); }
//   };

//   return (
//     <nav
//       className="bg-purple-900 text-white shadow-md"
//       style={{ position: "fixed", top: 0, left: 0, right: 0, width: "100%", zIndex: 9999 }}
//     >
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">

//           <h1 className="text-xl font-bold">My-Awesome Portfolio</h1>

//           {/* Desktop */}
//           <div className="hidden md:flex space-x-4">
//             <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, homeRef)}>Home</NavLink>
//             <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, aboutRef)}>About</NavLink>
//             <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, projectRef)}>Project</NavLink>
//             <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, contactRef)}>Contact</NavLink>
//             <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, achievementRef)}>Technology Achieved</NavLink>
//             {access_token ? (
//               <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
//             ) : (
//               <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, loginRef)}>Login / Registration</NavLink>
//             )}
//           </div>

//           <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>☰</button>
//         </div>
//       </div>

//       {/* Mobile */}
//       {isOpen && (
//         <div className="md:hidden bg-purple-800 px-4 pb-4 space-y-2">
//           <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, homeRef)}>Home</NavLink>
//           <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, aboutRef)}>About</NavLink>
//           <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, projectRef)}>Project</NavLink>
//           <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, contactRef)}>Contact</NavLink>
//           <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, achievementRef)}>Technology Achieved</NavLink>
//           {access_token ? (
//             <NavLink to="/dashboard" className={linkClass} onClick={() => setIsOpen(false)}>Dashboard</NavLink>
//           ) : (
//             <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, loginRef)}>Login / Registration</NavLink>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;









import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getToken } from "../services/LocalStorageService";
import { useScroll } from "../context/ScrollContext";

const Navbar = ({ onLoginClick }) => {
  const { access_token } = getToken();
  const [isOpen, setIsOpen] = useState(false);
  const { homeRef, aboutRef, projectRef, contactRef, achievementRef, scrollTo } = useScroll();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-md transition ${
      isActive ? "bg-purple-800" : "hover:bg-purple-700"
    }`;

  const handleScroll = (e, ref) => {
    if (isHome) { e.preventDefault(); scrollTo(ref); setIsOpen(false); }
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    if (onLoginClick) onLoginClick();
  };

  return (
    <nav
      className="bg-purple-900 text-white shadow-md"
      style={{ position: "fixed", top: 0, left: 0, right: 0, width: "100%", zIndex: 9999 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* ── ATTRACTIVE LOGO ── */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => isHome && scrollTo(homeRef)}
          >
            {/* Animated icon badge */}
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #a855f7, #6366f1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                boxShadow: "0 0 12px rgba(168,85,247,0.6)",
                flexShrink: 0,
              }}
            >
              🚀
            </div>

            {/* Name + title */}
            <div className="leading-tight">
              <span
                style={{
                  fontFamily: "'Segoe UI', sans-serif",
                  fontWeight: 800,
                  fontSize: "1rem",
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(90deg, #e879f9, #818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "block",
                }}
              >
                Ankush Gupta
              </span>
              <span
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#a5b4fc",
                  display: "block",
                  marginTop: "-2px",
                }}
              >
                Full Stack Developer
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-1">
            <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, homeRef)}>Home</NavLink>
            <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, aboutRef)}>About</NavLink>
            <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, projectRef)}>Project</NavLink>
            <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, contactRef)}>Contact</NavLink>
            <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, achievementRef)}>Achievement</NavLink>
            {access_token ? (
              <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
            ) : (
              <button
                className="block px-4 py-2 rounded-md transition hover:bg-purple-700"
                onClick={handleLoginClick}
              >
                Login / Register
              </button>
            )}
          </div>

          <button className="md:hidden focus:outline-none text-xl" onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-800 px-4 pb-4 space-y-1">
          <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, homeRef)}>Home</NavLink>
          <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, aboutRef)}>About</NavLink>
          <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, projectRef)}>Project</NavLink>
          <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, contactRef)}>Contact</NavLink>
          <NavLink to="/" className={linkClass} onClick={(e) => handleScroll(e, achievementRef)}>Achievement</NavLink>
          {access_token ? (
            <NavLink to="/dashboard" className={linkClass} onClick={() => setIsOpen(false)}>Dashboard</NavLink>
          ) : (
            <button
              className="block w-full text-left px-4 py-2 rounded-md transition hover:bg-purple-700"
              onClick={handleLoginClick}
            >
              Login / Register
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;