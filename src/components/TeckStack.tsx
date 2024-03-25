import { iconsHome } from "../utils/utils"

export const TechStackIcons = () => {
    return(
        <div className='gap-2 d-flex justify-content-center pt-3 justify-content-lg-start' style={{ flexWrap: "wrap"}}>
            {iconsHome.map((icon: any, index: number) => {
                return(
                    <div key={index} className="bg-white p-2 rounded-4 shadow-sm border border-3 d-flex justify-content-center align-items-center" >
                        {icon}
                    </div>
                )
            })}
        </div> 
    )
}