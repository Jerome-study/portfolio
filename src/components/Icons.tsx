

export const IconComponent = ({ icons } : any) => {
    return(
        <div className="d-flex gap-2">
            {icons.map((icon: any, index: number) => {
                return(
                    <div className="" key={index}>
                        {icon}
                    </div>
                )
            })}
        </div>
    )
}