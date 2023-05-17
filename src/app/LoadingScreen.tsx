'use client';

import Image from 'next/image';
import { useState, useEffect } from "react";
import gsap from "gsap";
import Typewriter from 'typewriter-effect';
import styles from "./LoadingScreen.module.css";

export default function LoadingScreen() {
    const [imageUrl, setImageUrl] = useState("/camera.png");
    const [startTyping, setStartTyping] = useState(false);
    const glitchImages = [
        "/camera-glitch.png",
        "/camera-glitch-2.png",
        "/camera-glitch-3.png",
        "/camera-glitch-4.png",
    ];

    const glitchImage = () => {
      const interval =  setInterval(() => {
            // Generate a random index within the array length
            const randomIndex = Math.floor(Math.random() * glitchImages.length);
        
            // Retrieve the random element using the random index
            const randomElement = glitchImages[randomIndex];
        
            // Do something with the random element (e.g., display it)
            setImageUrl(randomElement);
          }, 350);

        
       setTimeout(() => {
           setImageUrl("/camera.png");
           clearInterval(interval);
           setStartTyping(true);
      }, 6002)  
    }

    const percentages = [
        '0', '12','20','36','44',
        '52', '64','76','84', '96', '100'
      ];

    useEffect(() => {
        glitchImage();
        gsap.to('.' + styles.progress__bar, {
          width: "100%",
          delay: 0,
          duration: 6,
          ease: "power2.inOut",
        });
        gsap.to('.percentage__container', {
          top: "-1000%",
          delay: 0,
          duration: 6,
          ease: "power2.inOut",
        });
        gsap.to('.upper_section', {
            opacity: "0",
            delay: 25,
            duration: 2,
            ease: "power2.inOut",
          });
        gsap.to('.' + styles.cine_logo, {
            opacity: "1",
            delay: 25,
            duration: 2,
            ease: "power2.inOut",
          });
        gsap.to('.' + styles.cine_logo, {
          bottom: "50%",
          transform: 'translateY(50%)',
          fontSize: "120px",
            delay: 28,
            duration: 2,
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
    autoStart: startTyping,
                              cursor: "",
                              delay: 50
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
                  })}</div><div>%</div></div>
        </div>
       <div className={styles.cine_logo}>
        CIN/E
        </div>
      </div>
       
    </main>
  )
}
