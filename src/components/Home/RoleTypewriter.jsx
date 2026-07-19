import React from "react";
import Typewriter from "typewriter-effect";

function RoleTypewriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Python Developer",
          "Machine Learning Enthusiast",
          "React.js Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default RoleTypewriter;
