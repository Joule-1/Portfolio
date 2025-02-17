import { Email, LinkedIn, GitHub_Dark } from "../assets";
import { Link } from "react-scroll";
import { useState } from "react";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    return(
        <section className="bg-black text-white p-5 poppins-regular">
            <div className="text-xl poppins-semibold my-5 text-center md:text-left md:ml-3">
                Get in Touch
            </div>
            <div className="flex items-center place-content-between flex-col md:flex-row">
                <div className="flex text-center flex-col md:block my-5 mb-3 mx-2 text-sm sm:text-base">
                    Feel free to reach out for collaborations or just a friendly chat.
                </div>
                <div id="SocialMediaIconsFooter" className="flex items-center place-content-evenly my-5 mb-3 mx-2 sm:w-[30%] md:w-[25%] lg:my-0 lg:w-[18%] xl:w-[15%]">
                    <a href="https://github.com/joule-1" target="_blank" className="hover:scale-105 cursor-pointer">
                        <img src={GitHub_Dark} className={`w-7 transition-all ease-in-out duration-100`} />
                    </a>
                    <a href="https://www.linkedin.com/in/akshay-pandey-joule/" target="_blank" className="hover:scale-105 cursor-pointer">
                        <img src={LinkedIn} className={`w-7 transition-all ease-in-out duration-100`} />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pandeyakshay301@gmail.com" target="_blank" className="hover:scale-105 cursor-pointer">
                        <img src={Email} className={`w-7 transition-all ease-in-out duration-100`} />
                    </a>
                </div>
            </div>
            <hr className="w-full mx-auto border-gray-700 m-4"/>
            <div className="text-white/70 flex items-center place-content-between flex-col md:flex-row">
                    <div className="flex justify-center flex-col md:block my-5 mb-3 mx-2 text-sm sm:text-base">© {currentYear} Akshay Pandey.<span className="block my-2 mx-auto sm:inline sm:my-0"> All rights reserved.</span></div>
                    <div className="my-5 mb-3 mx-2">                    
                    <Link id="home" to="home" smooth={true} duration={500} className={`cursor-pointer m-2`}>Home</Link>
                    <Link id="about" to="about" smooth={true} duration={500} className={`cursor-pointer m-2`}>About</Link>
                    <Link to="project" smooth={true} duration={500} className={`cursor-pointer m-2`}>Projects</Link>
                    <Link id="contact" to="contact" smooth={true} duration={500} className={`cursor-pointer m-2`}>Contact</Link>         
                </div>
            </div>
        </section>
    )}

export default Footer;