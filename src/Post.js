import React from 'react'
import Form from './Form'
import Rate from './Rate'

class Post extends React.Component {
  constructor (props) {
    super(props)
    const { author, post, depth } = props
    this.author = author
    this.post = post
    this.depth = depth
    this.state = {
      replies: [],
      disabled: true
    }
    this.openForm = this.openForm.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  /**
   * Updates replies to contain new replies whenever a new reply is submitted
   * @param {String} author
   * @param {String} reply
   */
  onSubmit (author, reply) {
    var replies = this.state.replies
    this.setState({ replies: [...replies, [author, reply]] })
    this.openForm()
  }

  /**
   * Open form when reply button is clicked
   */
  openForm () {
    this.setState({ disabled: !this.state.disabled })
  }

  render () {
    return (
      <div className={ 'form margin' }>
        <Rate/>
        <p className="h5 mb-1"><b>{this.author}</b></p>
        <p className="h6 mb-1">{this.post}</p>
        {this.state.replies.map((reply, i) => <Post key = {i} author = {reply[0]} post = {reply[1]} depth = { this.depth + 1 }/>)}
        {this.depth < 2 && (
          <span className="h6 mb-1" onClick={this.openForm}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="prefix__feather prefix__feather-message-square"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path></svg>
            Reply
          </span>)}
        <div style={{ display: this.state.disabled ? 'none' : 'block' }}>
          <Form onSubmit = { this.onSubmit }/>
        </div>
      </div>
    )
  }
}

export default Post
