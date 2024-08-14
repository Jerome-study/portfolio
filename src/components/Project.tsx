import { projects } from "../utils/utils"
import { IconComponent } from "./Icons"

export const ProjectComponent = () => {
    return (
        <div className="overflow-hidden">
            <h1 className="text-center mb-5 ">My Projects</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                    {projects.map((project: any, index: number) => {
                        return (
                            <div className="col" key={index}>
                                <div className="card">
                                    <img src={project.img} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{project.name}</h5>
                                        <p className="card-text">{project.description}</p>
                                        <div className="mb-3">
                                            <IconComponent icons={project.tools} />
                                        </div>
                                        <a href={project.link} className="btn btn-dark">Github</a>
                                        <a href={project.live} className="btn btn-danger ms-2">Live</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}