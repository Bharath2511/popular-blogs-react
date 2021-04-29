import './index.css'

const RepositoryItem = props => {
  const {data} = props
  const {avatarUrl, name, starsCount, forksCount, issuesCount} = data
  return (
    <div className="repo-card">
      <img src={avatarUrl} alt="avatar" className="avatar" />
      <h1 className="name">{name}</h1>
      <div className="stars-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="stars-image"
        />
        <p className="stars-count">{starsCount}</p>
      </div>
      <div className="forks-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="forks-image"
        />
        <p className="forks">{forksCount}</p>
      </div>
      <div className="issues-count">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open-issues"
          className="issues-image"
        />
        <p className="issues">{issuesCount}</p>
      </div>
    </div>
  )
}

export default RepositoryItem
