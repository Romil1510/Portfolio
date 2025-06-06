import React from 'react';
import Tilt from "react-parallax-tilt";
import { toast } from 'react-toastify';


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "809a1f86-223e-4f52-abb5-f4f5dbf423f3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Sent Successfully")
      event.target.reset();
    } else {
      toast.success("Error!")
      setResult(data.message);
    }
  };

  return (
    <div id="contact">
      <div>
        <div className=' bg-gradient-to-br from-black-900 to-gray-900 backdrop-blur-lg container   rounded-3xl mx-auto py-12 px-6 md:px-20 lg:px-32 w-full overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500' id='Contact'>
            
          <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-center mt-12 bg-clip-text  text-white'>
            Contact <span className='font-light'>With Us</span>
          </h1>
          
         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
          <form onSubmit={onSubmit}>
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
              className="w-full sm:max-w-md"
              
            >
            <div className='flex max-w-2xl flex-wrap text-white pt-8 gap-6'>
              <div className='w-full md:w-1/2 text-left'>
                <label className='block text-sm font-medium mb-2 text-gray-300'>Your Name</label>
                <input 
                  type='text' 
                  placeholder='Enter Your Name' 
                  name='name' 
                  className='w-full bg-gray-700/50 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300' 
                  required 
                />
              </div>
              <div className='w-full md:w-1/2 text-left'>
                <label className='block text-sm font-medium mb-2 text-gray-300'>Your Email</label>
                <input 
                  type='email' 
                  placeholder='Enter Email' 
                  name='email' 
                  className='w-full bg-gray-700/50 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300' 
                  required 
                />
              </div>
            </div>
            <div className='my-6 text-left'>
              <label className='block text-sm font-medium mb-2 text-gray-300'>Message</label>
              <textarea 
                name='message' 
                placeholder='Message' 
                required 
                className='w-full bg-gray-700/50 border border-white/10 rounded-xl py-3 px-4 h-48 resize-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300'
              ></textarea>
            </div>
            <div className='flex justify-center items-center'>
              <button 
  className="bg-white text-black shadow-[0_0px_20px_rgba(255,255,255,0.5)] py-3 px-16 rounded-xl font-semibold transition-all duration-300 transform"
              >
                {result ? result : "Send Message"}
              </button>
            </div>
            </Tilt>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;