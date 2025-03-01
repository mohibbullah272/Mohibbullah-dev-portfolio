
import { Link } from "react-router-dom";
import { GoGoal } from "react-icons/go";
import { BiCategoryAlt } from "react-icons/bi";
const ProjectCard = ({project}) => {
 
    const {id,shortDescription,thumbnailImage,category,title,status,liveDemo,Github}=project || {}
    return (
        <div  className="card  card-compact  shadow-xl">
  <div>
    <img
    className="w-full "
      src={thumbnailImage}
      alt="project thumbnail" />
  </div>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{shortDescription}</p>
    <p className="flex items-center gap-3"><BiCategoryAlt /> {category}</p>
    <p className="flex items-center gap-3"><GoGoal /> {status}</p>
    <div className="card-actions justify-between items-center">
      <Link to={`/details/${id}`}>
      <button className="btn border-none bg-[#FFC107]">View Details</button>
      </Link>
    {
        status === "The work is ongoing"? <a className="btn btn-outline text-xs text-white/70" href={Github} target="_blank">Repository</a>:  <a className="btn btn-outline  text-white/70" href={liveDemo} target="_blank">Live Demo</a>
    } 
    </div>
  </div>
</div>
    );
};

export default ProjectCard;