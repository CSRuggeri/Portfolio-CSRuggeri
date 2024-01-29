import React from 'react'
import ReactMarkdown from 'react-markdown';
 const Intro = () => {
    const markdownContent = `
   Welcome to my  Portfolio! 👋
    
    Hey, I'm Santiago Ruggeri, a passionate and ambitious individual on a journey through the dynamic world of programming. 
    At 26 years old, I embarked on this exciting path just over a year ago,
     and the learning adventure has been nothing short of exhilarating.
    
    In this short span, I've successfully crafted five projects independently, delving into various aspects of programming. 
    Additionally, I've actively contributed to two large group projects,
     honing my collaborative skills and gaining valuable experience in teamwork.
    
    Beyond the realm of coding, I bring a unique blend of experiences to the table. 
    With a background in managing restaurants and bars,
     I understand the importance of efficiency, organization, and delivering exceptional results in fast-paced environments. 🍔 🍹
    
    This portfolio is a glimpse into my evolving skill set, 
    showcasing not only my technical prowess but also my ability to adapt and thrive in diverse settings. 
    Join me as I continue to explore the limitless possibilities of technology and leave an indelible mark on the digital landscape. 🌐
    
    🚀🌟🚀Let's connect, collaborate, and create something extraordinary! 🚀🌟🚀
    `;
  
    return <ReactMarkdown >{markdownContent}</ReactMarkdown>;
  };
export default Intro