import './index.css'
const EmojiCard = props => {
  const {emojiCheck, clickButton} = props
  const {id, emojiName, emojiUrl} = emojiCheck
  const onClickEmojiButton = () => {
    clickButton(id)
  }
  return (
    <li className="container">
      <button className="button-container" onClick={onClickEmojiButton}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
