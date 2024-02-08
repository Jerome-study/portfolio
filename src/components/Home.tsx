import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";


export const HomeComponent = () => {
    return(
        <>
           
            <div className="d-flex align-items-center justify-content-center section-body" style={{minHeight:"90vh"}}>
                <div>
                    <div className="row">
                        <div className="col-md">
                            <div>
                                <h1 className='text-lg-start text-center display-2'>Hello, I'am Jerome</h1>
                                <p className='text-lg-start text-center'>I want to become a front-end developer and soon to be a full-stack developer</p>
                            </div>
                            </div>
                            <div className="col-md  max-w-100 text-center my-4 my-md-0">
                                <img src='spiderman.png' className='img-fluid' style={{maxWidth: "20rem"}}  />
                            </div>
                        </div> 
                        <div className='text-md-start text-center'>
                            <FaHtml5 color='orange' size={"2rem"} />
                            <IoLogoCss3 color='blue' size={"2rem"} style={{marginLeft: "5px"}} />
                            <IoLogoJavascript color='yellow' size={"2rem"} style={{backgroundColor:"black", marginLeft: "10px"}}/>
                            <FaReact color='lightblue' size={"2rem"} style={{marginLeft: "16px"}} className='loaderIcon' />
                            <FaNode color='green' size={"3rem"} style={{marginLeft: "15px"}}/>
                            <SiMongodb color='green' size={"2rem"} style={{marginLeft: "15px"}}/>
                            <FaBootstrap  color='blue' size={"2rem"} style={{marginLeft: "15px"}}/>
                            <FaGitSquare color='orange' size={"2rem"} style={{marginLeft: "10px"}}/>
                            <FaGithub color='black' size={"2rem"} style={{marginLeft: "10px"}}/>
                        </div> 
                    </div>
                </div>    
        </>
    )
}