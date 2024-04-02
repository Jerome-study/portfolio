import { TechStackIcons } from "./TeckStack"
import { GrLinkedin } from "react-icons/gr";
import { svg } from "../utils/utils";

export const HomeComponent = () => {
    return(
        <>
            <div className="d-flex align-items-center justify-content-center px-3 py-4" style={{minHeight:"85vh"}}>
                <div>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div>
                                <h1 className='text-lg-start text-center display-2'>Hello, I'am Jerome</h1>
                                <p className='text-lg-start text-center'>I want to become a front-end developer and soon to be a full-stack developer!</p>
                                <div className="text-center text-lg-start mb-md-3">
                                    <a href="https://www.linkedin.com/in/jerome-dimaculangan-844100302">
                                        <GrLinkedin className="bg-light" color='#0077B5' size={"1.7rem"} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 max-w-100 text-center my-4 my-md-0">
                            <img loading="lazy" src={svg} className='w-100' style={{ maxWidth: "20rem"}}  />
                        </div>
                    </div> 
                    <div className="mt-3">
                        <h1 className="text-center sans-serif me-2 text-lg-start">Tech Stack</h1>
                        <div>
                            <TechStackIcons />
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
}