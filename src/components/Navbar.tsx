import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const NavigationBar = () => {
    const location = useLocation();
    return(
        <>
           <Navbar expand="sm" collapseOnSelect className="bg-white shadow-sm"  >
                <Container >
                    <Navbar.Brand className="fw-bold">MyPortfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" activeKey={location.pathname}>
                        <Nav.Link to={"/"} as={Link} eventKey="1">Home</Nav.Link>
                        <Nav.Link to={"/projects"} as={Link} eventKey="2"  >Projects</Nav.Link>
                        <Nav.Link to={"/contacts"}  as={Link}  eventKey= "3"  >Contacts</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}