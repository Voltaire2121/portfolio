import './home.css'
import ProfilePic from '../../assets/profilepic2.webp'
import LaptopPic from '../../assets/laptopgreen.jpeg'
import LaptopPic2 from '../../assets/laptopblue.jpeg'
import Footer from '../../components/Footer/footer'
import InfiniteSlider from '../../components/InfiniteSlider/infiniteslider'
import { TechURLs } from '../../utils/strings/technologies'
import { useTranslation } from 'react-i18next'
import { TechStack } from '../../utils/strings/technologies'

const Home = () => {
  const { t } = useTranslation()
  return (
    <div className="homescreen">
      <div className="homeaboutme">
        <h1>{t('welcome')}</h1>
        <h2>{t('welcomemessage')}</h2>
        <button>{t('welcomebutton')}</button>
      </div>
      <div className="homename">
        <div className="homenameinner">
          <hr />
          <h1>{t('im')} Cristian Jiménez</h1>
        </div>
      </div>

      <div className="mainimage">
        <div className="mainimageinner">
          <img src={ProfilePic} />

          <div className="mainimageleft">
            <hr />
            <h1>{t('im')} Cristian</h1>
            <h1>Jiménez</h1>
          </div>
          <div className="mainimageright">
            <p>{t('imdeveloper')}</p>
            <p>{t('reactemphasis')}</p>
            <p>{t('javascriptemphasis')}</p>
            <div className="mainimageright__hover">
              {t('andmore')}
              <div className="mainimageright__hovermore">
                {TechStack.map((tech, index) => (
                  <p key={index}>{tech}</p>
                ))}
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <button className="homescreenbutton">{t('aboutmebutton')}</button>
      <section className="homeprojects">
        <hr />
        <h1>Proyectos</h1>
        <h3>En esta sección te dejo un link a mis proyectos más recientes</h3>
        <div className="projectsquaresdiv">
          <div className="projectsquare">
            <a href="https://vendorproapp.com/index.html">
              <h2>VendorPro</h2>
              <p>{t('vendorpro')}</p>
            </a>
          </div>
          <div className="projectsquare">
            <a href="https://bienestarintegralvital.com/">
              <h2>CRUD + Auth</h2>
              <p>{t('crud')}</p>
            </a>
          </div>
          <div className="projectsquare">
            <h2>Pokemon Party</h2>
            <p>{t('pokemon')}</p>
          </div>
          <div className="projectsquare">
            <a href="https://proferal.co/">
              <h2>Proferal</h2>
              <p>{t('proferal')}</p>
            </a>
          </div>
        </div>
      </section>
      <section className="homemoreaboutme">
        <div className="moreaboutmetitle">
          <hr />
          <h1 className="moreaboutmetitle__h1">{t('moreaboutme')}</h1>
          <h3 className="moreaboutmetitle__h3">{t('beyondaboutme')}</h3>
        </div>
        <div className="moreaboutmetop">
          <img src={LaptopPic} alt="This is me" />
          <div className="moreaboutmetop__inner">
            <h2>{t('besidesprogramming')}</h2>
            <p>{t('besidesprogramming2')}</p>
          </div>
        </div>
        <div className="moreaboutmebottom">
          <img src={LaptopPic2} alt="This is me" />
          <div className="moreaboutmebottom__inner">
            <h2>{t('whereami')}</h2>
            <p>{t('whereami2')}</p>
          </div>
        </div>
      </section>
      <section className="technologies">
        <hr />
        <h1>{t('technologies')}</h1>
        <p>{t('technologies2')}</p>
        <InfiniteSlider imgURLS={TechURLs} gap={40} />
      </section>
      <section className="shallwe">
        <div className="shallwe__left">
          <h1>{t('shall')}</h1>
          <h1>{t('we')}</h1>
        </div>
        <div className="shallwe__right">
          <p>{t('shallwe')}</p>
          <button>{t('shallwebutton')}</button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
