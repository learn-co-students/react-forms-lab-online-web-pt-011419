import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        charsLeft: this.props.maxChars,
        message: ""
    };
  }

  handleChange = event => {
    var input = event.target.value;
      this.setState({
        charsLeft: this.props.maxChars - input.length,
        message: event.target.value
      })
    }





  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange.bind(this)} value={this.state.message}  />
         <p>Characters Left: {this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
