import { createContext, useContext, useRef } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const achievementRef = useRef(null);
  const loginRef = useRef(null);

  const scrollTo = (ref) => {
    const navbar = document.querySelector("nav");
    const navHeight = navbar ? navbar.offsetHeight : 64;
    const top =
      ref?.current?.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider
      value={{ homeRef, aboutRef, projectRef, contactRef, achievementRef, loginRef, scrollTo }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export function useScroll() {
  return useContext(ScrollContext);
}