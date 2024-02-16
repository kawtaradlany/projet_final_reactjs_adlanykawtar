import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";

import logo from "../assets/images/logo.png"
import { useNavigate } from 'react-router-dom';


export function Header() {
  const navigate = useNavigate()


  return (
    <Navbar expand="lg" className="bg-body-tertiary flex justify-between">
      <Container className=''>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className=' flex justify-center ' id="basic-navbar-nav">
          <Nav className=" w-25 flex items-center justify-around ">
            <Nav.Link href="#home"onClick={(e)=> {navigate (`/`)}}>Home</Nav.Link>
            <Nav.Link href="#link" onClick={(e)=> {navigate (`/shop`)}} >Shope</Nav.Link>
            <Nav.Link href="#home"onClick={(e)=> {navigate (`/contact`)}}>Contact</Nav.Link>
            <Nav.Link href="#link" onClick={(e)=> {navigate (`/about`)}}>About</Nav.Link>

          </Nav>
        </Navbar.Collapse>
        <div className='flex gap-x-3 text-3xl'>
          <button onClick={(e)=> {navigate('/carte')}}>
            <MdOutlineShoppingBag  />
          </button>
          <p>|</p>
          <button onClick={(e)=> {navigate('/user')}}>
            <HiOutlineUserCircle />
          </button>
        </div>

      </Container>
    </Navbar>
  );
}
