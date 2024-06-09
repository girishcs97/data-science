import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom'
import Logo from '../../images/logo.svg'
import './header.css'

function Header() {
    const history = useNavigate();

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return (
        <>
            <p className='p-2 clark-edu'>
                <div className='container' onClick={() => openInNewTab('https://www.clarku.edu')}>
                    Clark University
                </div>
            </p>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav-con">
                <Container>
                    <Navbar.Brand onClick={() => { history("/") }} className={'d-flex'}>
                        <img src={Logo} alt={'Logo'} className='img-logo' />
                        <p style={{ fontWeight: '600', cursor: 'pointer',paddingTop:'13px' }}>Data Science Program</p></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <Nav.Link onClick={() => { history("/program") }} className='page-scroll'>Undergraduate Program</Nav.Link>
                            <Nav.Link onClick={() => { history("/research") }}>Research</Nav.Link>
                            <Nav.Link onClick={() => { history("/explearning") }}>Experiential Learning</Nav.Link>
                            <Nav.Link onClick={() => { history("/opportunities") }}>Opportunites and Services</Nav.Link>
                            <Nav.Link onClick={() => { history("/faculty") }}>Faculty</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;