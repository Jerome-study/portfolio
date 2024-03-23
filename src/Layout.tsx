import { Outlet } from "react-router-dom";

export const Layout = () => {
    return(
        <main className="py-4" style={{backgroundColor:"#FAF9F6", minHeight:"90vh"}}>
            <Outlet />
        </main>
    )
}