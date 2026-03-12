// import React from "react";

// // import me from "../assets/me.jpg";
// import me from '../assets/me.jpg';

// import linkedin from "../assets/linkedin.png";
// import instagram from "../assets/instagram.png";
// import github from "../assets/github.png";
// import twitter from "../assets/twitter.png";

// import development from "../assets/development.png";
// import document from "../assets/document.png";
// import project from "../assets/project.png";

// const Home = () => {
//   return (
//     <section className="bg-gray-900 text-white min-h-screen rounded-md">
//       <main className="container mx-auto p-3">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//           {/* LEFT SIDE */}
//           <div className="md:col-span-1 space-y-6">

//             <div className="bg-gray-800 rounded-lg p-4 text-center flex flex-col md:flex-row">
//               <img
//                 src={me}
//                 alt="Ankush Gupta"
//                 className="w-40 h-40 rounded-full mx-auto mb-4"
//               />

//               <div className="p-4">
//                 <h2 className="text-xl font-semibold">
//                   Name : Ankush Gupta
//                 </h2>
//                 <p className="text-md font-bold">CSE - AI&DS</p>

//                 <p className="mt-5 text-xs font-bold">
//                   Sagar Institute Of Science & Technology College
//                 </p>

//                 <p className="text-xs font-bold">
//                   Gandhi Nagar Bhopal [M.P]
//                 </p>
//               </div>
//             </div>

//             {/* SKILLS */}
//             <div className="bg-gray-800 rounded-lg p-4">
//               <h3 className="text-lg font-semibold mb-2 text-purple-400">
//                 Skills
//               </h3>

//               <div className="bg-gray-700 rounded p-2 mb-2">
//                 <h4 className="font-semibold">Technical Skills</h4>
//                 <p>
//                   React JS, Django, JavaScript, Next JS,
//                   Python, C and C++
//                 </p>
//               </div>

//               <div className="bg-gray-700 rounded p-2 mb-2">
//                 <h4 className="font-semibold">My Hobbies</h4>
//                 <p>
//                   Communication, Team Work, Problem Solving,
//                   Time Management
//                 </p>
//               </div>

//               <div className="bg-gray-700 rounded p-2">
//                 <h4 className="font-semibold">Languages Known</h4>
//                 <p>Hindi, English</p>
//               </div>
//             </div>

//             <button className="bg-yellow-400 text-black font-bold py-2 rounded w-full">
//               <a
//                 href="/Documents/ankushgupta.pdf"
//                 download
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Download CV
//               </a>
//             </button>

//           </div>

//           {/* RIGHT SIDE */}
//           <div className="md:col-span-2">

//             <div className="md:flex md:justify-between">

//               <div className="md:w-[70%] p-11 flex flex-col space-y-12">

//                 <div className="text-center">

//                   <h2 className="text-3xl font-bold mb-4">
//                     Hi, My name is
//                     <span className="text-purple-400"> Ankush</span>
//                   </h2>

//                   <div className="mb-4 text-xl">
//                     And I am Passionate Developer
//                   </div>

//                 </div>

//                 {/* SOCIAL ICONS */}

//                 <div className="w-full md:flex md:flex-row md:justify-around">

//                   <div className="flex space-x-4 justify-around">

//                     <a
//                       href="https://www.linkedin.com"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <img
//                         src={linkedin}
//                         alt=""
//                         className="w-10 bg-white rounded-lg"
//                       />
//                     </a>

//                     <a
//                       href="https://github.com"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <img
//                         src={github}
//                         alt=""
//                         className="w-10 bg-white rounded-lg"
//                       />
//                     </a>

//                     <a
//                       href="https://instagram.com"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <img
//                         src={instagram}
//                         alt=""
//                         className="w-10 bg-white rounded-lg"
//                       />
//                     </a>

//                     <a
//                       href="https://twitter.com"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <img
//                         src={twitter}
//                         alt=""
//                         className="w-10 bg-white rounded-lg"
//                       />
//                     </a>

//                   </div>

//                   <div className="md:mt-0 mt-2">

