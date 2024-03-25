import { TechStackIcons } from "./TeckStack"
import { GrLinkedin } from "react-icons/gr";

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
                                <a href="https://www.linkedin.com/in/jerome-dimaculangan-2a139b2a0">
                                    <GrLinkedin className="bg-light" color='#0077B5' size={"1.7rem"} />
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 max-w-100 text-center my-4 my-md-0">
                            <img loading="lazy" src='spiderman.png' className='img-fluid' style={{maxWidth: "20rem"}}  />
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