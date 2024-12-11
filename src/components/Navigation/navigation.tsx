import './navigation.css'
import ProfilePic from '../../assets/profilepic.png'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { AppContextType } from '../../context/AppContextProvider'
import { useTranslation } from 'react-i18next'

const Navigation = () => {
  const { t, i18n } = useTranslation()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const { changeLanguage } = useContext(AppContext) as AppContextType

  const handleClose = (languageParsed: string) => {
    if (typeof languageParsed === 'string') changeLanguage(languageParsed)
    setAnchorEl(null)
  }

  const WhastappLink = () => {
    const phoneNumber = '+573005618167'
    return (
      <a
        className="linkdiv__li"
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(t('whatsappmessage'))}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('emailme')}
      </a>
    )
  }

  return (
    <div className="navigation">
      <div className="innerdiv">
        <div className="picturediv">
          <Link to={'/home'}>
            <img src={ProfilePic} className="picturediv__img" />
          </Link>
          <div className="picturediv__pdiv">
            <p>CRISTIAN</p>
            <p>JIMÉNEZ</p>
          </div>
        </div>
        <div className="linkdiv">
          <ul className="linkdiv__ul">
            <Link to={'/home'} className="linkdiv__li">
              {t('home')}
            </Link>
            <Link to={'/aboutme'} className="linkdiv__li">
              {t('aboutme')}
            </Link>
            <Link to={'/home#home-projects'} className="linkdiv__li">
              {t('projects')}
            </Link>
            <WhastappLink />
            <hr />
            <li className="linkdiv__li">
              <Button
                endIcon={<KeyboardArrowDownIcon />}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                style={{
                  color: 'black',
                  fontFamily: 'Roboto',
                  fontSize: '16px',
                  textTransform: 'none',
                  fontWeight: 'normal',
                }}
              >
                {i18n.language === 'es-LA' ? 'Español' : 'English'}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={() => handleClose('es')}>Español</MenuItem>
                <MenuItem onClick={() => handleClose('en')}>English</MenuItem>
              </Menu>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navigation
