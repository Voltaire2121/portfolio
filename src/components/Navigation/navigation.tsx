import './navigation.css'
import ProfilePic from '../../assets/profilepic.png'
import { Link } from 'react-router-dom'
import Button, { ButtonProps } from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'

const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
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
            <li className="linkdiv__li">About me</li>
            <li className="linkdiv__li">Projects</li>
            <li className="linkdiv__li">Email me</li>
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
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  textTransform: 'none',
                  fontWeight: 'normal',
                }}
              >
                Idioma
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
                <MenuItem onClick={handleClose}>Español</MenuItem>
                <MenuItem onClick={handleClose}>English</MenuItem>
              </Menu>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navigation
