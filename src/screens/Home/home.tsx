import './home.css'
import ProfilePic from '../../assets/profilepic2.webp'

const Home = () => {
  return (
    <div className="homescreen">
      <div className="homeaboutme">
        <h1>¡Bienvenido!</h1>
        <h2>
          Te doy la bienvenida a mi portafolio, espero que este sea un espacio
          donde puedas apreciar de alguna manera mis habilidades como
          desarrollador y conocerme un poco más, disfruta tu estadía
        </h2>
        <button>Te gusta lo que ves? Contáctame</button>
      </div>
      <div className="homename">
        <div className="homenameinner">
          <hr />
          <h1>Soy Cristian Jiménez</h1>
        </div>
      </div>

      <div className="mainimage">
        <div className="mainimageinner">
          <img src={ProfilePic} />

          <div className="mainimageleft">
            <hr />
            <h1>Soy Cristian</h1>
            <h1>Jiménez</h1>
          </div>
          <div className="mainimageright">
            <p>Desarrollador frontend</p>
            <p>Énfasis React/React Native</p>
            <p>Javascript, Typescipt</p>
            <div className="mainimageright__hover">
              y más...
              <div className="mainimageright__hovermore">
                <p>Java</p>
                <p>android</p>
                <p>IOs</p>
                <p>Git/Github</p>
                <p>Firebase</p>
                <p>Figma</p>
                <p>SQL</p>
                <p>illustrator</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <button className="homescreenbutton">Acerca de mí</button>
      <div className="homeprojects">
        <hr />
        <h1>Proyectos</h1>
        <h3>En esta sección te dejo un link a mis proyectos más recientes</h3>
        <div className="projectsquaresdiv">
          <div className="projectsquare">
            <h2>Proyecto</h2>
            <p>Este es un proyecto</p>
          </div>
          <div className="projectsquare">
            <h2>Proyecto</h2>
            <p>Este es un proyecto</p>
          </div>
          <div className="projectsquare">
            <h2>Proyecto</h2>
            <p>Este es un proyecto</p>
          </div>
          <div className="projectsquare">
            <h2>Proyecto</h2>
            <p>Este es un proyecto</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
