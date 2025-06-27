import { useState, useEffect} from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";


export const NavBar = () => {
  const [activeLink, setActive] = useState("home");
  const [scrolled, seScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    /*setActiveLink(value); Fiks dette*/
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
       {/* <Navbar.Brand href="#home">
          <img src={logo} alt="logo"/>
          </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            <span className="navbar-toggler-icon"></span>
         </Navbar.Toggle> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Ferdigheter</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Prosjekter</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/even-rudjord/" target="_blank"><img src={navIcon1} alt=""></img></a>
              <a href="https://github.com/evenrudjord" target="_blank"><img src={navIcon4} alt="" style={{ verticalAlign: "middle", transform: "scale(1.5)", transformOrigin: "center" }}></img></a>
              <a href="https://evepto.itch.io/" target="_blank"><img src={navIcon5} alt="" style={{ verticalAlign: "middle", transform: "scale(1.5)", transformOrigin: "center" }}></img></a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}><span>Curriculum Vitae (CV)</span>

            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
