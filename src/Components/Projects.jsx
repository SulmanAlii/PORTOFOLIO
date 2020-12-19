import React from "react";
import "../CSS/projects.css";
import netflixProject from "../images/netflix_capture.JPG";
import spotify from "../images/spotify.JPG";
import amazon from "../images/amazon_clone.JPG";
import weather from "../images/weather.JPG";
import keep from "../images/keep.PNG";


const Projects = () => {




  
  return (
    <div className="project">
      <h1 className="projectTitle">PROJECTS</h1>
      <hr />

    {/* KEEP IT BLUE */}
    <div className="project_info">
    <h1>1.KEEP IT BLUE</h1>
    <div className="project_title">
      <div className="img_div">
       <img src={keep} alt="" />
      </div>
      <div className="about_info">
        <div className="infoAboutProject">
        <h3>About </h3>
        <p>

        {/* Aplicación web donde la página recibe datos (películas) de una API pública (MovieDB)
            y se muestra por tipo. Esta aplicación se centra más en la parte Front-end
            aunque he trabajado con Firebase (cada usuario puede comentar cualquier película y ver su comentario). */}
           
            Application where users can publish their comments on the state of a beach by adding images and being 
            able to see the state of each beach with user authentication. In the end, the purpose of the application 
            is to improve our beaches in Barcelona and improve our environment.
        </p>
          </div>
        <div className="linkBtn">
        <a
          className="website_link"
          href="https://keepit-blue.herokuapp.com/"
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
          <span>MYSQL</span>
          <span>NODEJS</span>
          <span>JAVASCRIPT</span>
          <span>EXPRESSJS</span>
          <span>BOOTSTRAP</span>
        </div>
        <div>

          <a href="https://github.com/SulmanAlii/Keep_It_Blue_FrontEND"  target="_blank" rel="noopener noreferrer">
          GITHUB 
          </a>
          </div>
        </div>
    </div>
  </div>


      {/* NETFLIX PROJECT */}

      <div className="project_info">
        <h1>1.NETFLIX CLONE</h1>
        <div className="project_title">
          <div className="img_div">
           <img src={netflixProject} alt="" />
          </div>
          <div className="about_info">
            <div className="infoAboutProject">
            <h3>About </h3>
            <p>

            {/* Aplicación web donde la página recibe datos (películas) de una API pública (MovieDB)
                y se muestra por tipo. Esta aplicación se centra más en la parte Front-end
                aunque he trabajado con Firebase (cada usuario puede comentar cualquier película y ver su comentario). */}
               
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
        <h1>2.SPOTIFY CLONE</h1>
        <div className="project_title">
          <img src={spotify} alt="" />
          <div className="about_info">
            <div  className="infoAboutProject">
            <h3>About</h3>
            <p>
              {/* Aplicación web en el cual un usuario volverá después de iniciar
              sesión a la pagina de localhost y posteriormente requerir datos de
              API DE SPOTIFY y una vez tenga los datos, mostrar el playlist y
              las canciones del usuario logeado. */}

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
        <h1>3. AMAZON CLONE</h1>
        <div className="project_title">
          <img src={amazon} alt=""  className="amazon_img"/>
          <div className="about_info">
          <div className="infoAboutProject">
            <h3>About</h3>
            <p>
                {/* Utilizando la autenticación de Firebase el usuario puede logear y
                salir de la sesión, y una vez logeado el usuario puede añadir
                productos a su carro de compra y posteriormente quitar algun
                producto de la compra si lo prefiero. */}


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
        <h1>4. WEATHCITY</h1>
        <div className="project_title">
          <img src={weather} alt="" />
          <div className="about_info">
          <div className="infoAboutProject">
            <h3>About</h3>
            <p>
              {/* Aplicación de metereologia que permite saber en tiempo real el
              clima en cada ciudad del mundo, mostrándolas por ciudades de cada
              continente. Otra función que tiene la aplicación es que permite
              buscar el clima de cualquier ciudad al intoducir el nombre el
              buscador. */}
                
              
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
