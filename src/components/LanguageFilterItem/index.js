import './index.css'

const LanguageFilterItem = props => {
  const {isSelected, language, onLanguageSelected} = props
  console.log(props)
  const buttonClass = isSelected ? 'selected button' : 'button'
  const onButtonClick = () => {
    onLanguageSelected(language.id)
  }
  return (
    <button type="button" className={`${buttonClass}`} onClick={onButtonClick}>
      {language.language}
    </button>
  )
}

export default LanguageFilterItem