//                     <a
//                       href="/Documents/ankushgupta.pdf"
//                       download
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <button className="bg-blue-500 text-white font-bold py-2 w-full md:w-36 rounded-lg">
//                         Hire Me
//                       </button>
//                     </a>

//                   </div>

//                 </div>

//               </div>

//               <div className="md:w-[30%] flex items-center">

//                 <img
//                   src={me}
//                   alt="Ankush Gupta"
//                   className="w-60 rounded-[10%] mx-auto mb-4"
//                 />

//               </div>

//             </div>

//             {/* PROJECT SECTION */}

//             <div className="p-4 text-center">

//               <h3 className="text-2xl font-semibold mb-4 text-purple-400">
//                 Some Project and Documentation
//               </h3>

//               <p>
//                 These are the Specialities and also you can
//                 suggest collaboration on projects.
//               </p>

//               <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">

//                 <div className="bg-gray-800 rounded-lg p-4 text-center">
//                   <img
//                     src={development}
//                     alt=""
//                     className="w-20 mx-auto mb-2"
//                   />
//                   <button className="bg-blue-500 text-white py-1 px-3 rounded">
//                     View More
//                   </button>
//                 </div>

//                 <div className="bg-gray-800 rounded-lg p-4 text-center">
//                   <img
//                     src={document}
//                     alt=""
//                     className="w-20 mx-auto mb-2"
//                   />
//                   <button className="bg-blue-500 text-white py-1 px-3 rounded">
//                     View More
//                   </button>
//                 </div>

//                 <div className="bg-gray-800 rounded-lg p-4 text-center">
//                   <img
//                     src={project}
//                     alt=""
//                     className="w-20 mx-auto mb-2"
//                   />
//                   <button className="bg-blue-500 text-white py-1 px-3 rounded">
//                     View More
//                   </button>
//                 </div>

//               </section>

//             </div>

//           </div>

//         </div>
//       </main>
//     </section>
//   );
// };

// export default Home;

// import { useScroll } from "../context/ScrollContext";
// import About from "./About";
// import Project from "./Project";
// import Contact from "./Contact";
// import LoginReg from "./auth/LoginReg";
//   import ClientSideTypewriter from "./ClientSideTypewriter";

// import me from "../assets/me.jpg";
// import linkedin from "../assets/linkedin.png";
// import instagram from "../assets/instagram.png";
// import github from "../assets/github.png";
// import twitter from "../assets/twitter.png";
// import development from "../assets/development.png";
// import document_ from "../assets/document.png";
// import project from "../assets/project.png";
// import cv from "../assets/ankushgupta.pdf";

// const Home = () => {
//   const { homeRef, aboutRef, projectRef, contactRef, loginRef } = useScroll();

//   return (
//     <div style={{ paddingTop: "64px" }}>
//       {/* ── HOME SECTION ── */}
//       <div ref={homeRef} style={{ minHeight: "100vh" }}>
//         <section className="bg-gray-900 text-white min-h-screen rounded-md">
//           <main className="container mx-auto p-3">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {/* LEFT SIDE */}
//               <div className="md:col-span-1 space-y-6">
//                 <div className="bg-gray-800 rounded-lg p-4 text-center flex flex-col md:flex-row">
//                   <img
//                     src={me}
//                     alt="Ankush Gupta"
//                     className="w-40 h-40 rounded-full mx-auto mb-4"
//                   />
//                   <div className="p-4">
//                     <h2 className="text-xl font-semibold">
//                       Name : Ankush Gupta
//                     </h2>
//                     <p className="text-md font-bold">CSE - AI&DS</p>
//                     <p className="mt-5 text-xs font-bold">
//                       Sagar Institute Of Science & Technology College
//                     </p>
//                     <p className="text-xs font-bold">
//                       Gandhi Nagar Bhopal [M.P]
//                     </p>
//                   </div>
//                 </div>

