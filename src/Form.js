import React from 'react'
class Form extends React.Component {
  constructor (props) {
    super(props)
    const { onSubmit } = props
    this.state = {
      author: '',
      post: '',
      disabled: true
    }
    this.change = this.change.bind(this)
    this.submit = this.submit.bind(this)
    this.onSubmit = onSubmit
  }

  /**
   * Updates state and checks if button should be enabled
   * @param {Event} e
   */
  change (e) {
    var type = e.target.type
    if (type === 'text') {
      this.setState({ author: e.target.value, disabled: !e.target.value || !this.state.post })
    } else if (type === 'textarea') {
      this.setState({ post: e.target.value, disabled: !e.target.value || !this.state.author })
    }
  }

  /**
   * Set state to default and call onSubmit function from prop
   * @param {Event} e
   */
  submit (e) {
    e.preventDefault()
    var author = this.state.author
    var post = this.state.post
    this.setState({ author: '', post: '', disabled: true })
    this.onSubmit(author, post)
  }

  render () {
    const { author, post, disabled } = this.state
    return (
      <form className='p-5 form'>
        <div className="form-group border border-light">
          <input type='text' className='form-control mb-4' id='author' onChange={this.change} placeholder = 'Name' value={author}></input>
          <textarea className="form-control" id="post" rows="3" onChange={this.change} placeholder = 'Write a new post' value={post}></textarea>
        </div>
        <button type="submit" onClick = {this.submit} className="btn btn-primary" disabled={disabled}>Submit</button>
      </form>
    )
  }
}

export default Form
