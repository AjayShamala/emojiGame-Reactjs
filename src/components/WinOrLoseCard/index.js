import './index.css'
const wonButton = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const lossButton = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WinOrLoseCard = props => {
  const {onClickPlayButton, isWon, isScore} = props
  const imageUrl = isWon ? wonButton : lossButton
  const isWinorLose = isWon ? 'You Won' : 'You Lose'
  const isBestScore = isWon ? 'Best Score' : 'Score'
  return (
    <div className="emoji-won">
      <div className="emojis">
        <h1 className="para">{isWinorLose}</h1>
        <p className="para1">{isBestScore}</p>
        <p className="para2">{isScore}/12</p>
        <button className="button" onClick={onClickPlayButton}>
          Play Again
        </button>
      </div>
      <img src={imageUrl} alt="win or lose" className="image-2" />
    </div>
  )
}
export default WinOrLoseCard
