import { useEffect, useState } from "react";
import SharedTitle from "./SharedTitle";
import ProjectCard from "./ProjectCard";
import Aos from "aos";
import 'aos/dist/aos.css';
const MyProject = () => {
    const [projects,setProjects]=useState([])
    useEffect(()=>{
        fetch('MyProject.json')
        .then(res=> res.json())
        .then(data=>setProjects(data))
    },[])
    useEffect(() => {
        Aos.init({
          duration: 1000,  // Animation duration
          easing: 'ease-in-out',  // Easing function
        });
      }, []);
    return (
        <div  id="myProject" className="my-20 relative md:top-2 top-32">
            <SharedTitle title={'projects'}></SharedTitle>
<div data-aos="zoom-in" className="grid gap-8 my-10 lg:grid-cols-3 md:grid-cols-2  md:p-8 p-5 grid-cols-1">
    {
        projects.map((project,idx)=><ProjectCard key={idx} project={project}></ProjectCard>)
    }
</div>

        </div>
    );
};

export default MyProject;