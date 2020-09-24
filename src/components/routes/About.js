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
  const messages = {
    first: 'npx create-react-app will-lane',
    second: 'cd will-lane/',
    third: 'will-lane$ ',
    fourth: 'npm i -D set-age',
    fifth: `set-age ${getAge()}`,
    sixth: 'npx set developer --python --vue --react --node'
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
              typewriter.typeString(messages.first)
                .pauseFor(250)
                .changeDeleteSpeed(2)
                .deleteAll(-2000000000)
                .start();
              typewriter.pasteString('$ ')
              typewriter.typeString(messages.second)
                .pauseFor(250)
                .changeDeleteSpeed(-200000000)
                .pauseFor(500)
                .deleteAll(-20000000)
                .start();
              typewriter.pasteString(messages.third)
                .pauseFor(250)
                .changeDeleteSpeed(2)
                .start();
              typewriter.typeString(messages.fourth)
                .pauseFor(250)
                .changeDeleteSpeed(-200000000)
                .pauseFor(500)
                .deleteChars(messages.fourth.length)
                .start();
              typewriter.typeString(messages.fifth)
                .pauseFor(250)
                .changeDeleteSpeed(-200000000)
                .pauseFor(500)
                .deleteChars(messages.fifth.length)
                .start();
              typewriter.typeString(messages.sixth)
                .pauseFor(250)
                .changeDeleteSpeed(-200000000)
                .pauseFor(500)
                .deleteAll(-200000000000)
                .start();
              typewriter.pasteString('SUCCESS')
                .pauseFor(2500)
                .deleteAll(-20000000000)
            }}
        />

      </div>
    </div>
  )
}
