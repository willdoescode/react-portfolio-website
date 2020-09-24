import React, { useState } from "react";
import '../../styles/About.css';
import Typewriter from 'typewriter-effect';

export default function About(callback, thisArg) {
  return (
    <>
      <div className="container">
        <Typewriter classNane="yay"
                    options={{
                      loop: true
                    }}
                    onInit={(typewriter) => {
                      typewriter.typeString('Will Lane, ')
                        .pauseFor(250)
                        .changeDeleteSpeed(2)
                        .start();
                      typewriter.typeString('Python developer.')
                        .pauseFor(250)
                        .changeDeleteSpeed(2)
                        .deleteChars(17)
                        .pauseFor(90)
                        .start();
                      typewriter.typeString('Vue developer.')
                        .pauseFor(250)
                        .changeDeleteSpeed(2)
                        .deleteChars(14)
                        .pauseFor(90)
                        .start();
                      typewriter.typeString('React developer.')
                        .pauseFor(250)
                        .changeDeleteSpeed(2)
                        .deleteChars(16)
                        .pauseFor(90)
                        .start();
                      typewriter.typeString('Node developer.')
                        .pauseFor(250)
                        .changeDeleteSpeed(2)
                        .deleteChars(15)
                        .pauseFor(90)
                        .start();
                    }}
        />
      </div>
    </>
  )
}
