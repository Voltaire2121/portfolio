import { useTranslation } from 'react-i18next'
import './about.css'
import GamingTV from '../../assets/gaming.png'
import InfiniteSlider from '../../components/InfiniteSlider/infiniteslider'
import GamingPic1 from '../../assets/gamingpics/gaming1.jpg'
import GamingPic2 from '../../assets/gamingpics/gaming2.jpg'
import GamingPic3 from '../../assets/gamingpics/gaming3.jpg'

const About = () => {
  const { t } = useTranslation()

  return (
    <div className="aboutme">
      <div className="homeaboutme">
        <h1>{t('aboutme')}</h1>
        <h2>{t('aboutmeintro')}</h2>
      </div>
      <section>
        <div className="aboutmeprogramming">
          <div className="aboutmeprogrammingtop">
            <h2>{t('aboutmeprogramming')}</h2>
            <hr />
          </div>

          <div className="aboutmeprogramminginner">
            <div className="aboutmeprogramminginner__images">
              <div className="aboutmeprogramminginner__infinite">
                <InfiniteSlider
                  height={250}
                  width={225}
                  gap={0}
                  noPadding
                  glow={false}
                  slow
                  images={[
                    { src: GamingPic1, alt: '' },
                    { src: GamingPic2, alt: '' },
                    { src: GamingPic3, alt: '' },
                    { src: GamingPic1, alt: '' },
                    { src: GamingPic2, alt: '' },
                    { src: GamingPic3, alt: '' },
                    { src: GamingPic1, alt: '' },
                    { src: GamingPic2, alt: '' },
                  ]}
                />
              </div>
            </div>
            <img className="aboutmeprogramminginner__img" src={GamingTV} />
            <p>{t('aboutmeprogramming2')}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="aboutmestudying">
          <div className="aboutmestudyingtop">
            <h2>{t('aboutmystudies')}</h2>
            <hr />
          </div>
          <div></div>
        </div>
      </section>
    </div>
  )
}

export default About