//                 {/* SKILLS */}
//                 <div className="bg-gray-800 rounded-lg p-4">
//                   <h3 className="text-lg font-semibold mb-2 text-purple-400">
//                     Skills
//                   </h3>
//                   <div className="bg-gray-700 rounded p-2 mb-2">
//                     <h4 className="font-semibold">Technical Skills</h4>
//                     <p>
//                       React JS, Django, JavaScript, Next JS, Python, C and C++
//                     </p>
//                   </div>
//                   <div className="bg-gray-700 rounded p-2 mb-2">
//                     <h4 className="font-semibold">My Hobbies</h4>
//                     <p>
//                       Communication, Team Work, Problem Solving, Time Management
//                     </p>
//                   </div>
//                   <div className="bg-gray-700 rounded p-2">
//                     <h4 className="font-semibold">Languages Known</h4>
//                     <p>Hindi, English</p>
//                   </div>
//                 </div>

//                 <button className="bg-yellow-400 text-black font-bold py-2 rounded w-full">
//                   <a
//                     href={cv}
//                     download
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Download CV
//                   </a>
//                 </button>
//               </div>

//               {/* RIGHT SIDE */}
//               <div className="md:col-span-2">
//                 <div className="md:flex md:justify-between">
//                   <div className="md:w-[70%] p-11 flex flex-col space-y-12">
//                     <div className="text-center">
//                       <h2 className="text-3xl font-bold mb-4">
//                         Hi, My name is{" "}
//                         <span className="text-purple-400">Ankush</span>
//                       </h2>
//                       <div className="mb-4 text-xl">
//                         And I am a Passionate Developer
//                       </div>

//                       <div className="text-xl text-purple-400 font-semibold">
//                         <ClientSideTypewriter />
//                       </div>
//                     </div>

//                     {/* SOCIAL ICONS */}
//                     <div className="w-full md:flex md:flex-row md:justify-around">
//                       <div className="flex space-x-4 justify-around">
//                         <a
//                           href="https://www.linkedin.com/in/ankush-gupta-b734b025b/"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <img
//                             src={linkedin}
//                             alt="LinkedIn"
//                             className="w-10 bg-white rounded-lg"
//                           />
//                         </a>
//                         <a
//                           href="https://github.com/ankushgupta05"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <img
//                             src={github}
//                             alt="GitHub"
//                             className="w-10 bg-white rounded-lg"
//                           />
//                         </a>
//                         <a
//                           href="https://instagram.com"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <img
//                             src={instagram}
//                             alt="Instagram"
//                             className="w-10 bg-white rounded-lg"
//                           />
//                         </a>
//                         <a
//                           href="https://x.com/ankushgupta0510"
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <img
//                             src={twitter}
//                             alt="Twitter"
//                             className="w-10 bg-white rounded-lg"
//                           />
//                         </a>
//                       </div>
//                       <div className="md:mt-0 mt-2">
//                         <a
//                           href={cv}
//                           download
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <button className="bg-blue-500 text-white font-bold py-2 w-full md:w-36 rounded-lg">
//                             Hire Me
//                           </button>
//                         </a>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="md:w-[30%] flex items-center">
//                     <img
//                       src={me}
//                       alt="Ankush Gupta"
//                       className="w-60 rounded-[10%] mx-auto mb-4"
//                     />
//                   </div>
//                 </div>

//                 {/* PROJECT PREVIEW */}
//                 <div className="p-4 text-center">
//                   <h3 className="text-2xl font-semibold mb-4 text-purple-400">
//                     Some Project and Documentation
//                   </h3>
//                   <p>
//                     These are the Specialities and also you can suggest
//                     collaboration on projects.
//                   </p>
//                   <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
//                     <div className="bg-gray-800 rounded-lg p-4 text-center">
//                       <img
//                         src={development}
//                         alt=""
//                         className="w-20 mx-auto mb-2"
//                       />
//                       <button className="bg-blue-500 text-white py-1 px-3 rounded">
//                         View More
//                       </button>
//                     </div>
//                     <div className="bg-gray-800 rounded-lg p-4 text-center">
//                       <img
//                         src={document_}
//                         alt=""
//                         className="w-20 mx-auto mb-2"
//                       />
//                       <button className="bg-blue-500 text-white py-1 px-3 rounded">
//                         View More
//                       </button>
//                     </div>
//                     <div className="bg-gray-800 rounded-lg p-4 text-center">
//                       <img src={project} alt="" className="w-20 mx-auto mb-2" />
//                       <button className="bg-blue-500 text-white py-1 px-3 rounded">
//                         View More
//                       </button>
//                     </div>
//                   </section>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </section>
//       </div>

