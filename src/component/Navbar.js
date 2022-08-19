import {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import {
    NavLink,
    Link,
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsPersonCircle} from 'react-icons/bs';



function Navbars({setShow, setSearch}) {
    const [isHovering, setIsHovering] = useState(false);


    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    return(
        <>
         <div>

<Navbar bg="success" variant={"dark"} expand="lg" className='navbar-main'>
    <Navbar.Brand id='navbar' as={Link} to='/' style={{'margin':'0 60px 0 30px'}}>ITBURNU</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" className='navbar-toggles'/>
    <Navbar.Collapse id="navbarScroll" >
        <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <NavLink as={Link} to="/"className={({isActive}) => isActive ? 'actives' : 'deactives'}>Əsas</NavLink>
            <NavLink id='product' onClick={() => setShow(true)} as={Link} to="/product" className={({isActive}) => isActive ? 'actives' : 'deactives'}>Məhsullar</NavLink>
            <NavLink as={Link} to="/about" className={ ({isActive}) => isActive ? 'actives' : 'deactives'} >Əlaqə</NavLink>
            <NavLink as={Link} to="/register"className={({isActive}) => isActive ? 'actives' : 'deactives'} id='about-btn'><BsPersonCircle/></NavLink>

        </Nav>

    </Navbar.Collapse>
        <Form className="d-flex d-fle bg-succes">
      <Form.Control
        // type="search"
        placeholder="Axtarış"
        className="me-2a "
        onChange={e => {
          setSearch(e.target.value)
        }}
      />
       <Button as={Link} to="/product" style={{background: isHovering  ? 'rgb(217, 135, 3)' : 'none', border: isHovering ? '' : '2px solid rgb(217, 135, 3)', borderRadius: '30px'}} className='shadow-none'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Axtarış</Button>
      
    </Form>
</Navbar>
</div>
        </>
    ) 
}
export default Navbars;