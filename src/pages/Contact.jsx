// import contact from "../assets/contect5.gif";

// const Contact = () => {
//   return (
//     <section className="bg-gray-900 text-white min-h-screen py-10 px-4">
//       <div className="container mx-auto max-w-5xl">

//         {/* Header */}
//         <div className="mb-8">
//           <span className="text-xs font-bold tracking-widest uppercase text-purple-400 bg-purple-900/30 px-4 py-1.5 rounded-full border border-purple-700">
//             Get In Touch
//           </span>
//           <h1 className="text-3xl md:text-4xl font-extrabold mt-4">
//             Contact{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
//               Me
//             </span>
//           </h1>
//           <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded mt-3" />
//         </div>

//         <div className="flex flex-col md:flex-row gap-8 items-start">

//           {/* Left — Info */}
//           <div className="w-full md:w-1/2 space-y-5">
//             <img
//               src={contact}
//               alt="Contact Illustration"
//               className="w-full rounded-2xl border border-purple-900"
//             />

//             <div className="bg-gray-800 rounded-2xl p-5 border border-purple-900">
//               <h2 className="text-lg font-bold text-purple-400 mb-4">Reach Out!</h2>
//               <p className="text-sm text-gray-300 leading-relaxed mb-4">
//                 I usually respond within an hour. Thank you and I am looking forward to hearing from you.
//               </p>
//               <div className="space-y-3">
//                 {[
//                   { icon: "📧", label: "Email", val: "ankushgupta0510@gmail.com" },
//                   { icon: "📱", label: "Phone", val: "+91-7225011473" },
//                   { icon: "📍", label: "Location", val: "Gandhi Nagar, Bhopal, M.P. — 462036" },
//                   { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/ankush-gupta-b734b025b" },
//                   { icon: "🐙", label: "GitHub", val: "github.com/ankushgupta05" },
//                   { icon: "🌐", label: "Portfolio", val: "ankushgupta-portfolio.vercel.app" },
//                 ].map((item) => (
//                   <div key={item.label} className="flex items-start gap-3">
//                     <span className="text-lg flex-shrink-0">{item.icon}</span>
//                     <div>
//                       <p className="text-xs text-gray-500">{item.label}</p>
//                       <p className="text-sm text-white font-medium break-all">{item.val}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right — Form */}
//           <div className="w-full md:w-1/2">
//             <div className="bg-gray-800 rounded-2xl p-6 border border-purple-900">
//               <h2 className="text-lg font-bold text-white mb-5">Send a Message</h2>
//               <form className="space-y-4">
//                 <div>
//                   <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Your full name"
//                     className="w-full px-4 py-2.5 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="example@mail.com"
//                     className="w-full px-4 py-2.5 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="What's this about?"
//                     className="w-full px-4 py-2.5 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
//                     Message
//                   </label>
//                   <textarea
//                     rows="5"
//                     placeholder="Write your message..."
//                     className="w-full px-4 py-2.5 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition resize-none"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-purple-900/40 text-sm"
//                 >
//                   Send Message 🚀
//                 </button>
//               </form>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// Contact.jsx - Using Redux RTK Query
// Contact.jsx - With Better Debugging
// Contact.jsx - Login only when submitting form
// Contact.jsx - Complete with Login Check & Form Restoration

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../services/LocalStorageService";
import { useSendContactMessageMutation } from "../services/UserAuthApi";
import contact from "../assets/contect5.gif";

