import React from "react";
import "../CSS/cv.css";
import { Document, Page } from 'react-pdf';

function CV() {
  return (
    <div className="CV">
          {/* <embed src={curriculumVitae}  type="application/pdf"/> */}
          <div id="myname_title_profession">
              <h1>Sulman Ali</h1>
              <h3>Junior Web Developer</h3>
            </div>

      <hr></hr>
      
      <div className="cv_info_main">
        <div className="left_perfil">
          <div className="summary">
            <h2 className="margin_beetween_elements">SUMMARY</h2>
            <p className="margin_beetween_elements">Hello!</p>
            <p className="margin_beetween_elements">
            I am currently doing a Full Stack Javascript Bootcamp (ReactJs + NodeJs + MySQL) at Fundación Esplai.
            I recently completed my higher degree in computer science specifically in Multiplatform Application Development (DAM).
            I have always been interested in working with new technologies and being part of a great team, and I have prepared myself with the goal of meeting the professional profile.
            I hope to have the opportunity to talk to you and share my knowledge and be able to be part of the work team.
            </p>

            <p className="margin_beetween_elements">Greeting Sulman Ali</p>
          </div>
          <hr />
          <div className="summary summary_education">
            <h2>EDUCATION</h2>
            <ul className="margin_beetween_elements">
              <h4>FULL STACK JAVASCRIPT BOOTCAMP · (sep 2020-Present)</h4>
              <li>
              FUNDACIÓN ESPLAI  
              </li>
            </ul>
            <ul className="margin_beetween_elements">
              <h4>Desarrollador de Aplicaciones Multiplatforma), Computer Programming,
              Multiplatform</h4>
              <li>
              Institut Puig Castellar · (2016 - 2019)
              </li>
            </ul>
            <ul className="margin_beetween_elements">
              <h4>Bachelor's degree, Science/technologic</h4>
              <li>IES Pau Casals · (2014 - 2016)</li>
            </ul>
            <ul className="margin_beetween_elements">
              <h4>HIGH SCHOOL DIPLOMA(ESTUDIOS SECUNDARIOS OBLIGATORIOS</h4>
              <li>IES Pau Casals · (2010-2014))</li>
            </ul>
          </div>
              </div>
              <hr/>
        <div className="right_education_experience ">
          <div className="experience margin_beetween_elements">
            <h2>EXPERIENCE</h2>
            <div className="experience_">
              <ul>
                <h4>IES NUMÁNCIA</h4>
                <h4 className="frontend_cv">Frontend Developing</h4>
                <li>
                 2020-01- 2020-06 (5 months)<br/>
                  <small>Barcelona, Catalonia, Spain</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
