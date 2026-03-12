import Typewriter from "typewriter-effect";

const ClientSideTypewriter = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "ML Model Development",
          "UI/UX Designer",
          "Web Development..",
          "Data Analytics",
          "Video Editor..",
          "Full Stack Development",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default ClientSideTypewriter;