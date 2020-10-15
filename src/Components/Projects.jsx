import React from "react";
import "../CSS/projects.css";
import netflixProject from "../images/netflix_capture.JPG";
import spotify from "../images/spotify.JPG";
import amazon from "../images/amazon_clone.JPG";
import weather from "../images/weather.JPG";

const Projects = () => {
  return (
    <div className="project">
      <h1 className="projectTitle">PROJECTS</h1>
      <hr />
      <div className="project_info">
        <h1>1.NETFLIX CLONE</h1>
        <div className="project_title">
          <div className="img_div">
           <img src={netflixProject} alt="" />
          </div>
          <div className="about_info">
            <div>
            <h3>About </h3>
            <p>
                Es una aplicación web donde la pagina recibe datos(peliculas) de
                una API pública(MovieDB) y va mostrando por tipo. Esta aplicación
                esta enfocada más en la parte de Front-end aunque he trabajado con
                Firebase(cada usuario puede comentar en cualquier pelicula y ver
                su comentario).
            </p>
              </div>
            <div>
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
          <div>
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

      <div className="project_info">
        <h1>2.SPOTIFY CLONE</h1>
        <div className="project_title">
          <img src={spotify} alt="" />
          <div className="about_info">
            <div>
            <h3>About</h3>
            <p>
              Aplicación web en el cual un usuario volverá después de iniciar
              sesión a la pagina de localhost y posteriormente requerir datos de
              API DE SPOTIFY y una vez tenga los datos, mostrar el playlist y
              las canciones del usuario logeado.
            </p>
            </div>
            <div>
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
            <div>
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

      <div className="project_info">
        <h1>3. AMAZON CLONE</h1>
        <div className="project_title">
          <img src={amazon} alt="" />
          <div className="about_info">
          <div>
            <h3>About</h3>
            <p>
                Utilizando la autenticación de Firebase el usuario puede logear y
                salir de la sesión, y una vez logeado el usuario puede añadir
                productos a su carro de compra y posteriormente quitar algun
                producto de la compra si lo prefiero.
            </p>
            </div>
            <div>
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
          <div>
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

      <div className="project_info">
        <h1>4. WEATHCITY</h1>
        <div className="project_title">
          <img src={weather} alt="" />
          <div className="about_info">
          <div>
            <h3>About</h3>
            <p>
              Aplicación de metereologia que permite saber en tiempo real el
              clima en cada ciudad del mundo, mostrándolas por ciudades de cada
              continente. Otra función que tiene la aplicación es que permite
              buscar el clima de cualquier ciudad al intoducir el nombre el
              buscador.
            </p>
            </div>
            <div>
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
            <div>
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
