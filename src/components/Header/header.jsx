import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom'
import Logo from '../../images/logo.svg'
import './header.css'

function Header() {
    const history = useNavigate();
    return (
        <>
        <p className='p-2 clark-edu'>Clark University</p>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav-con">
            <Container>
                <Navbar.Brand onClick={()=>{history("/")}}>
                    <img src={Logo} alt={'Logo'} className='img-logo'/>
                    <span style={{fontWeight:'600',cursor:'pointer'}}>Data Science Program</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="">
                        <Nav.Link href="#programs-page" className='page-scroll'>UnderGraduate Programs</Nav.Link>
                        <Nav.Link onClick={()=>{history("/research")}}>Research</Nav.Link>
                        <Nav.Link onClick={()=>{history("/career")}}>Careers and Internships</Nav.Link>
                        <Nav.Link onClick={()=>{history("/opportunities")}}>Opportunites</Nav.Link>
                        <Nav.Link onClick={()=>{history("/faculty")}}>Faculty</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default Header;