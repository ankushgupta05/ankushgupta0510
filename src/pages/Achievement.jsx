// import React from "react";
// import developer from "../assets/development.png";

// const Achievement = () => {

//   const timelineData = [
//     {
//       title: "Full Stack Developer",
//       period: "(2022-2023)",
//       description:
//         "This is my achievement that I am a Full Stack Developer. I can work with JavaScript, React JS projects and also I am experienced with MongoDB database (MERN STACK).",
//     },
//     {
//       title: "Machine Learning",
//       period: "(Current)",
//       description:
//         "Learning machine learning algorithms and exploring AI technologies to improve problem solving and data analysis skills.",
//     },
//     {
//       title: "HTML Developer",
//       period: "(2023-2024)",
//       description:
//         "Built responsive websites using modern HTML, CSS and JavaScript with clean UI and optimized performance.",
//     },
//     {
//       title: "Frontend Developer",
//       period: "(2023-2024)",
//       description:
//         "Created multiple UI projects using React, Tailwind CSS and modern frontend frameworks.",
//     },
//     {
//       title: "React Developer",
//       period: "(2024)",
//       description:
//         "Developed dynamic web applications with reusable components and modern React practices.",
//     },
//     {
//       title: "MERN Stack Developer",
//       period: "(2024)",
//       description:
//         "Worked on full stack projects using MongoDB, Express, React and Node.js.",
//     },
//   ];

//   return (
//     <div className="bg-gray-900 text-white min-h-screen pt-20 md:p-12 rounded-md">

//       {/* Heading */}
//       <div className="px-3">
//         <h2 className="text-lg mb-3">My Achievement</h2>

//         <h1 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">
//           Future Goal
//         </h1>

//         <hr className="md:w-[15%] w-[50%] border-purple-700" />
//       </div>

//       {/* Timeline */}
//       <div className="relative md:mt-32 mt-40">

//         {/* Timeline Line */}
//         <div className="absolute h-1 w-full bg-purple-500 top-8 left-0"></div>

//         <div className="flex flex-nowrap overflow-x-auto pb-20 md:pb-32 scrollbar-hide">

//           {timelineData.map((item, index) => (
//             <div
//               key={index}
//               className="flex-none w-64 mx-4 first:ml-0 last:mr-0"
//             >

//               <div className="flex flex-col items-center text-center">

//                 {/* Icon */}
//                 <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center z-10 mb-4 border border-purple-500 shadow-lg">
//                   <img src={developer} alt="icon" className="w-8 h-8" />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-lg font-semibold mb-2">
//                   {item.title}
//                 </h3>

//                 {/* Period */}
//                 <p className="text-sm text-purple-400">
//                   {item.period}
//                 </p>

//                 {/* Description */}
//                 <p className="text-xs text-gray-400 mt-2 leading-relaxed">
//                   {item.description}
//                 </p>

//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Achievement;




import developer from "../assets/development.png";

const TIMELINE = [
  {
    title: "Full Stack Developer",
    period: "2022 – 2023",
    color: "from-purple-600 to-indigo-600",
    desc: "Became a Full Stack Developer working with JS, React, MongoDB (MERN Stack). Built complete web applications from scratch.",
  },
  {
    title: "HTML/CSS Developer",
    period: "2023",
    color: "from-indigo-600 to-blue-600",
    desc: "Built responsive websites with modern HTML, CSS and JavaScript with clean UI and optimized performance.",
  },
  {
    title: "Frontend Developer",
    period: "2023 – 2024",
    color: "from-blue-600 to-cyan-600",
    desc: "Created multiple UI projects using React, Tailwind CSS and modern frontend frameworks.",
  },
  {
    title: "React Developer",
    period: "2024",
    color: "from-cyan-600 to-teal-600",
    desc: "Developed dynamic web applications with reusable components and modern React best practices.",
  },
  {
    title: "MERN Stack Developer",
    period: "2024",
    color: "from-teal-600 to-green-600",
    desc: "Worked on full stack projects using MongoDB, Express, React and Node.js end-to-end.",
  },
  {
    title: "Machine Learning",
    period: "2024 – Present",
    color: "from-green-600 to-yellow-600",
    desc: "Learning ML algorithms, TensorFlow, Scikit-learn. Built CNN-based Eye Disease Classification System.",
  },
  {
    title: "DevOps / Cloud",
    period: "2024 – Present",
    color: "from-yellow-600 to-orange-600",
    desc: "Working with AWS (EC2, S3, Lambda, RDS), Docker, Kubernetes, Jenkins, Ansible and CI/CD pipelines.",
  },
  {
    title: "Software Intern",
    period: "Jan – Apr 2025",
    color: "from-orange-600 to-red-600",
    desc: "SkillQuest Learnings internship — built real-time stock analytics platform with React and Python.",
  },
];

const AWARDS = [
  { icon: "🏆", title: "Smart India Hackathon (SIH)", desc: "Participated in national level hackathon" },
  { icon: "📜", title: "NPTEL Certificate", desc: "The Joy of Computing Using Python — 72%" },
  { icon: "🎓", title: "DSA Certification", desc: "Data Structures & Algorithms in C — 85/100" },
  { icon: "🐍", title: "Python Essentials 1 & 2", desc: "Score: 90/100" },
  { icon: "🌐", title: "Live Portfolio", desc: "ankushgupta-portfolio.vercel.app" },
  { icon: "🤖", title: "ML & Deep Learning", desc: "SISTec Training Feb 2025 (10 days)" },
];

const Achievement = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-4">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-purple-400 bg-purple-900/30 px-4 py-1.5 rounded-full border border-purple-700">
            Achievements
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Journey & Goals
            </span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded mt-3" />
        </div>

        {/* Timeline */}
        <h2 className="text-xl font-bold text-purple-400 mb-6">🗓 Timeline</h2>
        <div className="relative mb-14">
          {/* vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-purple-800 md:left-1/2 md:-ml-px" />

          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <div
                key={item.title}
                className={`relative flex flex-col md:flex-row gap-4 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center border-2 border-gray-900 shadow-lg`}>
                    <img src={developer} alt="" className="w-5 h-5" />
                  </div>
                </div>

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                  <div className="bg-gray-800 rounded-2xl p-5 border border-gray-700 hover:border-purple-500 transition shadow">
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-1">
                      <h3 className="font-extrabold text-white">{item.title}</h3>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${item.color} text-white`}>
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Grid */}
        <h2 className="text-xl font-bold text-purple-400 mb-6">🏅 Awards & Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {AWARDS.map((a) => (
            <div
              key={a.title}
              className="bg-gray-800 rounded-2xl p-5 border border-gray-700 hover:border-purple-500 transition flex gap-4 items-start"
            >
              <span className="text-3xl flex-shrink-0">{a.icon}</span>
              <div>
                <h3 className="font-bold text-white text-sm">{a.title}</h3>
                <p className="text-xs text-gray-400 mt-1">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Achievement;