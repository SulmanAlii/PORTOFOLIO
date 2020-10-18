import React from "react";
import "../CSS/projects.css";
import netflixProject from "../images/netflix_capture.JPG";
import spotify from "../images/spotify.JPG";
import amazon from "../images/amazon_clone.JPG";
import weather from "../images/weather.JPG";
import library from '../images/library.JPG';

const Projects = () => {




  
  return (
    <div className="project">
      <h1 className="projectTitle">PROJECTS</h1>
      <hr />

    {/* LIBRERIA */}
      
      <div className="project_info">
        <h1>1.LIBRARY</h1>
        <div className="project_title">
          <div className="img_div">
           <img src={library} alt="" />
          </div>
          <div className="about_info">
            <div className="infoAboutProject">
            <h3>About </h3>
            <p>
                A simple application basically made to be able to test the different Javascript functionalities, for example delete a book, add or search. 
            </p>
              </div>
            <div className="linkBtn">
            <a
              className="website_link"
              href="file:///C:/Users/Usuario/Desktop/vsProjects/Library/library.html"
              target="_blank"  without rel="noopener noreferrer"
            >
              GO TO WEBSITE
            </a>
            </div>
          </div>
          <div className="tech_used_info">
          <div className="tech_used_project">
              <h3>Technology</h3>
              <span>JAVASCRIPT</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div>

              {/* <a href="https://github.com/SulmanAlii/Netflix-clone-fetch-TMDB-API-Firebase"  target="_blank" rel="noopener noreferrer">
              GITHUB 
              </a> */}
              </div>
            </div>
        </div>
      </div>


      {/* NETFLIX PROJECT */}

      <div className="project_info">
        <h1>2.NETFLIX CLONE</h1>
        <div className="project_title">
          <div className="img_div">
           <img src={netflixProject} alt="" />
          </div>
          <div className="about_info">
            <div className="infoAboutProject">
            <h3>About </h3>
            <p>

            
               
                Web application where the page receives data (movies) from a public API (MovieDB) 
                and is displaying by type. This application is focused more on the Front-end part 
                although I have worked with Firebase (each user can comment on any movie and see their comment).
            </p>
              </div>
            <div className="linkBtn">
            <a
              className="website_link"
              href="https://netflix-clone-14d12.web.app/"
              target="_blank"  without rel="noopener noreferrer"
            >
              GO TO WEBSITE
            </a>
            </div>
          </div>
          <div className="tech_used_info">
          <div className="tech_used_project">
              <h3>Technology</h3>
              <span>REACTJS</span>
              <span>FIREBASE</span>
              <span>TMBD-API</span>
              <span>JAVASCRIPT</span>
            </div>
            <div>

              <a href="https://github.com/SulmanAlii/Netflix-clone-fetch-TMDB-API-Firebase"  target="_blank" rel="noopener noreferrer">
              GITHUB 
              </a>
              </div>
            </div>
        </div>
      </div>

      {/* SPOTIFY PROJECT */}

      <div className="project_info">
        <h1>3.SPOTIFY CLONE</h1>
        <div className="project_title">
          <img src={spotify} alt="" />
          <div className="about_info">
            <div  className="infoAboutProject">
            <h3>About</h3>
            <p>
             

              Web application in which a user will return after starting
              session to the localhost page and later require data from
              SPOTIFY API and once you have the data, show the playlist and
              the songs of the logged in user.
            </p>
            </div>
            <div  className="linkBtn">
            <a
              className="website_link"
              href="https://spotify-clone-ba4c1.web.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
            GO TO WEBSITE
            </a>
            </div>
          </div>
          <div className="tech_used_info">
            <div  className="tech_used_project">
              <h3>Technology</h3>
              <span>REACTJS</span>
              <span>FIREBASE</span>
              <span>spotify-API</span>
              <span>JAVASCRIPT</span>
              </div>

            <div>
              <a href="https://github.com/SulmanAlii/spotify_clone" target="_blank" rel="noopener noreferrer">
                GITHUB
              </a>
              </div>
            </div>
        </div>
      </div>

      {/* AMAZON CLONE  */}

      <div className="project_info">
        <h1>4. AMAZON CLONE</h1>
        <div className="project_title">
          <img src={amazon} alt=""  className="amazon_img"/>
          <div className="about_info">
          <div className="infoAboutProject">
            <h3>About</h3>
            <p>
                


                Using Firebase authentication the user can log in and
                log out the session, and once logged in, the user can add
                products to shopping cart and later remove any
                purchased product if client prefer.
               
            </p>
            </div>
            <div  className="linkBtn">
            <a
              className="website_link"
              href="https://clone-69b72.web.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
                GO TO WEBSITE
            </a>
              </div>
          </div>
          <div className="tech_used_info">
          <div  className="tech_used_project">
              <h3>Technology</h3>
              <span>REACTJS</span>
              <span>FIREBASE</span>
              <span>CONTEXT-API</span>
              <span>JAVASCRIPT</span>
            </div>
            <div>

              <a href="https://github.com/SulmanAlii/amazon_clone_REACTJS" target="_blank" rel="noopener noreferrer">
                  GITHUB
              </a>
              </div>
            </div>
        </div>
      </div>

      {/* WEATHET APP  */}

      <div className="project_info">
        <h1>5. WEATHCITY</h1>
        <div className="project_title">
          <img src={weather} alt="" />
          <div className="about_info">
          <div className="infoAboutProject">
            <h3>About</h3>
            <p>
            
                
              
              Meteorology application that allows to know in real time the climate in each city of the world, 
              showing them by cities of each continent. 
              Another function that the application has is that it allows you to search for the
               weather of any city by entering the name of the search engine.
            </p>
            </div>
            <div  className="linkBtn">
            <a
              className="website_link"
              href="https://weather-app-eff12.web.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              GO TO WEBSITE
            </a>
            </div>
          </div>
          <div className="tech_used_info">
            <div  className="tech_used_project">
              <h3>Technology</h3>
              <span>REACTJS</span>
              <span>FIREBASE</span>
              <span>openweather-API</span>
              <span>JAVASCRIPT</span>
              </div>
                <div>
              <a href="https://github.com/SulmanAlii/Weather-app" target="_blank" rel="noopener noreferrer">
                GITHUB
              </a>
              </div>
            </div>       
        </div>
      </div>
    </div>
  );
};

export default Projects;
