import React, { useState } from "react";
import '../../styles/About.css';
import Typewriter from 'typewriter-effect';

export default function About(callback, thisArg) {
  return (
    <>
      <Typewriter classNane="yay"
        options={{
          loop: true
        }}
        onInit={(typewriter) => {
          typewriter.typeString('Will Lane, ')
            .pauseFor(250)
            .start();
          typewriter.typeString('Python developer.')
            .pauseFor(250)
            .deleteChars(17)
            .start();
          typewriter.typeString('Vue developer.')
            .pauseFor(250)
            .deleteChars(14)
            .start();
          typewriter.typeString('React developer.')
            .pauseFor(250)
            .deleteChars(16)
            .start();
        }}
      />
    </>
  )
}
