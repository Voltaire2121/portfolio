import { useTranslation } from 'react-i18next'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  const { t } = useTranslation()
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
        <a href="./">{t('downloadcv')}</a>
      </div>
      <div className="internallinks">
        <ul>
          <Link to={'/'}>{t('home')}</Link>
          <Link to={'/aboutme'}>{t('aboutme')}</Link>
          <li>{t('projects')}</li>
          <li>{t('emailme')}</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
