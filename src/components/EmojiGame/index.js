/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'
class EmojiGame extends Component {
  state = {emojisClickList: [], isgameInProgess: true, topscore: 0}
  isResetGame = () => {
    this.setState({emojisClickList: [], isgameInProgess: true})
  }
  renderScoreCard = () => {
    const {emojisList} = this.props
    const {emojisClickList} = this.state

    const isWon = emojisClickList.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayButton={this.isResetGame}
        isScore={emojisClickList.length}
      />
    )
  }
  finishGameEmoji = currentscore => {
    const {topscore} = this.state
    let newScore = topscore
    if (currentscore > topscore) {
      newScore = currentscore
    }
    this.setState({topscore: newScore, isgameInProgess: false})
  }
  clickButton = id => {
    const {emojisList} = this.props
    const {emojisClickList} = this.state
    const isemojipresent = emojisClickList.includes(id)
    const emojiLength = emojisClickList.length

    if (isemojipresent) {
      this.finishGameEmoji(emojiLength)
    } else {
      if (emojisList.length - 1 === emojiLength) {
        this.finishGameEmoji(emojisList.length)
      }
      this.setState(previous => ({
        emojisClickList: [...previous.emojisClickList, id],
      }))
    }
  }
  getShufffledEmoji = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }
  onRandomEmojiList = () => {
    const shuffledEmoji = this.getShufffledEmoji()
    return (
      <ul className="container">
        {shuffledEmoji.map(each => (
          <EmojiCard
            key={each.id}
            emojiCheck={each}
            clickButton={this.clickButton}
          />
        ))}
      </ul>
    )
  }
  render() {
    const {isgameInProgess, emojisClickList, topscore} = this.state
    return (
      <div className="bg-container">
        <NavBar
          topScore={topscore}
          currentScore={emojisClickList.length}
          isGameprogress={isgameInProgess}
        />
        <div className="containers">
          {isgameInProgess ? this.onRandomEmojiList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