//       {/* ── ABOUT SECTION ── */}
//       <div ref={aboutRef} style={{ minHeight: "100vh" }}>
//         <About />
//       </div>

//       {/* ── PROJECT SECTION ── */}
//       <div ref={projectRef} style={{ minHeight: "100vh" }}>
//         <Project />
//         {/* <section className="bg-gray-900 text-white min-h-screen p-8">
//           <div className="container mx-auto">
//             <h1 className="text-3xl font-bold mb-4 text-purple-400">Projects</h1>
//             <hr className="mb-6" />
//             <p>Project content goes here...</p>
//           </div>
//         </section> */}
//       </div>

//       {/* ── CONTACT SECTION ── */}
//       <div ref={contactRef} style={{ minHeight: "100vh" }}>
//         <Contact />
//       </div>

//       {/* ── LOGIN / SIGNUP SECTION ── */}
//       <div ref={loginRef} style={{ minHeight: "100vh" }}>
//         <LoginReg />
//       </div>
//     </div>
//   );
// };

// export default Home;

// import { useState } from "react";
// import { useScroll } from "../context/ScrollContext";
// import About from "./About";
// import Project from "./Project";
// import Contact from "./Contact";
// import LoginReg from "./auth/LoginReg";
// import ClientSideTypewriter from "./ClientSideTypewriter";

// import me from "../assets/me.jpg";
// import linkedin from "../assets/linkedin.png";
// import instagram from "../assets/instagram.png";
// import github from "../assets/github.png";
// import twitter from "../assets/twitter.png";
// import development from "../assets/development.png";
// import document_ from "../assets/document.png";
// import project from "../assets/project.png";
// import cv from "../assets/ankushgupta.pdf";

// const Home = () => {
//   const { homeRef, aboutRef, projectRef, contactRef } = useScroll();
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <div style={{ paddingTop: "64px" }}>

//       {/* ── LOGIN POPUP MODAL ── */}
//       {showLogin && (
//         <div
//           onClick={() => setShowLogin(false)}
//           style={{
//             position: "fixed",
//             top: "64px",
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(0,0,0,0.6)",
//             zIndex: 8000,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "flex-start",
//             paddingTop: "32px",
//             overflowY: "auto",
//           }}
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               background: "#fff",
//               borderRadius: "16px",
//               width: "90%",
//               maxWidth: "900px",
//               maxHeight: "85vh",
//               overflowY: "auto",
//               position: "relative",
//               boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
//             }}
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setShowLogin(false)}
//               style={{
//                 position: "absolute",
//                 top: "12px",
//                 right: "16px",
//                 background: "none",
//                 border: "none",
//                 fontSize: "1.6rem",
//                 cursor: "pointer",
//                 color: "#555",
//                 zIndex: 10,
//                 lineHeight: 1,
//               }}
//             >
//               ✕
//             </button>

//             <LoginReg />
//           </div>
//         </div>
//       )}

//       {/* ── HOME SECTION ── */}
//       <div ref={homeRef} style={{ minHeight: "100vh" }}>
//         <section className="bg-gray-900 text-white min-h-screen rounded-md">
//           <main className="container mx-auto p-3">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//               {/* LEFT SIDE */}
//               <div className="md:col-span-1 space-y-6">
//                 <div className="bg-gray-800 rounded-lg p-4 text-center flex flex-col md:flex-row">
//                   <img
//                     src={me}
//                     alt="Ankush Gupta"
//                     className="w-40 h-40 rounded-full mx-auto mb-4"
//                   />
//                   <div className="p-4">
//                     <h2 className="text-xl font-semibold">Name : Ankush Gupta</h2>
//                     <p className="text-md font-bold">CSE - AI&DS</p>
//                     <p className="mt-5 text-xs font-bold">
//                       Sagar Institute Of Science & Technology College
//                     </p>
//                     <p className="text-xs font-bold">Gandhi Nagar Bhopal [M.P]</p>
//                   </div>
//                 </div>

