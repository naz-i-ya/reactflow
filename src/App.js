import React, {useState} from "react";
import BasicFlow from './BasicFlow';
import './App.css';
//import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Meeting from './components/Meeting';
import Reminder from './components/Reminder';
import Email from './components/Email';
import MeetingNode from './MeetingNode';
import EmailNode from './EmailNode';
import ReminderNode from './ReminderNode';



function App() {

  let [meeting, setMeeting] = useState(false);
  let [email, setEmail] = useState(false);
  let [reminder, setReminder] = useState(false);

 function setShow(meeting,email,reminder)
  {
    setMeeting(meeting);
    setEmail(email);
    setReminder(reminder);
  }
  
  return (
    <div className="App">
          <BasicFlow className="container" >
          {email && <Email />}
          {meeting && <Meeting/>}
          {reminder && <Reminder/>}

          
            {/* <MeetingNode setShow={setShow} />
            <EmailNode setShow={setShow}/>
            <ReminderNode setShow={setShow}/> */}
          </BasicFlow>
         
    </div>
  );
}

export default App;
