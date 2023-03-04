import React from "react";
import Typewriter from "typewriter-effect";

function TypeError() {
  return (
    <Typewriter
      options={{
        strings: [
          "page doesn't exist",
          "go back to home or ",
          "choose in navbar what you want ",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeError;
