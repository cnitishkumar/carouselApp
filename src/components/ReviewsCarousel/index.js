import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewIndex: 0}

  onClickLeftArrow = () => {
    const {reviewIndex} = this.state

    if (reviewIndex > 0) {
      this.setState(prevState => ({reviewIndex: prevState.reviewIndex - 1}))
    }
  }

  onClickRightArrow = () => {
    const {reviewIndex} = this.state

    const {reviewsList} = this.props
    const lengthOfReviwsList = reviewsList.length

    if (lengthOfReviwsList - 1 > reviewIndex) {
      this.setState(prevState => ({reviewIndex: prevState.reviewIndex + 1}))
    }
  }

  render() {
    const {reviewIndex} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[
      reviewIndex
    ]
    return (
      <div className="bg-container">
        <div className="review-app-container">
          <h1 className="heading">Reviews</h1>
          <div>
            <img src={imgUrl} className="image" alt={username} />
          </div>
          <div className="control-center">
            <button
              type="button"
              className="button"
              data-testid="leftArrow"
              onClick={this.onClickLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="arrow"
                alt="left arrow"
              />
            </button>
            <div className="name-company">
              <p className="username">{username}</p>
              <p className="company">{companyName}</p>
            </div>
            <button
              type="button"
              className="button"
              data-testid="rightArrow"
              onClick={this.onClickRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="arrow"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
