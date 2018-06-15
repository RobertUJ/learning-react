import React, { Component } from 'react';
import UserProfile from './components/UserProfile/UserProfile'
import Heart from './components/Heart/Heart'
import Comments from './components/Comments/Comments'
import './App.css';

class App extends Component {
  state = {
    LikesNumber: 0,
    ComentsNumber: 1,
    Comments: [{
      value: 'React is Awesome !!'
    }]
  }

  clickHeart = () => {
    const likes = this.state.LikesNumber
    this.setState({LikesNumber: likes + 1})
  }

  addComment = (newValue) => {
    const comments = this.state.ComentsNumber
    const arrayComments = this.state.Comments
    const newComment = {
      value: newValue
    }
    arrayComments.push(newComment)
    this.setState({ComentsNumber: comments + 1})
    this.setState({Comments: arrayComments})
    this.setState({valueText: ''})

  }
  changeText = (value) => {
    this.setState({valueText: value})
  }
  render() {
    return (
      <div className="Container">
        <UserProfile 
          img='https://pbs.twimg.com/profile_images/836333218924277760/iVzLr4c-.jpg'
          Name='Monoku'
          Likes={this.state.LikesNumber}
          Comments={this.state.ComentsNumber}
        />
        <Heart clickHeart={this.clickHeart}/>
        <Comments 
          comments={this.state.Comments}
          addComment={this.addComment}
          changeText={this.changeText}
          valueText={this.state.valueText}
          />
      </div>
    );
  }
}

export default App;
