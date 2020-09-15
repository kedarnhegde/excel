import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    
        
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return(
            <ReactBootstrap.Navbar className = 'nav' expand="lg">
            <div className = 'container offset-xl-2'>
                <ReactBootstrap.Navbar.Brand href="/"><h2 className = 'navbarbrand'><i><b>excel</b></i></h2></ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" className='hamburger' />
                <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootstrap.Nav className="mr-auto">
                    <ReactBootstrap.Nav.Link href="/"><span className = 'inner1'>Home</span></ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="/installations/"><span className = 'inner1'>Installations</span></ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="/products/"><span className = 'inner1'>Products</span></ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="/about/"><span className = 'inner1'>About</span></ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="/contact/"><span className = 'inner1 mr-auto'>Request Callback</span></ReactBootstrap.Nav.Link>
                
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
            </div>
            </ReactBootstrap.Navbar> 
        );
    }
}

export default Nav;