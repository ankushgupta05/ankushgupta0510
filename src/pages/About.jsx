// import React from "react";
// import me_2 from "../assets/me_2.jpg";

// const About = () => {
//   return (
//     <main className="bg-gray-900 rounded-md">

//       {/* Quote Section */}
//       <section className="text-white font-sans body-font">
//         <div className="container px-5 py-3 mx-auto">
//           <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">

//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               className="inline-block w-8 h-8 text-gray-400 mb-8"
//               viewBox="0 0 975.036 975.036"
//             >
//               <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50z"></path>
//             </svg>

//             <p className="leading-relaxed text-lg">
//               Edison bulb retro cloud bread echo park, taxidermy 90's cronut +1
//               kinfolk. Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Nisi quasi enim neque nemo rerum in.
//             </p>

//             <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-4 mb-2"></span>

//             <p className="text-[#aa6be4] font-bold font-serif">
//               Fresher's Full-Stack Web Developer
//             </p>

//           </div>
//         </div>
//       </section>

//       {/* Profile Section */}
//       <section className="text-gray-600 body-font">
//         <div className="container mx-auto flex flex-col px-5 justify-center items-center">

//           <img
//             src={me_2}
//             alt="Ankush Gupta"
//             className="rounded-[10%] mx-auto mb-4 w-[250px] h-[250px] object-cover"
//           />

//           <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">

//             <h1 className="title-font font-serif sm:text-3xl text-2xl mb-4 font-medium text-white">
//               Ankush Gupta
//             </h1>

//             <div className="mb-8 leading-relaxed text-white text-xs">
//               <p>
//                 Passionate Full Stack Developer skilled in React, Next.js,
//                 Django REST Framework, and modern web technologies.
//               </p>

//               <p>
//                 I enjoy building scalable web applications and learning new
//                 technologies to improve my development skills.
//               </p>
//             </div>

//           </div>

//         </div>
//       </section>

//     </main>
//   );
// };

// export default About;




import me_2 from "../assets/img_4.jpeg";

const About = () => {
  const education = [
    { degree: "B.Tech — AI & Data Science", school: "SISTec GN, Bhopal", year: "2022 – 2026", score: "CGPA: 7.81/10" },
    { degree: "12th — MPBSE", school: "Prerna Kiran Public H.S. School, Bhopal", year: "2022", score: "81%" },
    { degree: "10th — MPBSE", school: "Prerna Kiran Public H.S. School, Bhopal", year: "2020", score: "83%" },
  ];

  const certifications = [
    { title: "Data Structures & Algorithms in C", score: "85/100", tags: ["DSA", "Linked Lists", "Trees", "Graphs", "Sorting"] },
    { title: "Python Essentials 1 & 2", score: "90/100", tags: ["Python", "OOP", "Functions", "Data Structures"] },
    { title: "The Joy of Computing Using Python", score: "72% — NPTEL", tags: ["Python", "Computing", "NPTEL"] },
  ];

  return (
    <main className="bg-gray-900 text-white min-h-screen py-10 px-4">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-purple-400 bg-purple-900/30 px-4 py-1.5 rounded-full border border-purple-700">
            About Me
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4 mb-2">
            Know Who{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              I Am
            </span>
          </h1>
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded mx-auto" />
        </div>

        {/* Profile + Summary */}
        <div className="flex flex-col md:flex-row gap-8 mb-10 items-center">
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={me_2}
                alt="Ankush Gupta"
                className="w-44 h-62 rounded-2xl object-cover border-4 border-purple-600 shadow-2xl shadow-purple-900/50"
              />
              <span className="absolute -bottom-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Open to Work
              </span>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1">Ankush Gupta</h2>
            <p className="text-purple-400 font-semibold text-sm mb-3">
              Full Stack Developer · AI &amp; Data Science · SISTec GN
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Passionate Full Stack Developer skilled in web development, AI, and machine learning.
              Experienced in building scalable applications using Django, Flask, React, and NodeJS.
              Proficient in backend architectures with SQL/NoSQL databases and cloud services (AWS: EC2, S3, Lambda, RDS, DynamoDB).
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Skilled in DevOps tools (Git, GitHub, Docker, Ansible, Jenkins). Enthusiastic about
              hackathons and building end-to-end AI-powered applications.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "📍 Location", val: "Bhopal, M.P., India" },
                { label: "📧 Email", val: "ankushgupta0510@gmail.com" },
                { label: "📱 Phone", val: "+91-7225011473" },
                { label: "🎂 DOB", val: "05 Oct, 2004" },
                { label: "💼 Status", val: "Open to Opportunities" },
                { label: "🗣 Languages", val: "Hindi, English" },
              ].map((item) => (
                <div key={item.label} className="bg-gray-800 rounded-xl p-3 border border-gray-700">
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="text-sm text-white font-medium mt-0.5 break-all">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
            🎓 Education
          </h2>
          <div className="space-y-3">
            {education.map((e) => (
              <div key={e.degree} className="bg-gray-800 rounded-2xl p-5 border border-purple-900 flex flex-col md:flex-row justify-between gap-2">
                <div>
                  <h3 className="font-bold text-white">{e.degree}</h3>
                  <p className="text-sm text-gray-400">{e.school}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-sm font-bold text-purple-400">{e.score}</span>
                  <p className="text-xs text-gray-500">{e.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Co-curricular & Extra */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-800 rounded-2xl p-5 border border-purple-900">
            <h2 className="text-base font-bold text-purple-400 mb-3">🏆 Co-Curricular</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex gap-2"><span className="text-purple-400">▸</span>Participated in Smart India Hackathon (SIH)</li>
              <li className="flex gap-2"><span className="text-purple-400">▸</span>Attended "Nirman" seminars in 2023 and 2024</li>
              <li className="flex gap-2"><span className="text-purple-400">▸</span>Completed Power BI and Advanced Excel training</li>
              <li className="flex gap-2"><span className="text-purple-400">▸</span>Created live portfolio showcasing technical work</li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-2xl p-5 border border-purple-900">
            <h2 className="text-base font-bold text-purple-400 mb-3">🎯 Personal Interests</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex gap-2"><span className="text-purple-400">▸</span>Coding &amp; Exploring New Technologies</li>
              <li className="flex gap-2"><span className="text-purple-400">▸</span>Playing Chess</li>
              <li className="flex gap-2"><span className="text-purple-400">▸</span>Communication &amp; Team Work</li>
              <li className="flex gap-2"><span className="text-purple-400">▸</span>Problem Solving &amp; Time Management</li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-xl font-bold text-purple-400 mb-4">📜 Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((c) => (
              <div key={c.title} className="bg-gray-800 rounded-2xl p-5 border border-purple-900 hover:border-purple-500 transition">
                <p className="text-sm font-bold text-white mb-1">{c.title}</p>
                <p className="text-xs text-green-400 font-semibold mb-3">{c.score}</p>
                <div className="flex flex-wrap gap-1">
                  {c.tags.map((t) => (
                    <span key={t} className="text-xs bg-purple-900/50 text-purple-300 px-2 py-0.5 rounded-lg border border-purple-800">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default About;