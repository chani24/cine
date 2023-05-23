'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Typewriter from 'typewriter-effect';
import styles from "./LoadingScreen.module.css";

export default function LoadingScreen() {
  const [imageUrl, setImageUrl] = useState("/camera.png");
  const [percentagePosition, setPercentagePosition] = useState(0)

    const glitchImage = () => {
    setImageUrl('/jittery-camera.gif');
        
       setTimeout(() => {
           setImageUrl("/camera.png");
      }, 10000)  
    }

    const percentages = [
        '0', '12','20','36','44',
        '52', '64','76','84', '96', '100'
  ];
  
  useEffect(() => {
    gsap.to('.percentage__container', {
      top: "-" + percentagePosition + "%",
      delay: 0,
      duration: 1,
      ease: "power4.inOut",
    })
  },
    [percentagePosition])
  
  const updateScroll = () => {
    setPercentagePosition(percentagePosition => percentagePosition + 100);
    }
  const scrollPercentages = () => {
    updateScroll();
    const interval = setInterval(
      updateScroll
    , 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 9999)
  }

    useEffect(() => {
        glitchImage();
        gsap.to('.' + styles.progress__bar, {
          width: "100%",
          delay: 0,
          duration: 10,
          ease: "power0",
        });
      scrollPercentages();

        gsap.to('.upper_section', {
            opacity: "0",
            delay: 13.5,
            duration: 0.5,
            ease: "power2.inOut",
          });
        gsap.to('.' + styles.cine_logo_text, {
            top: "0",
            delay: 12,
            duration: 1,
            ease: "power2.inOut",
        });
        gsap.to('.percentage__container', {
          top: "-1100%",
          delay: 12,
          duration: 1,
          ease: "power4.inOut",
        })
        gsap.to('.percentage_sign__container', {
          top: "-100%",
          delay: 12,
          duration: 1,
          ease: "power4.inOut",
        })
        gsap.to('.' + styles.cine_logo, {
          height: '124px',
            delay: 14,
            duration: 0.1,
            ease: "power0",
          });
          gsap.to('.' + styles.cine_logo, {
          bottom: "50%",
          transform: 'translateY(50%)',
          fontSize: "5rem",
            delay: 15,
            duration: 1,
            ease: "power2.inOut",
          });
          gsap.to('.' + styles.cine_logo_text, {
            top: "-100%",
            delay: 17,
            duration: 1,
            ease: "power2.inOut",
        });
      }, []);

  return (
    <main className={styles.container}>
      <div className='relative h-full'>
      <div className={styles.typewriter + ' upper_section'}>
                  <h1>
                  <Typewriter
  options={{
    strings: `"I'll tell you what I'm blathering about... I've got information man! New stuff has come to light! And shit, man, she kidnapped herself. Well sure, man. Look at it... a young trophy wife, in the parlance of our times." - from the movie, The Big Lebowski (1998).`,
    autoStart: true,
                              cursor: "",
                              delay: 3
  }}
/>
  </h1>
      </div>

       <div className="relative flex flex-col items-center upper_section">
        <Image
          className="relative"
          src={imageUrl}
          alt="Camera"
          width={150}
          height={225}
          priority
                  />
          <div className={styles.progress__container}>
          <div className={styles.progress__bar}/>
                  </div>
                  <div className={styles.percentage_wrapper}>
                      <div className="percentage__container relative">{percentages.map((percentage, index) => {
                      return(<div key={index}>{percentage}</div>)
                      })}</div>
            <div className="percentage_sign__container relative">{' '}%</div>
                  </div>
        </div>
        <div className={styles.cine_logo}>
          <div className={styles.cine_logo_text}>
            CIN/E
          </div>
        
        </div>
      </div>
       
    </main>
  )
}