//                 {/* SKILLS */}
//                 <div className="bg-gray-800 rounded-lg p-4">
//                   <h3 className="text-lg font-semibold mb-2 text-purple-400">Skills</h3>
//                   <div className="bg-gray-700 rounded p-2 mb-2">
//                     <h4 className="font-semibold">Technical Skills</h4>
//                     <p>React JS, Django, JavaScript, Next JS, Python, C and C++</p>
//                   </div>
//                   <div className="bg-gray-700 rounded p-2 mb-2">
//                     <h4 className="font-semibold">My Hobbies</h4>
//                     <p>Communication, Team Work, Problem Solving, Time Management</p>
//                   </div>
//                   <div className="bg-gray-700 rounded p-2">
//                     <h4 className="font-semibold">Languages Known</h4>
//                     <p>Hindi, English</p>
//                   </div>
//                 </div>

//                 <button className="bg-yellow-400 text-black font-bold py-2 rounded w-full">
//                   <a href={cv} download target="_blank" rel="noopener noreferrer">
//                     Download CV
//                   </a>
//                 </button>
//               </div>

//               {/* RIGHT SIDE */}
//               <div className="md:col-span-2">
//                 <div className="md:flex md:justify-between">
//                   <div className="md:w-[70%] p-11 flex flex-col space-y-12">
//                     <div className="text-center">
//                       <h2 className="text-3xl font-bold mb-4">
//                         Hi, My name is{" "}
//                         <span className="text-purple-400">Ankush</span>
//                       </h2>
//                       <div className="mb-4 text-xl">
//                         And I am a Passionate Developer
//                       </div>
//                       <div className="text-xl text-purple-400 font-semibold">
//                         <ClientSideTypewriter />
//                       </div>
//                     </div>

//                     {/* SOCIAL ICONS */}
//                     <div className="w-full md:flex md:flex-row md:justify-around">
//                       <div className="flex space-x-4 justify-around">
//                         <a href="https://www.linkedin.com/in/ankush-gupta-b734b025b/" target="_blank" rel="noreferrer">
//                           <img src={linkedin} alt="LinkedIn" className="w-10 bg-white rounded-lg" />
//                         </a>
//                         <a href="https://github.com/ankushgupta05" target="_blank" rel="noreferrer">
//                           <img src={github} alt="GitHub" className="w-10 bg-white rounded-lg" />
//                         </a>
//                         <a href="https://instagram.com" target="_blank" rel="noreferrer">
//                           <img src={instagram} alt="Instagram" className="w-10 bg-white rounded-lg" />
//                         </a>
//                         <a href="https://x.com/ankushgupta0510" target="_blank" rel="noreferrer">
//                           <img src={twitter} alt="Twitter" className="w-10 bg-white rounded-lg" />
//                         </a>
//                       </div>
//                       <div className="md:mt-0 mt-2">
//                         <a href={cv} download target="_blank" rel="noopener noreferrer">
//                           <button className="bg-blue-500 text-white font-bold py-2 w-full md:w-36 rounded-lg">
//                             Hire Me
//                           </button>
//                         </a>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="md:w-[30%] flex items-center">
//                     <img src={me} alt="Ankush Gupta" className="w-60 rounded-[10%] mx-auto mb-4" />
//                   </div>
//                 </div>

