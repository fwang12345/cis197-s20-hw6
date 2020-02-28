import React from 'react'
import Form from './Form'
import Post from './Post'
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  /**
   * Updates posts to contain new posts whenever a new post is submitted
   * @param {String} author
   * @param {String} post
   */
  onSubmit (author, post) {
    var posts = this.state.posts
    this.setState({ posts: [...posts, [author, post]] })
  }

  render () {
    return (
      <div className='container'>
        <div className='text-center margin'>
          <p className="h1 mb-4">CIS 197 Community</p>
        </div>
        <p className="h4 mb-4">New Post</p>
        <Form onSubmit = { this.onSubmit }/>
        {this.state.posts.map((post, i) => <Post key = {i} author = {post[0]} post = {post[1]} depth = {0}/>)}
      </div>
    )
  }
}

export default App
