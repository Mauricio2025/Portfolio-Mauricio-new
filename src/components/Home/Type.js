import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter style={{ color: 'dodgerblue' }}
      options={{
        strings: [
          "Full-Stack Developer",
          "Fron-End Developer",
          "Developer Web"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