const Contact = () => {
  const navigate = useNavigate();
  const { access_token } = getToken();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  // 🔥 RTK Query Hook
  const [sendContactMessage, { isLoading, isSuccess, isError, error, reset }] =
    useSendContactMessageMutation();

  // 🔥 Restore form data after login
  useEffect(() => {
    const pendingForm = localStorage.getItem("pendingContactForm");
    if (pendingForm && access_token) {
      try {
        const savedData = JSON.parse(pendingForm);
        setFormData(savedData);
        localStorage.removeItem("pendingContactForm"); // Clear after restoring

        // Show info message
        console.log("✅ Form data restored after login");
      } catch (error) {
        console.error("Failed to restore form data:", error);
      }
    }
  }, [access_token]);

  // 🔥 Auto-hide success message after 5 seconds
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        reset();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, reset]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Hide messages when user starts typing
    if (isSuccess || isError || showLoginPrompt) {
      reset();
      setShowLoginPrompt(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔐 Check authentication ONLY when submitting
    if (!access_token) {
      setShowLoginPrompt(true);
      // Save form data to localStorage before redirecting
      localStorage.setItem("pendingContactForm", JSON.stringify(formData));

      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/login", {
          state: {
            from: "/contact",
            message: "Please login to send your message",
          },
        });
      }, 2000);
      return;
    }

    try {
      const response = await sendContactMessage({
        actualData: formData,
        access_token,
      });

      console.log("API Response:", response);

      // Check if response has error (token expired)
      if (response.error) {
        if (response.error.status === 401) {
          navigate("/login", {
            state: {
              message: "Your session has expired. Please login again.",
              from: "/contact",
            },
          });
        }
      }

      // Clear form on success
      if (response.data) {
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <section className="bg-gray-900 text-white min-h-screen py-10 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-bold tracking-widest uppercase text-purple-400 bg-purple-900/30 px-4 py-1.5 rounded-full border border-purple-700">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-4">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Me
            </span>
          </h1>
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded mt-3" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left Side - Contact Info */}
          <div className="w-full md:w-1/2 space-y-5">
            <img
              src={contact}
              alt="Contact"
              className="w-full rounded-2xl border border-purple-900"
            />

            <div className="bg-gray-800 rounded-2xl p-5 border border-purple-900">
              <h2 className="text-lg font-bold text-purple-400 mb-4">
                Reach Out!
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                I usually respond within an hour. Thank you and I am looking
                forward to hearing from you.
              </p>
              <div className="space-y-3">
                {[
                  {
                    icon: "📧",
                    label: "Email",
                    val: "ankushgupta0510@gmail.com",
                    link: "mailto:ankushgupta0510@gmail.com",
                  },
                  {
                    icon: "📱",
                    label: "Phone",
                    val: "+91-7225011473",
                    link: "tel:+917225011473",
                  },
                  {
                    icon: "📍",
                    label: "Location",
                    val: "Gandhi Nagar, Bhopal, M.P. — 462036",
                  },
                  {
                    icon: "💼",
                    label: "LinkedIn",
                    val: "linkedin.com/in/ankush-gupta-b734b025b",
                    link: "https://linkedin.com/in/ankush-gupta-b734b025b",
                  },
                  {
                    icon: "🐙",
                    label: "GitHub",
                    val: "github.com/ankushgupta05",
                    link: "https://github.com/ankushgupta05",
                  },
                  {
                    icon: "🌐",
                    label: "Portfolio",
                    val: "ankushgupta-portfolio.vercel.app",
                    link: "https://ankushgupta-portfolio.vercel.app",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">{item.icon}</span>

                    <div className="flex-1">
                      <p className="text-xs text-gray-500">{item.label}</p>

                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-purple-400 hover:text-purple-300 font-medium break-all transition"
                        >
                          {item.val}
                        </a>
                      ) : (
                        <p className="text-sm text-white font-medium break-all">
                          {item.val}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-800 rounded-2xl p-6 border border-purple-900">
              <h2 className="text-lg font-bold text-white mb-5">
                Send a Message
              </h2>

              {/* Login Status */}
              {access_token ? (
                <div className="mb-4 p-3 bg-green-900/30 border border-green-700 rounded-lg text-green-300 text-sm">
                  ✅ You are logged in
                </div>
              ) : (
                <div className="mb-4 p-3 bg-blue-900/30 border border-blue-700 rounded-lg text-blue-300 text-sm">
                  ℹ️ You can fill the form. Login required only when sending.
                </div>
              )}

              {/* Login Prompt */}
              {showLoginPrompt && (
                <div className="mb-4 p-3 bg-yellow-900/30 border border-yellow-700 rounded-lg text-yellow-300 text-sm animate-pulse">
                  🔐 Please login to send your message. Redirecting...
                </div>
              )}

              {/* Success Message */}
              {isSuccess && (
                <div className="mb-4 p-3 bg-green-900/30 border border-green-700 rounded-lg text-green-300 text-sm">
                  ✅ Message sent successfully! Check your email for
                  confirmation.
                </div>
              )}

              {/* Error Message */}
              {isError && (
                <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-300 text-sm">
                  ❌ Failed to send message:{" "}
                  {error?.data?.detail ||
                    error?.data?.msg ||
                    "Please try again"}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    placeholder="Your full name"
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    placeholder="example@mail.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    placeholder="What's this about?"
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wide">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    minLength="10"
                    disabled={isLoading}
                    placeholder="Write your message (minimum 10 characters)..."
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm transition resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-purple-900/40 text-sm ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading
                    ? "Sending... ⏳"
                    : access_token
                    ? "Send Message 🚀"
                    : "Login & Send Message 🔐"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
