import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from'../assets/img/logo.svg';
import navIcon1 from'../assets/img/nav-icon1.svg';
import navIcon2 from'../assets/img/navIcon2.svg';
import navIcon3 from'../assets/img/navIcon3.svg';
import { useState, useEffect} from 'react';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
    const [activeLink, setActiveLink]= useState('home');
    const [scrolled,seScrolled]= useState(flase);
    useEffect(()=>{
        const onScroll =()=>{
            if(window.scrollY> 50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return()=>window.removeEventListener("scroll",onScroll);
    },[])
    const onUpdateActiveLink=(value)=>{
      setActiveLink(value);
    }

    return(
      <Router>
        <Navbar expand="lg" className={scrolled?"scrolled":""}>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <span className="navbar-toggler-icon"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink == 'home'?'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skill" className={activeLink == 'skill'?'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project"className={activeLink == 'project'?'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
            <a href="#"><img src={navIcon1} alt=""/></a>
            <a href="#"><img src={navIcon2} alt=""/></a>
            <a href="#"><img src={navIcon3} alt=""/></a>
            </div>
            <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Router>
    )
}