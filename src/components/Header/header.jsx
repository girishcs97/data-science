import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../images/logo.svg'
import './header.css'

function Header() {
    return (
        <>
        <p className='p-2 clark-edu'>Clark University</p>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav-con">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt={'Logo'} className='img-logo'/>
                    <span style={{fontWeight:'600'}}>Data Science Program</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">UnderGraduate Programs</Nav.Link>
                        <Nav.Link href="#pricing">Research</Nav.Link>
                        <Nav.Link href="#features">Careers and Internships</Nav.Link>
                        <Nav.Link href="#pricing">Opportunites</Nav.Link>
                        <Nav.Link href="#features">Faculty</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default Header;