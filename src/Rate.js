import React from 'react'
class Rate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }

    this.incr = this.incr.bind(this)
    this.decr = this.decr.bind(this)
  }

  /**
   * Increment count
   */
  incr () {
    this.setState({ count: this.state.count + 1 })
  }

  /**
   * Decrement count
   */
  decr () {
    this.setState({ count: this.state.count - 1 })
  }

  render () {
    const { count } = this.state
    return (
      <div className='h6 float-right'>
        <svg onClick={ this.incr } width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sc-fzpans cKJzHK"><path d="M18 15l-6-6-6 6"></path></svg>
        <p style = {{ textAlign: 'center', margin: 0 }}>{ count }</p>
        <svg onClick={ this.decr } width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sc-fzplWN hRBsWH"><path d="M6 9l6 6 6-6"></path></svg>
      </div>
    )
  }
}

export default Rate
