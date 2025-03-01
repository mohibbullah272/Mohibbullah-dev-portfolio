import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { BiCategoryAlt } from "react-icons/bi";
import 'react-photo-view/dist/react-photo-view.css';
import Footer from "./Footer";
const ProjectDetail = () => {
    const {id}=useParams()
 
    const [project,setProject]=useState([])
    useEffect(()=>{
        fetch('/MyProject.json')
        .then(res=> res.json())
        .then(data=>{
            const currentData =data.filter(item=> item.id == id)
            setProject(currentData)
          
        })
    },[])
    const {title,category,shortDescription,fullDescription,thumbnailImage,fullImage,keyFeatures,technologiesUsed,status,liveDemo,Github}=project[0] || {}
    console.log(project)
    return (
    <PhotoProvider>
        <div>
            <div>
                <PhotoView src={fullImage}>
<img data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!" className="md:w-11/12 mx-auto md:h-[500px]" src={thumbnailImage} alt="" />
                </PhotoView>
            </div>
            <div className="my-8 p-3 ">
                <h3 >{title}</h3>
              {
                status==="The work is ongoing"?<>live link: <span className="text-red-500"> The work is ongoing</span></>:  <div>live link:  <a   target="_blank" className="underline" href={liveDemo}>click here</a></div>
              }
              <div>Github link:  <a   target="_blank" className="underline" href={Github}>click here</a></div>
                <p className="flex items-center gap-3"><BiCategoryAlt />{category}</p>
                <p>{shortDescription}</p>
                <p>{fullDescription}</p>
                <div className="py-3">
                    <span className="font-semibold text-xl">Key Features.....</span>
                    {
         keyFeatures?.map((item,idx)=><p key={idx}>{idx+1}  {item}</p>)
                    }
                </div>
                <div>
                    <span className="text-xl font-semibold">Technologies Used in........</span>
                    {
                        technologiesUsed?.map((tech,idx)=><p key={idx}>{idx+1} {tech}</p>)
                    }
                </div>
            </div>
           
        </div>
    </PhotoProvider>
    );
};

export default ProjectDetail;