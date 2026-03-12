// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import LoginReg from "./pages/auth/LoginReg";
// import ResetPassword from "./pages/auth/ResetPassword";
// import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
// import Contact from "./pages/Contact";
// import Dashboard from "./pages/Dashboard";
// import Home from "./pages/Home";
// import Layout from "./pages/Layout";
// import Achievement from "./pages/Achievement";
// import About from "./pages/About";
// import Project from "./pages/Project";

// import { useSelector } from "react-redux";
// function App() {
//   const { access_token } = useSelector(state => state.auth)
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="login" element={!access_token ? <LoginReg /> : <Navigate to="/dashboard" />} />
//             <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
//             <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
//           </Route>
//           <Route path="/dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login" />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/project" element={<Project />} />
//           <Route path="/achievement" element={<Achievement />} />

//           <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;





import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import MyMessages from './pages/MyMessages'; // Check path

import { useSelector } from "react-redux";

function App() {
  const { access_token } = useSelector((state) => state.auth);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="login"
              element={!access_token ? <LoginReg /> : <Navigate to="/dashboard" />}
            />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />

            <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
          </Route>
          <Route
            path="/dashboard"
            element={access_token ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/my-messages" element={<MyMessages />} />

          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