//                 {/* PROJECT PREVIEW */}
//                 <div className="p-4 text-center">
//                   <h3 className="text-2xl font-semibold mb-4 text-purple-400">
//                     Some Project and Documentation
//                   </h3>
//                   <p>These are the Specialities and also you can suggest collaboration on projects.</p>
//                   <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
//                     <div className="bg-gray-800 rounded-lg p-4 text-center">
//                       <img src={development} alt="" className="w-20 mx-auto mb-2" />
//                       <button className="bg-blue-500 text-white py-1 px-3 rounded">View More</button>
//                     </div>
//                     <div className="bg-gray-800 rounded-lg p-4 text-center">
//                       <img src={document_} alt="" className="w-20 mx-auto mb-2" />
//                       <button className="bg-blue-500 text-white py-1 px-3 rounded">View More</button>
//                     </div>
//                     <div className="bg-gray-800 rounded-lg p-4 text-center">
//                       <img src={project} alt="" className="w-20 mx-auto mb-2" />
//                       <button className="bg-blue-500 text-white py-1 px-3 rounded">View More</button>
//                     </div>
//                   </section>
//                 </div>
//               </div>

//             </div>
//           </main>
//         </section>
//       </div>

//       {/* ── ABOUT SECTION ── */}
//       <div ref={aboutRef} style={{ minHeight: "100vh" }}>
//         <About />
//       </div>

//       {/* ── PROJECT SECTION ── */}
//       <div ref={projectRef} style={{ minHeight: "100vh" }}>
//         <Project />
//       </div>

//       {/* ── CONTACT SECTION ── */}
//       <div ref={contactRef} style={{ minHeight: "100vh" }}>
//         <Contact />
//       </div>

//     </div>
//   );
// };

// export default Home;

import { useState } from "react";
import { useScroll } from "../context/ScrollContext";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Achievement from "./Achievement";
import ClientSideTypewriter from "./ClientSideTypewriter";

import me from "../assets/me.jpg";
import me_5 from "../assets/img_5.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";
import twitter from "../assets/twitter.png";
import development from "../assets/development.png";
import document_ from "../assets/document.png";
import project from "../assets/project.png";
import cv from "../assets/Ankush_GuptaUpdated.pdf";

