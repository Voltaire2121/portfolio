import './footer.css'

const Footer = () => {
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
      </div>
      <div className="internallinks">
        <ul>
          <li>About me</li>
          <li>Projects</li>
          <li>email me</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
