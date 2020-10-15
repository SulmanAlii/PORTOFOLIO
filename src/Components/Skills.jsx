import React from "react";
import "../CSS/skill.css";
import js from "../images/js.png";
import html from "../images/html.png";
import css from "../images/css.png";
import react from "../images/react.png";
import bootstrap from "../images/bootstrap.png";
import c from "../images/C.png";
import firebase from "../images/firebase.png";
import github from "../images/github.png";
import intellij from "../images/intellij.jpg";
import java from "../images/java.png";
import jquery from "../images/jquery.png";
import materialui from "../images/materialui.png";
import nodejs from "../images/nodejs.png";
import odoo from "../images/odoo.png";
import postgresql from "../images/postgresql.png";
import vscode from "../images/vscode.ico";

const Skills = () => {
  return (
    <>
      <div className="main_div_skills">
        <h1 className="skill_title">SKILLS</h1>
        {/* //Front end */}
        <h2 className="_title">FRONT-END</h2>
        <div className="_frontend">
          <div className="frontend">
            <div className="_skills ">
              <img src={html} alt="HTML" />
              <span>HTML</span>
            </div>
            <div className="_skills ">
              <img src={css} alt="CSS" />
              <span>CSS</span>
            </div>
            <div className="_skills ">
              <img src={js} alt="JAVASCRIPT" />
              <span>JAVASCRIPT</span>
            </div>
            <div className="_skills ">
              <img src={react} alt="REACTJS" />
              <span>REACTJS</span>
            </div>
          </div>
          <div className="frontend _row2_skills">
            <div className="_skills ">
              <img src={bootstrap} alt="bootstrap" />
              <span>bootstrap</span>
            </div>
            <div className="_skills ">
              <img src={materialui} alt="materialui" />
              <span>material-ui</span>
            </div>
            <div className="_skills ">
              <img src={jquery} alt="JQUERY" />
              <span>JQUERY</span>
            </div>
          </div>
        </div>

        {/* Back-end */}

        <div>
          <h2 className="_title">BACK-END</h2>
          <div className="backend">
            <div className="_skills ">
              <img src={nodejs} alt="NODEJS" />
              <span>NODEJS</span>
            </div>
            <div className="_skills ">
              <img src={postgresql} alt="postgresql" />
              <span>POSTGRESQL</span>
            </div>
            <div className="_skills ">
              <img src={firebase} alt="firebase" />
              <span>FIREBASE</span>
            </div>
          </div>

        </div>

        {/* OTHER */}

        <div>
          <h2 className="_title">OTHER</h2>
          <div className="frontend other">
            <div className="_skills">
              <img src={java} alt="java" />
              <span>java</span>
            </div>
            <div className="_skills">
              <img src={c} alt="C" />
              <span>C</span>
            </div>
            <div className="_skills">
              <img src={github} alt="firebase" />
              <span>GITHUB</span>
            </div>
          </div>
          <div className="_row2_skills other_skills">
            <div className="_skills ">
              <img src={intellij} alt="intellij" />
              <span>INTELLIJ</span>
            </div>
            <div className="_skills ">
              <img src={vscode} alt="vscode" />
              <span>VISUAL STUDIO CODE</span>
            </div>
            <div className="_skills ">
              <img src={odoo} alt="odoo" />
              <span>ODOO</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
