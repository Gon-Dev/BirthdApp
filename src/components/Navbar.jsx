import githubLogo from '../assets/logo-github.svg'
import cake from '../assets/cake.svg'

import '../styles/Navbar.css'
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <img src={cake} alt="" className="navbar-cake"/>
        <h2 className="navbar-title">BirthdApp</h2>
      </div>
      
      <a href="https://github.com/Gon-Dev/never-4getti" target="_blank" rel="noreferrer">
        <img src={githubLogo} alt="github cat"/>
      </a>
    </div>
  )
}

export default Navbar;