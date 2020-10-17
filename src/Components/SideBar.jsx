import React,{useState} from "react";
import cvImage from "../images/0.jpg";
import '../CSS/sidebar.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';

const SideBar = () => {

   const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(true);
  // const [active3, setActive3] = useState(true);



  // const setActiveBtn = (index) => {
  //   let e = index.target;
  //   e.classList.add("active");

  // }


  const menu_btn = () => {
    setActive(!active);
    setActive2(!active2);
   

  }

  return (
    <>
      <div className="main">
        {active2 ?
          <nav className="nav">
            <img src={cvImage} alt="img" />
            <span>
              <strong>SULMAN ALI</strong>
            </span>
            <h4 >JUNIOR WEB DEVELOPER</h4>
            <div className="nav_titles">
              <Link to="/">
                <a href="/" className="active" >SKILLS</a>
              </Link>
              <Link to="/projects">
                <a href="/projects" className="nActive" >PROJECTS</a>
              </Link>
              <Link to="/cv">
                <a href="/cv" className="nActive" >MY CV</a>
              </Link>
            </div>
            <div className="contact_section">
              <span className="contact_title">CONTACT ME: </span>
              <div className="contact_icons">
                <a href="https://www.linkedin.com/in/sulman-ali-54bb211b2?jobid=1234&lipi=urn%3Ali%3Apage%3Ad_jobs_easyapply_pdfgenresume%3BszxM2gaMQn29ubahVlzXMQ%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_jobs_easyapply_pdfgenresume-v02_profile"
                  target="_blank"
                  rel="noopener noreferrer"><LinkedInIcon className="_icon" />
                </a>
                
                <a href="https://github.com/SulmanAlii" target="_blank"
                  rel="noopener noreferrer" ><GitHubIcon className="_icon" /></a>
              </div>
            </div>
             
          </nav>
          :  
          <nav className=" nav responsiveNav">
            <img src={cvImage} alt="img" />
            <span>
              <strong>SULMAN ALI</strong>
            </span>
            <h4 >JUNIOR WEB DEVELOPER</h4>
            <div className="nav_titles">
              <Link to="/">
                <a href="/" className="active" >SKILLS</a>
              </Link>
              <Link to="/projects">
                <a href="/projects" className="nActive" >PROJECTS</a>
              </Link>
              <Link to="/cv">
                <a href="/cv" className="nActive" >MY CV</a>
              </Link>
            </div>
            <div className="contact_section">
              <span className="contact_title">CONTACT ME: </span>
              <div className="contact_icons">
                <a href="https://www.linkedin.com/in/sulman-ali-54bb211b2?jobid=1234&lipi=urn%3Ali%3Apage%3Ad_jobs_easyapply_pdfgenresume%3BszxM2gaMQn29ubahVlzXMQ%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_jobs_easyapply_pdfgenresume-v02_profile"
                  target="_blank"
                  rel="noopener noreferrer"><LinkedInIcon className="_icon" />
                </a>
                
                <a href="https://github.com/SulmanAlii" target="_blank"
                  rel="noopener noreferrer" ><GitHubIcon className="_icon" /></a>
              </div>
            </div>
             
          </nav>
          
          
          
          
          
          
          
          }

{active ?  <div className="hamberger_menu" onClick={menu_btn}>
          <div className="line primera_linia"></div>
          <div className="line segunda_linia"></div>
          <div className="line tercera_linia"></div>
        </div>
        :
        <div className="hamberger_menu change" onClick={menu_btn}>
          <div className="line primera_linia"></div>
          <div className="line segunda_linia"></div>
          <div className="line tercera_linia"></div>
        </div>
        }

       
      </div>
    </>
  );
};

export default SideBar;
