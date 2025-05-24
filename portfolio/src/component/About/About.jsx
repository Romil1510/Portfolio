import Tilt from "react-parallax-tilt";
import { Typewriter } from 'react-simple-typewriter';
import image from "../About/image.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="py-4 h-[670px] md:h-[600px] ld:h-[600px] px-[7vw] md:px-[7vw] lg:px-[14vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Romil Patel
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
        words={['Web Developer',"Coder"]}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={100}
        deleteSpeed={100}
        delaySpeed={2000}
      />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-gray-400 text-lg leading-relaxed text-justify">
  I'm a passionate <span className="text-[#8245ec] font-semibold">Web Developer</span> who loves building clean, responsive, and user-friendly websites. 
  I specialize in <span className="font-medium">React, JavaScript, HTML, CSS, and Tailwind CSS</span>. I enjoy turning ideas into real web experiences that look good and work fast.
  
 </p>
        
          
          
 <a
            href="https://drive.google.com/file/d/1qGzcLxGwFNSm9ve9i-07dqKQkfDbdfWf/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-black py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 hover:text-black hover:bg-black"
            style={{
              background: 'linear-gradient(90deg, #ffffff, #e5e5e5)', // subtle white gradient
              boxShadow: '0 0 10px #ffffff80, 0 0 20px #ffffff40, 0 0 30px #ffffff20', // white glow shadow
            }}
            

              
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-5 border-white rounded-3xl shadow-[0_0_35px_rgba(255,255,255,0.7)]"

            tiltMaxAngleX={50}
            tiltMaxAngleY={50}
            perspective={1000}
            scale={1.02}
            transitionSpeed={800}
            gyroscope={true}
          >
            <img
              src={image}
              alt="Romi Patel"
              className="w-full h-full rounded-xl object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;