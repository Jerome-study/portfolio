import { projects } from "../utils/utils"
import { IconComponent } from "./Icons"

export const ProjectComponent = () => {
    return(
        <div className="overflow-hidden">  
            <h1 className="text-center mb-5 ">My Projects</h1>
            <div className="row">
                {projects.map((project: any, index: number) => {
                    return(
                        <a href={project.link} className="col-12 col-sm-6 col-xl-4 g-0 rounded-0" key={index} style={{ cursor: "pointer"}}>
                            <div className="card img-filter h-100 rounded-0 position-relative overflow-hidden">
                                <img className="w-100 h-100 rounded-0 bg-dark" loading="lazy" src={project.img} alt="" />
                                <div className="details">
                                    <div className="details-content text-light d-none d-lg-flex flex-column justify-content-between align-items-center py-4">
                                            <h4 className="text-center">{project.name}</h4>
                                            <div>
                                                <IconComponent icons={project.tools}/>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}