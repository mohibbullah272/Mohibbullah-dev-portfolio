
import SharedTitle from "./SharedTitle";
import htmlIcon from '../assets/icons8-html.svg'
import cssIcon from '../assets/icons8-css.svg'
import jsIcon from '../assets/icons8-javascript.svg'
import reactIcon from '../assets/icons8-react-native.svg'
import nodeIcon from '../assets/icons8-nodejs.svg'
import expressIcon from '../assets/icons8-express-js.svg'
import mongodbIcon from '../assets/database (1).svg'
import tailwindIcon from '../assets/icons8-tailwind-css.svg'
import firbaseIcon from '../assets/icons8-firebase.svg'
import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import Aos from "aos";

const MySkills = () => {
    useEffect(() => {
          Aos.init({
            duration: 1000,  // Animation duration
            easing: 'ease-in-out',  // Easing function
          });
        }, []);
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);
    const skills=[
        {name:'HTML', parseint:90, icon:htmlIcon},
        {name:'Tailwind', parseint:90, icon:tailwindIcon},
        {name:'CSS', parseint:85, icon:cssIcon},
        {name:'Firebase',parseint:80, icon:firbaseIcon},
        {name:'React', parseint:80, icon:reactIcon},
        {name:'javaScript', parseint:70, icon:jsIcon},
        {name:'Nodejs', parseint:60, icon:nodeIcon},
        {name:'ExpressJs', parseint:60, icon:expressIcon},
        {name:'Mongodb', parseint:50, icon:mongodbIcon},
    ]

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setInView(true);  
            } else {
              setInView(false); 
            }
          });
        }, { threshold: 0.2 }); 
    
        const section = sectionRef.current;
        if (section) observer.observe(section);
    
        return () => {
          if (section) observer.unobserve(section);
        };
      }, []);
    return (
        <div id="mySkill" className="relative md:top-2 top-32">
            <SharedTitle title={'skills'}></SharedTitle>
   
    <div className='grid gap-5 lg:grid-cols-3 sm:grid-cols-2 mt-10  grid-cols-1' ref={sectionRef} >
        {skills.map((skill, index) => (
          <div data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom" key={index} className='bg-[#323232] flex  w-80 rounded-full mx-auto  py-5 flex-col items-center justify-center space-x-2'>
            <img src={skill.icon} alt="" />
            <h3>{skill.name}</h3>
            {inView && (
              <CountUp
                start={0}
                end={skill.parseint}
                duration={3}
                decimals={0}
                suffix="%"
              />
            )}
          </div>
        ))}
      </div>
    </div>
    
    );
};

export default MySkills;