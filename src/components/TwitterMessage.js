import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  characterCount = () => {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} name="message" id="message" onChange={this.handleChange} />
        <span>{this.characterCount()}</span>
      </div>
    );
  }
}

export default TwitterMessage;
