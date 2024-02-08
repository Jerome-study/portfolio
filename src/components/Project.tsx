import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { ReactNode } from "react";

interface ProjectProps {
    name: string,
    link: string,
    description: string,
    img: string,
    tools : ReactNode[]
}


const icons = [
    <FaHtml5  className="bg-light" color="#FF8C00" size={"1.2rem"}/>, 
    <IoLogoCss3 className="bg-light" color='blue'  size={"1.2rem"}  />, 
    <IoLogoJavascript className="bg-dark" color='yellow'  size={"1.2rem"}  />,
    <FaReact color='lightblue' size={"1.2rem"}  className='loaderIcon' />,
    <FaNode color='green' size={"1.4rem"} />,
    <SiMongodb color='green' size={"1.2rem"} />,
    <FaBootstrap  color='blue' size={"1.2rem"} />
]

const projects: ProjectProps[] = [
    {
        name: "Blogr Landing Page",
        link: "https://jerome-study.github.io/Blogr-landing-page/",
        description: "A challenge from front-end mentor using plain HTML, CSS and Javascript",
        img: "desktop-preview.png",
        tools: [icons[0], icons[1], icons[2] ]
    },

    {
        name: "News homepage",
        link: "https://jerome-study.github.io/News-homepage/",
        description: "A challenge from front-end mentor using plain HTML, CSS and Javascript",
        img: "news-home-page.jpg",
        tools: [icons[0], icons[1], icons[2] ]
    },

    {
        name: "Product preview card component",
        link: "https://jerome-study.github.io/Product-preview-card-component/",
        description: "A challenge from front-end mentor using plain HTML, CSS and Javascript",
        img: "product-preview.jpg",
        tools: [icons[0], icons[1], icons[2] ]
    },        

    {
        name: "News Letter Sign-up with Success Message",
        link: "https://jerome-study.github.io/News-Letter-Sign-up-with-Success-Message/",
        description: "A challenge from front-end mentor using plain HTML, CSS and Javascript",
        img: "news-sign.jpg",
        tools: [icons[0], icons[1], icons[2] ]
    },    

    {
        name: "Dictionary Api",
        link: "https://jerome-study.github.io/dictionary-app/",
        description: "My first API app using plain html, css and JS",
        img: "dictionary.png",
        tools: [icons[0], icons[1], icons[2] ]
    },    

    {
        name: "Movie Api",
        link: "https://jerome-study.github.io/api-movie/",
        description: "API app using plain html, css and JS",
        img: "movie-app.png",
        tools: [icons[0], icons[1], icons[2] ]
    },  
    
    {
        name: "Tic Tac Toe",
        link: "https://jerome-study.github.io/Tic-Tac-Toe/",
        description: "I build a game with the help of internet to enchance my logic thinking",
        img: "tictac.png",
        tools: [icons[0], icons[1], icons[2] ]
    }, 

    {
        name: "Memory Game",
        link: "https://jerome-study.github.io/memory-game/",
        description: "I build a game with the help of internet to enchance my logic thinking",
        img: "memorygame.png",
        tools: [icons[0], icons[1], icons[2] ]
    }, 

    {
        name: "Calculator App",
        link: "https://jerome-study.github.io/Calculator-App/",
        description: "Another app that enchance my logic thinking",
        img: "calculator.png",
        tools: [icons[0], icons[1], icons[2] ]
    }, 

    {
        name: "Todo App",
        link: "https://rest-countries-api-with-color-theme-kw5b.onrender.com/",
        description: "A Todo app with authentication and database",
        img: "todoapp.png",
        tools: [icons[0], icons[1], icons[2], icons[4], icons[5] ]
    },   

    {
        name: "REST Countries API with color theme switcher",
        link: "https://rest-countries-api-with-color-theme-kw5b.onrender.com/",
        description: "A challenge from front-end mentor using React and Bootstrap",
        img: "country.webp",
        tools: [icons[3], icons[5]]
    },    

    {
        name: "E-Commerce",
        link: "https://e-commerce-frontend-kpae.onrender.com/home",
        description: "My first full MERN stack app",
        img: "e-commerce.png",
        tools: [icons[1], icons[3], icons[4], icons[5]]
    },    
];




export const ProjectComponent = () => {
    return(
        <>  
            <h1 className="text-center mb-5 ">My Projects</h1>
            <div className="section-body">
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-around gap-4 ">
                    {projects.map(project => {
                            return(
                                    <a href={project.link}>
                                        <div key={project.link} className="card bg-dark text-white shadow position-relative" style={{maxWidth:"18rem"}}>
                                            <img className="card-img w-100" src={project.img} alt="Card image" style={{height: "16rem"}} />
                                            <div className="card-slide">
                                                <div className="card-info mt-5">
                                                    <h5 className="card-title">{project.name}</h5>
                                                    <p className="card-text">{project.description}</p>
                                                    {project.tools.map(icon => {
                                                        return(
                                                            <div className="me-1 d-inline-block">
                                                                {icon}
                                                            </div>
                                                            
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>     
                                    </a>   
                            )
                    })}
                </div>
            </div>           
        </>
    )
}