const Home = () => {
  const { homeRef, aboutRef, projectRef, contactRef, achievementRef } =
    useScroll();

  return (
    <div style={{ paddingTop: "64px" }}>
      {/* ── HOME SECTION ── */}
      <div ref={homeRef} style={{ minHeight: "100vh" }}>
        <section className="bg-gray-900 text-white min-h-screen">
          <main className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* LEFT SIDEBAR */}
              <div className="md:col-span-1 space-y-4">
                {/* Profile Card */}
                <div className="bg-gray-800 rounded-2xl p-5 flex flex-col items-center text-center border border-purple-900">
                  <img
                    src={me}
                    alt="Ankush Gupta"
                    className="w-28 h-28 rounded-full mb-3 border-4 border-purple-500 object-cover"
                  />
                  <h2 className="text-lg font-bold text-white">Ankush Gupta</h2>
                  <span className="text-xs bg-purple-700 text-purple-100 px-3 py-1 rounded-full mt-1 font-semibold">
                    B.Tech AI &amp; DS
                  </span>
                  <p className="text-xs text-gray-400 mt-2">
                    SISTec GN, Gandhi Nagar
                  </p>
                  <p className="text-xs text-gray-400">Bhopal, M.P. — 462036</p>
                  <p className="text-xs text-purple-400 mt-1">
                    ankushgupta0510@gmail.com
                  </p>
                  <p className="text-xs text-gray-400">+91-7225011473</p>
                  <div className="mt-3 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse"></span>
                    <span className="text-xs text-green-400 font-semibold">
                      Available for Work
                    </span>
                  </div>
                </div>

                {/* Skills Card */}
                <div className="bg-gray-800 rounded-2xl p-5 border border-purple-900">
                  <h3 className="text-base font-bold mb-3 text-purple-400 border-b border-purple-800 pb-2">
                    Key Expertise
                  </h3>
                  {[
                    { label: "React / Next.js", pct: 90 },
                    { label: "Django / DRF", pct: 88 },
                    { label: "Python / ML", pct: 82 },
                    { label: "AWS / DevOps", pct: 75 },
                    { label: "SQL / NoSQL", pct: 78 },
                  ].map((s) => (
                    <div key={s.label} className="mb-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300 font-medium">
                          {s.label}
                        </span>
                        <span className="text-purple-400">{s.pct}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-indigo-400 h-1.5 rounded-full"
                          style={{ width: `${s.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="bg-gray-800 rounded-2xl p-5 border border-purple-900">
                  <h3 className="text-base font-bold mb-3 text-purple-400 border-b border-purple-800 pb-2">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "HTML/CSS",
                      "Tailwind",
                      "Bootstrap",
                      "React",
                      "Node.js",
                      "Python",
                      "C/C++",
                      "AWS",
                      "Docker",
                      "Git",
                      "Django",
                      "Kubernetes",
                      "Linux",
                      "CI/CD",
                      "SQL",
                      "Grafana",
                    ].map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-lg border border-gray-600 hover:border-purple-500 hover:text-purple-300 transition"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Download CV */}
                <a
                  href={cv}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 rounded-2xl transition shadow-lg shadow-purple-900/40">
                    ⬇ Download CV
                  </button>
                </a>
              </div>

              {/* RIGHT MAIN */}
              <div className="md:col-span-2 space-y-6">
                {/* Hero Banner */}
                <div className="bg-gray-800 rounded-2xl p-6 border border-purple-900 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex-1">
                    <p className="text-xs text-purple-400 font-semibold tracking-widest uppercase mb-2">
                      Full Stack Developer · AI &amp; DS
                    </p>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-2">
                      Hi, I'm{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                        Ankush Gupta
                      </span>
                    </h1>
                    <div className="text-lg text-gray-300 mb-3 h-8">
                      <ClientSideTypewriter />
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-lg">
                      Passionate Full Stack Developer skilled in web
                      development, AI, and machine learning. Experienced in
                      building scalable applications using Django, React, and
                      AWS. CGPA:{" "}
                      <span className="text-purple-400 font-bold">7.81/10</span>
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-3 mt-4 flex-wrap">
                      <a
                        href="https://www.linkedin.com/in/ankush-gupta-b734b025b/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white text-xs font-semibold px-3 py-2 rounded-lg transition"
                      >
                        <img
                          src={linkedin}
                          alt="LinkedIn"
                          className="w-4 h-4"
                        />{" "}
                        LinkedIn
                      </a>
                      <a
                        href="https://github.com/ankushgupta05"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white text-xs font-semibold px-3 py-2 rounded-lg transition"
                      >
                        <img src={github} alt="GitHub" className="w-4 h-4" />{" "}
                        GitHub
                      </a>
                      <a
                        href="https://ankushgupta-portfolio.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-purple-700 hover:bg-purple-600 text-white text-xs font-semibold px-3 py-2 rounded-lg transition"
                      >
                        🌐 Portfolio
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-pink-700 hover:bg-pink-600 text-white text-xs font-semibold px-3 py-2 rounded-lg transition"
                      >
                        <img
                          src={instagram}
                          alt="Instagram"
                          className="w-4 h-4"
                        />{" "}
                        Instagram
                      </a>
                      <a
                        href="https://x.com/ankushgupta0510"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 bg-sky-700 hover:bg-sky-600 text-white text-xs font-semibold px-3 py-2 rounded-lg transition"
                      >
                        <img src={twitter} alt="Twitter" className="w-4 h-4" />{" "}
                        Twitter
                      </a>
                    </div>

                    <div className="mt-4">
                      <a
                        href={cv}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-6 rounded-xl transition shadow-md">
                          Hire Me 🚀
                        </button>
                      </a>
                    </div>
                  </div>

                  <img
                    src={me_5}
                    alt="Ankush Gupta"
                    className="w-36 h-36 md:w-44 md:h-44 rounded-2xl object-cover object-[center_15%] border-4 border-purple-600 shadow-xl shadow-purple-900/50 flex-shrink-0"
                  />
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { num: "7.81", label: "CGPA", sub: "B.Tech AI&DS" },
                    { num: "2+", label: "Projects", sub: "Live Deployed" },
                    { num: "4mo", label: "Internship", sub: "SkillQuest" },
                    { num: "10+", label: "Tech Stack", sub: "Skills" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-gray-800 rounded-2xl p-4 text-center border border-purple-900 hover:border-purple-500 transition"
                    >
                      <p className="text-2xl font-extrabold text-purple-400">
                        {s.num}
                      </p>
                      <p className="text-sm font-bold text-white">{s.label}</p>
                      <p className="text-xs text-gray-500">{s.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Internship Highlight */}
                <div className="bg-gray-800 rounded-2xl p-5 border border-purple-900">
                  <h3 className="text-base font-bold text-purple-400 mb-3 border-b border-purple-800 pb-2">
                    💼 Latest Internship
                  </h3>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <p className="text-white font-bold">
                        Software Intern — SkillQuest Learnings
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Jan 2025 – Apr 2025
                      </p>
                      <p className="text-sm text-gray-300 mt-2 max-w-lg">
                        Built a trading-like platform for real-time stock
                        analytics using React and Python. Integrated live market
                        data APIs and developed interactive dashboards.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {[
                          "React.js",
                          "Python",
                          "API Integration",
                          "Data Visualization",
                          "Team Collaboration",
                        ].map((t) => (
                          <span
                            key={t}
                            className="text-xs bg-indigo-900 text-indigo-300 px-2 py-1 rounded-lg"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Preview Cards */}
                <div className="bg-gray-800 rounded-2xl p-5 border border-purple-900">
                  <h3 className="text-base font-bold text-purple-400 mb-4 border-b border-purple-800 pb-2">
                    🚀 Featured Projects
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        img: development,
                        title: "Interview-Sathi",
                        desc: "AI-powered mock interview platform with LLM-based question generation.",
                        link: "https://interview-sathi.vercel.app/",
                        tags: ["React", "Django", "LLM", "AWS"],
                      },
                      {
                        img: document_,
                        title: "Eye Disease AI",
                        desc: "CNN-based web app for detection of cataracts, glaucoma & diabetic retinopathy.",
                        link: "#",
                        tags: ["Python", "CNN", "Django", "React"],
                      },
                      {
                        img: project,
                        title: "Stock Analytics",
                        desc: "Real-time stock analytics platform with live market data API integration.",
                        link: "#",
                        tags: ["React", "Python", "APIs"],
                      },
                    ].map((p) => (
                      <div
                        key={p.title}
                        className="bg-gray-700 rounded-xl p-4 border border-gray-600 hover:border-purple-500 transition group"
                      >
                        <img
                          src={p.img}
                          alt={p.title}
                          className="w-12 h-12 mx-auto mb-3 object-contain"
                        />
                        <h4 className="text-sm font-bold text-white text-center mb-1">
                          {p.title}
                        </h4>
                        <p className="text-xs text-gray-400 text-center mb-3">
                          {p.desc}
                        </p>
                        <div className="flex flex-wrap gap-1 justify-center mb-3">
                          {p.tags.map((t) => (
                            <span
                              key={t}
                              className="text-xs bg-gray-600 text-gray-300 px-2 py-0.5 rounded"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="block text-center bg-indigo-700 hover:bg-indigo-600 text-white text-xs font-semibold py-1.5 rounded-lg transition"
                        >
                          View More ↗
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>

      {/* ── ABOUT SECTION ── */}
      <div ref={aboutRef} style={{ minHeight: "100vh" }}>
        <About />
      </div>

      {/* ── PROJECT SECTION ── */}
      <div ref={projectRef} style={{ minHeight: "100vh" }}>
        <Project />
      </div>

      {/* ── CONTACT SECTION ── */}
      <div ref={contactRef} style={{ minHeight: "100vh" }}>
        <Contact />
      </div>

      {/* ── ACHIEVEMENT SECTION ── */}
      <div ref={achievementRef} style={{ minHeight: "100vh" }}>
        <Achievement />
      </div>
    </div>
  );
};

export default Home;
