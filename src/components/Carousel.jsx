import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import ThemeStorage from "../utils/ThemeStorage.js";
import { ThemeContext } from "../utils/ThemeProvider.jsx";
import {
    CSS3,
    Git,
    HTML5,
    JavaScript,
    Azios,
    Nodemon,
    TypeScript,
    MongoDB,
    NodeJS,
    ReactJS,
    Redux,
    Tailwind,
    Postman,
} from "../assets";

const TechCarousel = () => {
    const { theme, toggleMenu, menuDisplay } = useContext(ThemeContext);
    const currentTheme = ThemeStorage[theme];

    const TechStack = [
        JavaScript,
        CSS3,
        Git,
        HTML5,
        NodeJS,
        ReactJS,
        Redux,
        Tailwind,
        Postman,
        Azios,
        Nodemon,
        TypeScript,
        MongoDB,
        currentTheme.GitHubIcon,
    ];

    const settings = {
        infinite: true,
        speed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 },
            },
        ],
    };

    return (
        <section onClick={menuDisplay ? toggleMenu : undefined}>
            <Slider {...settings} className="slick-slider">
                {TechStack.concat(TechStack).map((tech, index) => (
                    <div key={index} className="">
                        <img src={tech} className="w-12" alt="Tech Icon" />
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default TechCarousel;
