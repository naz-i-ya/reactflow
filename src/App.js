import React, {useState} from "react";
import BasicFlow from './BasicFlow';
import './App.css';
import Meeting from './components/Meeting';
import Reminder from './components/Reminder';
import Email from './components/Email';




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
           setShow={setShow}
          {email && <Email />}
          {meeting && <Meeting/>}
          {reminder && <Reminder/>
          </BasicFlow>
         
    </div>
  );
}

export default App;
