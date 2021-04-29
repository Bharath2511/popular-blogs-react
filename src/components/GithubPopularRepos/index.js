import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

class GithubPopularRepos extends Component {
  state = {
    isLoading: true,
    languageFilter: 'ALL',
    data: [],
  }

  componentDidMount() {
    const {languageFiltersData} = this.props
    this.fetchRepos(languageFiltersData[0].id)
  }

  fetchRepos = async id => {
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${id}`,
    )
    const data = await response.json()
    const updatedData = data.popular_repos.map(eachData => ({
      id: eachData.id,
      avatarUrl: eachData.avatar_url,
      name: eachData.name,
      starsCount: eachData.stars_count,
      forksCount: eachData.forks_count,
      issuesCount: eachData.issues_count,
    }))
    this.setState({isLoading: false, data: updatedData})
  }

  onLanguageSelected = id => {
    this.setState({isLoading: true})
    this.fetchRepos(id)
    this.setState({languageFilter: id})
  }

  render() {
    const {isLoading, data, languageFilter} = this.state
    const {languageFiltersData} = this.props
    return (
      <div className="bg-container">
        <h1 className="main-heading">Popular Blogs</h1>
        <nav className="nav-container">
          {languageFiltersData.map(language => (
            <LanguageFilterItem
              key={language.id}
              isSelected={language.id === languageFilter}
              language={language}
              onLanguageSelected={this.onLanguageSelected}
            />
          ))}
        </nav>
        {isLoading ? (
          <div testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />{' '}
          </div>
        ) : (
          <div className="repos-container">
            {data.map(eachData => (
              <RepositoryItem key={eachData.id} data={eachData} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
