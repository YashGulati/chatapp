const React = require('react')

export default class ChatContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'loading',
      new_text: '',
      messages: []
    }
  }
  addMessage = (e) => {
    e.preventDefault()
    const {messages} = this.state
    const new_message = {name: this.state.name, text: this.state.new_text}
    messages.push(new_message)
    this.setState({messages})
  }
  componentWillMount() {
    let name = location.search.split('=')[1]
    if (!name) {
      name = prompt('Enter your name-')
      location = '/?name='+name
    }
    this.setState({name})
  }
  onChangeMessage = (e) => {
    this.setState({new_text: e.target.value});
  }

  render() {
    return (
      <div id="chat_container">
        <h4>Chat App - {this.state.name}</h4>
        <hr/>
        {
          this.state.messages.map( (message, i) => {
            return (
                <div key={i} className="message">
                  <h6>{message.name}</h6>
                  <h5>{message.text}</h5>
                </div>
            )
          })
        }
        <form onSubmit={this.addMessage}>
          <input
            placeholder="Type Your Message..."
            onChange={this.onChangeMessage}
            className="form-control" />
        </form>
        {JSON.stringify(this.state)}
      </div>
    )
  }

}
