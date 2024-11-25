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
            <p>
              Javascript, Typescipt <h3>y más...</h3>
            </p>
            <hr />
          </div>
        </div>
      </div>
      <button className="homescreenbutton">Acerca de mí</button>
    </div>
  )
}

export default Home
