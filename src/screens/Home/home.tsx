import './home.css'
import ProfilePic from '../../assets/profilepic2.webp'
import LaptopPic from '../../assets/laptopgreen.jpeg'
import LaptopPic2 from '../../assets/laptopblue.jpeg'
import Footer from '../../components/Footer/footer'

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
                <p>Android</p>
                <p>IOs</p>
                <p>Git/Github</p>
                <p>Firebase</p>
                <p>Figma</p>
                <p>SQL</p>
                <p>Illustrator</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <button className="homescreenbutton">Acerca de mí</button>
      <section className="homeprojects">
        <hr />
        <h1>Proyectos</h1>
        <h3>En esta sección te dejo un link a mis proyectos más recientes</h3>
        <div className="projectsquaresdiv">
          <div className="projectsquare">
            <h2>VendorPro</h2>
            <p>El inicio de todo... El proyecto principal de mi carrera</p>
          </div>
          <div className="projectsquare">
            <h2>CRUD + Auth</h2>
            <p>
              Proyecto Freelance desarrollado para un tercero usando Firebase
            </p>
          </div>
          <div className="projectsquare">
            <h2>Pokemon Party</h2>
            <p>Uso de fetch combinado con herramientas varias de React</p>
          </div>
          <div className="projectsquare">
            <h2>Proferal</h2>
            <p>Página de internet estática con uso de HTML-CSS</p>
          </div>
        </div>
      </section>
      <section className="homemoreaboutme">
        <div className="moreaboutmetitle">
          <hr />
          <h1 className="moreaboutmetitle__h1">Un poco más sobre mí</h1>
          <h3 className="moreaboutmetitle__h3">
            Vamos un poco más allá de la programación
          </h3>
        </div>
        <div className="moreaboutmetop">
          <img src={LaptopPic} alt="This is me" />
          <div className="moreaboutmetop__inner">
            <h2>Además de ser programador</h2>
            <p>
              Nací en Montería-Colombia el 2 de diciembre de 1988, desde los
              diez años me apasioné por los videojuegos y pensé que la mejor
              manera de vivir haciendo lo que más me gustaba era volviéndome
              programador especializado en gaming... Hoy en día pienso un poco
              distinto pero mi pasión no ha cambiado.
            </p>
          </div>
        </div>
        <div className="moreaboutmebottom">
          <img src={LaptopPic2} alt="This is me" />
          <div className="moreaboutmebottom__inner">
            <h2>Donde me encuentro</h2>
            <p>
              Desde los dos años, vine a vivir a Barranquilla, la cuarta ciudad
              más grande de Colombia, donde cursé todos mis estudios hasta
              convertirme en ingeniero de la Universidad del Norte, la más
              importante de la ciudad, además tuve la oportunidad de viajar a
              Milán-Italia a realizar mis estudios de maestría, culminando mi
              magister en ingeniería administrativa en el año 2013.
            </p>
          </div>
        </div>
      </section>
      <section className="shallwe">
        <h1>Shall We?</h1>
        <div className="shallwe__right">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est esse
            modi veniam quis corrupti, dolorum assumenda sint soluta
            reprehenderit ullam quas explicabo, temporibus sed autem maxime
            natus impedit ratione earum.
          </p>
          <button>Email me</button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
