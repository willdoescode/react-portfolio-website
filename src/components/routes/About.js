import React, { useState } from "react";
import '../../styles/About.css';
import Typewriter from 'typewriter-effect';

export default function About() {
  const date = new Date()
  const getAge = () => {
    let year = date.getFullYear()
    if (date.getMonth() < 8 && date.getDay() < 23) {
      year--
    }
    return year - 2006
  }
  return (
    <div className='background'>
      <div className="container">
        <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter.pasteString('$ ')
              typewriter.typeString('npx create-react-app will-lane')
                .pauseFor(250)
                .changeDeleteSpeed(2)
                .deleteAll(-2000000000)
                .start();
              typewriter.pasteString('$ ')
              typewriter.typeString('cd will-lane/')
                .pauseFor(250)
                .changeDeleteSpeed(-200000000)
                .pauseFor(500)
                .deleteAll(-20000000)
                .start();
              typewriter.pasteString('will-lane$ ')
                .pauseFor(250)
                .changeDeleteSpeed(2)
                .start();
              typewriter.typeString('npm i -D set-age')
                .pauseFor(250)
                .changeDeleteSpeed(-200000000)
                .pauseFor(500)
                .deleteChars(16)
                .start();
              typewriter.typeString(`set-age ${getAge()}`)
                .pauseFor(250)
                .changeDeleteSpeed(-200000000)
                .pauseFor(500)
                .deleteChars(10)
                .start();
              typewriter.typeString('python --developer')
                .pauseFor(250)
                .changeDeleteSpeed(-200000000)
                .pauseFor(500)
                .deleteChars(18)
                .start();
              typewriter.typeString('vue --developer')
                .pauseFor(250)
                .changeDeleteSpeed(-200000000)
                .pauseFor(500)
                .deleteChars(15)
                .start();
              typewriter.typeString('react --developer')
                .pauseFor(250)
                .changeDeleteSpeed(-2000000000)
                .pauseFor(500)
                .deleteChars(17)
                .start();
              typewriter.typeString('node --developer')
                .pauseFor(250)
                .changeDeleteSpeed(-2000000000)
                .pauseFor(500)
                .deleteChars(16)
                .start();
              typewriter.typeString('cool --developer 😎')
                .pauseFor(250)
                .changeDeleteSpeed(-2000000000)
                .pauseFor(500)
                .deleteAll(-2000000000)
                .start();
            }}
        />
      </div>
    </div>
  )
}
