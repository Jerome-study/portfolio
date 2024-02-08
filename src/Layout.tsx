import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

export const Layout = () => {
    return(
        <main style={{backgroundColor:"#FAF9F6", minHeight:"90vh"}}>
            <Container>
                <Outlet />
            </Container>
        </main>
    )
}