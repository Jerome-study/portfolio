import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { ReactNode } from "react";
import { SiTypescript } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
import { BiLogoPostgresql } from "react-icons/bi";

const avatar = createAvatar(lorelei, {
    seed: "Bailey",
    size: 88,
    radius: 50,
    backgroundColor: ["292b2c"],
});

export const svg = avatar.toDataUriSync();


interface ProjectProps {
    name: string,
    link: string,
    description: string,
    img: string,
    tools : ReactNode[]
}


const icons = [
    <FaHtml5 className="bg-light" color="#FF8C00" size={"1.7rem"}/>, 
    <IoLogoCss3 className="bg-light" color='blue'  size={"1.7rem"}  />, 
    <IoLogoJavascript className="bg-dark" color='yellow'  size={"1.7rem"}  />,
    <FaReact color='lightblue' size={"1.7rem"} className='loaderIcon' />,
    <FaNode className="bg-light" color='green' size={"1.9rem"} />,
    <SiMongodb className="bg-light" color='green' size={"1.7rem"} />,
    <FaBootstrap className="bg-light" color='blue' size={"1.7rem"} />,
    <SiTypescript className="bg-light" color='blue' size={"1.7rem"}/>
];

export const iconsHome = [
    <FaHtml5 color='orange' size={"1.7rem"} />,
    <IoLogoCss3 color='blue' size={"1.7rem"} />,
    <IoLogoJavascript color='yellow' size={"1.7rem"} style={{backgroundColor:"black"}}/>,
    <FaReact color='lightblue' size={"1.7rem"} className='loaderIcon' />,
    <FaNode color='green'size={"1.7rem"}/>,
    <SiMongodb color='green' size={"1.7rem"}/>,
    <FaBootstrap color='blue' size={"1.7rem"}/>,
    <FaGitSquare color='orange' size={"1.7rem"}/>,
    <FaGithub color='black' size={"1.7rem"}/>,
    <SiTypescript className="bg-light" color='blue' size={"1.7rem"}/>,
    <BiLogoPostgresql className="bg-light" color='#008bb9' size={"1.7rem"} />
];

export const projects: ProjectProps[] = [
    
    {
        name:"News homepage",
        link: "https://jerome-study.github.io/News-homepage/",
        description: "A challenge from front-end mentor",
        img: "/news-home.jpg",
        tools: [icons[0], icons[1], icons[2]],
    },
    {
        name: "Newsletter sign-up form with success message",
        link: "https://jerome-study.github.io/News-Letter-Sign-up-with-Success-Message/",
        description: "A challenge from front-end mentor",
        img: "/news-letter.jpg",
        tools: [icons[0], icons[1], icons[2]]
    },
    {
        name: "Blogr landing page",
        link: "https://jerome-study.github.io/Blogr-landing-page/",
        description: "A challenge from front-end mentor",
        img: "/blogr.png",
        tools: [icons[0], icons[1], icons[2]]
    },
    {
        name: "URL shortening landing page",
        link: "https://url-shortener-landing-page.onrender.com",
        description: "A challenge from front-end mentor",
        img: "/url-shorter.png",
        tools: [icons[1], icons[3], icons[6]]
    },
    {
        name: "REST Countries API with color theme switcher",
        link: "https://rest-countries-api-with-color-theme-kw5b.onrender.com/",
        description: "A challenge from front-end mentor",
        img: "/country.jpg",
        tools: [icons[1], icons[3], icons[6]]
    },
    {
        name: "Movie App",
        link: "https://movie-app-v2.onrender.com/",
        description: "My full MERN stack website",
        img: "/movie.png",
        tools: [icons[3], icons[4], icons[5], icons[6], icons[7]]
    },
    {
        name: "Weather App",
        link: "https://weather-app-mfos.onrender.com",
        description: "Simple API calls about weather",
        img: "/weather.png",
        tools: [icons[1], icons[3], icons[6]]
    }
]