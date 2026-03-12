// import React from "react";
// import product1 from "../assets/Imge1.jpg";
// import product2 from "../assets/Imge2.jpg";
// import product3 from "../assets/Imge3.jpg";

// const Project = () => {
//   return (
//     <section className="text-gray-600 bg-gray-900 body-font rounded-md">
//       <div className="container px-5 py-16 mx-auto">

//         {/* Heading */}
//         <div className="flex flex-wrap w-full mb-20">
//           <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
//             <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-white font-serif">
//               <p>Project&apos;s! Developed By</p>
//               <p className="text-[#aa6be4]">Ankush Gupta</p>
//             </h1>
//             <div className="h-1 w-20 bg-[#aa6be4] rounded"></div>
//           </div>

//           <p className="lg:w-1/2 w-full leading-relaxed text-white font-bold">
//             Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
//             gentrify, subway tile poke farm-to-table. Franzen you probably
//             haven&apos;t heard of them man bun deep jianbing selfies heirloom
//             prism food truck ugh squid celiac humblebrag.
//           </p>
//         </div>

//         {/* Project Cards */}
//         <div className="flex flex-wrap -m-4">

//           {/* Card 1 */}
//           <div className="xl:w-1/4 md:w-1/2 p-4">
//             <div className="bg-gray-800 p-6 rounded-lg">
//               <img
//                 src={product1}
//                 alt="project"
//                 className="h-40 rounded w-full object-cover object-center mb-6"
//               />

//               <h3 className="tracking-widest text-[#aa6be4] text-xs font-bold title-font">
//                 Title
//               </h3>

//               <h2 className="text-lg text-white font-bold title-font mb-4">
//                 Chichen Itza
//               </h2>

//               <p className="leading-relaxed text-base text-white">
//                 Fingerstache flexitarian street art 8-bit waistcoat.
//                 Distillery hexagon disrupt edison bulb.
//               </p>

//               <div className="text-center">
//                 <a className="text-indigo-500 inline-flex items-center mt-3">
//                   Learn More
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-4 h-4 ml-2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M5 12h14M12 5l7 7-7 7"></path>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="xl:w-1/4 md:w-1/2 p-4">
//             <div className="bg-gray-800 p-6 rounded-lg">
//               <img
//                 src={product2}
//                 alt="project"
//                 className="h-40 rounded w-full object-cover object-center mb-6"
//               />

//               <h3 className="tracking-widest text-[#aa6be4] text-xs font-bold title-font">
//                 Title
//               </h3>

//               <h2 className="text-lg text-white font-bold title-font mb-4">
//                 Chichen Itza
//               </h2>

//               <p className="leading-relaxed text-base text-white">
//                 Fingerstache flexitarian street art 8-bit waistcoat.
//                 Distillery hexagon disrupt edison bulb.
//               </p>

//               <div className="text-center">
//                 <a className="text-indigo-500 inline-flex items-center mt-3">
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="xl:w-1/4 md:w-1/2 p-4">
//             <div className="bg-gray-800 p-6 rounded-lg">
//               <img
//                 src={product3}
//                 alt="project"
//                 className="h-40 rounded w-full object-cover object-center mb-6"
//               />

//               <h3 className="tracking-widest text-[#aa6be4] text-xs font-bold title-font">
//                 Title
//               </h3>

//               <h2 className="text-lg text-white font-bold title-font mb-4">
//                 Chichen Itza
//               </h2>

//               <p className="leading-relaxed text-base text-white">
//                 Fingerstache flexitarian street art 8-bit waistcoat.
//                 Distillery hexagon disrupt edison bulb.
//               </p>

//               <div className="text-center">
//                 <a className="text-indigo-500 inline-flex items-center mt-3">
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="xl:w-1/4 md:w-1/2 p-4">
//             <div className="bg-gray-800 p-6 rounded-lg">
//               <img
//                 src={product2}
//                 alt="project"
//                 className="h-40 rounded w-full object-cover object-center mb-6"
//               />

//               <h3 className="tracking-widest text-[#aa6be4] text-xs font-bold title-font">
//                 Title
//               </h3>

//               <h2 className="text-lg text-white font-bold title-font mb-4">
//                 Chichen Itza
//               </h2>

//               <p className="leading-relaxed text-base text-white">
//                 Fingerstache flexitarian street art 8-bit waistcoat.
//                 Distillery hexagon disrupt edison bulb.
//               </p>

//               <div className="text-center">
//                 <a className="text-indigo-500 inline-flex items-center mt-3">
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project;

import product1 from "../assets/Imge1.jpg";
import product2 from "../assets/Imge2.jpg";
import product3 from "../assets/Imge3.jpg";

const PROJECTS = [
  {
    img: product1,
    tag: "AI / Full Stack",
    title: "Interview-Sathi",
    period: "Jan 2025 - Jul 2025",
    team: "Team Size: 4",
    mentor: "Asst. Prof. Ruchi Jain",
    desc: "AI-powered mock interview platform. Built real-time interview flow, LLM-based question generation, and speech integration for an interactive experience.",
    link: "https://interview-sathi.vercel.app/",
    tags: [
      "Python",
      "NLP",
      "LLM",
      "React",
      "Django",
      "DRF",
      "PDF Parsing",
      "AWS",
    ],
  },
  {
    img: product2,
    tag: "Machine Learning",
    title: "Eye Disease Classification",
    period: "Jul 2024 - Dec 2024",
    team: "Team Size: 2",
    mentor: "Asst. Prof. Ruchi Jain",
    desc: "Web app for detection of cataracts, glaucoma, and diabetic retinopathy. Built CNN-based image analysis, symptom input flow, and secure authentication.",
    link: "#",
    tags: ["Python", "CNN", "Machine Learning", "React", "Django", "DRF"],
  },
  {
    img: product3,
    tag: "Frontend / Data",
    title: "Stock Analytics Platform",
    period: "Jan 2025 - Apr 2025",
    team: "SkillQuest Internship",
    mentor: "SkillQuest Learnings",
    desc: "Trading-like platform for real-time stock analytics using React and Python. Integrated live market data APIs and developed interactive dashboards.",
    link: "#",
    tags: ["React", "Python", "API Integration", "Data Visualization"],
  },
  {
    img: product2,
    tag: "Portfolio",
    title: "Personal Portfolio",
    period: "2024",
    team: "Solo",
    mentor: "Personal Project",
    desc: "Live portfolio site built with Next.js showcasing all technical work, projects, and achievements with responsive design.",
    link: "https://ankushgupta-portfolio.vercel.app",
    tags: ["React", "Next.js", "Tailwind CSS", "Vercel"],
  },
];

const Project = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-purple-400 bg-purple-900/30 px-4 py-1.5 rounded-full border border-purple-700">
            My Work
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4">
            Projects Developed By{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Ankush Gupta
            </span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded mt-3" />
          <p className="text-gray-400 text-sm mt-3 max-w-xl">
            These are some of my specialities. You can also suggest
            collaboration on any project you have in mind.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all group shadow-lg hover:shadow-purple-900/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-purple-600/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {p.tag}
                </span>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start mb-2 flex-wrap gap-1">
                  <h2 className="text-lg font-extrabold text-white">
                    {p.title}
                  </h2>
                  <span className="text-xs text-gray-500">{p.period}</span>
                </div>

                <p className="text-xs text-purple-400 mb-1">
                  👨‍🏫 {p.mentor} &nbsp;|&nbsp; 👥 {p.team}
                </p>

                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-lg border border-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-indigo-700 hover:bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition"
                >
                  View Project ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
