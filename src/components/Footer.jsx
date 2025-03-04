import { Email, LinkedIn, GitHub_Dark } from "../assets";
import { Link } from "react-scroll";
import { useState } from "react";

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    return (
        <section className="poppins-regular bg-black p-5 text-white">
            <div className="poppins-semibold my-5 text-center text-xl md:ml-3 md:text-left">
                Get in Touch
            </div>
            <div className="flex flex-col place-content-between items-center md:flex-row">
                <div className="mx-2 my-5 mb-3 flex flex-col text-center text-sm sm:text-base md:block">
                    Feel free to reach out for collaborations or just a friendly
                    chat.
                </div>
                <div
                    id="SocialMediaIconsFooter"
                    className="mx-2 my-5 mb-3 flex place-content-evenly items-center sm:w-[30%] md:w-[25%] lg:my-0 lg:w-[18%] xl:w-[15%]"
                >
                    <a
                        href="https://github.com/joule-1"
                        target="_blank"
                        className="cursor-pointer hover:scale-105"
                    >
                        <img
                            src={GitHub_Dark}
                            className={`w-7 transition-all duration-100 ease-in-out`}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/akshay-pandey-joule/"
                        target="_blank"
                        className="cursor-pointer hover:scale-105"
                    >
                        <img
                            src={LinkedIn}
                            className={`w-7 transition-all duration-100 ease-in-out`}
                        />
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=pandeyakshay301@gmail.com"
                        target="_blank"
                        className="cursor-pointer hover:scale-105"
                    >
                        <img
                            src={Email}
                            className={`w-7 transition-all duration-100 ease-in-out`}
                        />
                    </a>
                </div>
            </div>
            <hr className="m-4 mx-auto w-full border-gray-700" />
            <div className="flex flex-col place-content-between items-center text-white/70 md:flex-row">
                <div className="mx-2 my-5 mb-3 flex flex-col justify-center text-sm sm:text-base md:block">
                    © {currentYear} Akshay Pandey.
                    <span className="mx-auto my-2 block sm:my-0 sm:inline">
                        {" "}
                        All rights reserved.
                    </span>
                </div>
                <div className="mx-2 my-5 mb-3">
                    <Link
                        id="home"
                        to="home"
                        smooth={true}
                        duration={500}
                        className={`m-2 cursor-pointer`}
                    >
                        Home
                    </Link>
                    <Link
                        id="about"
                        to="about"
                        smooth={true}
                        duration={500}
                        className={`m-2 cursor-pointer`}
                    >
                        About
                    </Link>
                    <Link
                        to="project"
                        smooth={true}
                        duration={500}
                        className={`m-2 cursor-pointer`}
                    >
                        Projects
                    </Link>
                    <Link
                        id="contact"
                        to="contact"
                        smooth={true}
                        duration={500}
                        className={`m-2 cursor-pointer`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Footer;
