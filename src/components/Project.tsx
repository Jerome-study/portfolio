import { projects } from "../utils/utils"

export const ProjectComponent = () => {
    return(
        <div className="overflow-hidden" style={{ minHeight: "90vh"}}>  
            <h1 className="text-center mb-5 ">My Projects</h1>
            <div className="row">
                {projects.map((project: any, index: number) => {
                    return(
                        <div className="col-12 col-sm-6 col-xl-4 m-0 p-0 rounded-0" key={index}>
                            <div className="card h-100 rounded-0 bg-light">
                                <img className="w-100 h-100 rounded-0 bg-dark" loading="lazy" src={project.img} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}