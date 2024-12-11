import { useTranslation } from 'react-i18next'
import './footer.css'
import { Link } from 'react-router-dom'
import CVesp from '../../assets/cvs/Cristian Jimenez Mejia - Desarrollador de software.pdf'
import CVeng from '../../assets/cvs/Cristian Jimenez Mejia - Software Developer.pdf'

const Footer = () => {
  const { t, i18n } = useTranslation()

  const DownloadPDF = () => {
    return i18n.language === 'es-LA' ? (
      <a href={CVesp} download>
        Descarga mi CV
      </a>
    ) : (
      <a href={CVeng} download>
        Download my CV
      </a>
    )
  }

  const WhastappLink = () => {
    const phoneNumber = '+573005618167'
    return (
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(t('whatsappmessage'))}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('emailme')}
      </a>
    )
  }

  return (
    <div className="footer">
      <div className="externallinks">
        <a href="https://www.linkedin.com/in/cristian-jimenez-mejia/">
          LinkedIn
        </a>
        <a href="https://www.instagram.com/cristianj0212/">Instagram</a>
        <a href="https://github.com/Voltaire2121">Github</a>
        <a href="https://www.youtube.com/playlist?list=PLKMZGeQnc66YDCfvaXP7XQy3W1dlOxNRm">
          Podcast
        </a>
        <DownloadPDF />
      </div>
      <div className="internallinks">
        <ul>
          <Link to={'/'}>{t('home')}</Link>
          <Link to={'/aboutme'}>{t('aboutme')}</Link>
          <Link to={'/home#home-projects'}>{t('projects')}</Link>
          <WhastappLink />
        </ul>
      </div>
    </div>
  )
}

export default Footer
