import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Main = () => {
    useEffect(() => {
        const cursor = document.querySelector(".cursor");
        
        const moveCursor = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };

        const hideCursor = () => {
            cursor.style.opacity = "0";
        };

        const showCursor = () => {
            cursor.style.opacity = "1";
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseout", hideCursor);
        window.addEventListener("mouseover", showCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseout", hideCursor);
            window.removeEventListener("mouseover", showCursor);
        };
    }, []);

    return (
        <div>
          <Navbar></Navbar>
          <div className="cursor"></div>
          <main className="max-w-7xl mx-auto">
            <Outlet></Outlet>
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </div>
    );
};

export default Main;
