import './index.css'
const NavBar = props => {
  const { topScore, currentScore} = props
  return (
    <div className="contain">
      <nav className="nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="image"
        />
        <h1 className="main-heading">Emoji Game</h1>
        <p className="header">Score: {currentScore}</p>
        <p className="headers">Top Score: {topScore}</p>
       
      </nav>
    </div>
  )
}

export default NavBar
