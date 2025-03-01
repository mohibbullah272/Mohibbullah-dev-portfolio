import { Link } from "react-router-dom";

const Navbar = () => {




const sectionScroll=(ref)=>{
  ref.current?.scrollIntoView({ behavior: "smooth" });
}




  const links =<>
  <li><a href="/">Home</a></li>
  <li><a href="#aboutME">About Me</a></li>
  <li><a href="#mySkill">Skills</a></li>
  <li><a href="#myProject">Projects</a></li>
  <li><a href="#contact">Contact</a></li>
  </>
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').slice(1); // Get the ID without the '#'
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


    return (
        <div className="navbar z-50 fixed bg-black/30 px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            
            </ul>
          </div>
          <Link to={'/'}><p className="nav-header btn btn-ghost text-[#FFC107] text-2xl">M.Dev</p></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
       
          </ul>
        </div>
        <div className="navbar-end md:flex  hidden">
      <a href="#contact"   className=" text-[#1E1E1E] btn bg-[#FFC107] border-none">Hire me</a>
        </div>
      </div>
    );
};

export default Navbar;