import img from "../assets/portfolio-bg2.png";
import { CiFacebook } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Typing from 'react-typing-effect';
const Banner = () => {
  return (
    <div id="banner" className=" relative md:top-2 top-32  flex flex-row flex-wrap items-center lg:p-10 sm:p-5 gap-4 md:gap-8 justify-between overflow-hidden">
  
    

      {/* Left Side */}
      <div className="flex-1 px-5 min-w-[260px] text-wrap text-white relative z-20">
        <h3 className="text-2xl lg:text-3xl font-bold">
          Hello There, <br />
        </h3>
          <span className="text-[#FFD700] font-semibold text-xl">
            <Typing
            speed={100}
            eraseDelay={500}
            typingDelay={500}
            cursor="_"
            text={["I'm a MERN Stack developer","I'm a Web developer","I'm a Frontend developer","I'm a Web designer"]}
            >

            </Typing>
          </span>
        <p className="mt-3 text-gray-300 text-justify">
          Creating beautiful, user-friendly web applications with a focus on
          functionality.
        </p>
       <div className="flex gap-3 mt-4">
                           <a target='_blank' href="https://www.facebook.com/najmul.sakib.3954" aria-label="Facebook">
                             <CiFacebook className="text-2xl " />
                           </a>
                           <a target='_blank' href="https://github.com/mohibbullah272" aria-label="GitHub">
                             <FaGithub className="text-2xl " />
                           </a>
                           <a target='_blank' href="https://www.linkedin.com/in/mohi-bullah-4767962a3" aria-label="LinkedIn">
                             <FaLinkedin className="text-2xl " />
                           </a>
                           <a target='_blank' href="https://wa.me/8801886967825?text=Hi%20there!%20I%20wanted%20to%20connect%20with%20you" aria-label="WhatsApp">
                             <FaWhatsapp className="text-2xl " />
                           </a>
                         </div>
        <a href="/_Mohibullah_Frontend_Developer_Resume.pdf"   download="Mohibullah_MERN_Stack_Developer_Resume.pdf" className="mt-5 btn btn-warning text-[#323232] font-bold hover:bg-slate-200 transition duration-300">
          Download Resume
        </a>
      </div>

   
      <div className="relative flex-1 min-w-[260px] flex justify-center items-center">
       
       

        {/* Profile Image */}
        <img
          className="w-[250px] md:w-[350px] rounded-full shadow-lg "
          src={img}
          alt="Portfolio"
        />
      </div>
    </div>
  );
};

export default Banner;
