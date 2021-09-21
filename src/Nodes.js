import React from "react";
import Email from './components/Email'
import Meeting from './components/Meeting'
import Reminder from './components/Reminder'

class Nodes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmail: false,
      showMeeting: false,
      showReminder: false
    };
  }

  toggle = () => {
    this.setState({ showEmail: true, showMeeting: false, showReminder: false });
  };

  toggle2 = () => {
    this.setState({ showMeeting: false, showReminder: true, showEmail:false });
  };

  toggle3 = () => {
    this.setState({ showReminder: false, showEmail: true, showMeeting: false });
  };

      hideAll = () => {
    this.setState({ showEmail: false, showMeeting: false, showReminder: false });
  };

  render() {
    return (
      <div>
        <h1 onClick={this.toggle} >show me</h1>
        <h1 onClick={this.toggle2}>show me 2</h1>
        <h1 onClick={this.toggle3}>show me 3</h1>

        {this.state.showEmail && <Email />}
        {this.state.showMeeting && <Meeting />}
        {this.state.showReminder && <Reminder/>}

      </div>
    );
  }
}

export default Nodes;