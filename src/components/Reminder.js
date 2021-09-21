import React from 'react'
import './Reminder.css'


const Reminder = () => {
  return(

    <div className="reminder" >
     <table className="table table-dark table-striped ">
          <thead>
            <tr>
             <th scope="col">No.</th>
             <th scope="col">EmailId</th>
             <th scope="col">Text</th>
            </tr>
     </thead>
        <tbody>
          <tr>
           <th scope="row">1</th>
             <td>mark@beamfox.com</td>
             <td>Frontend task</td>
           </tr>
    <tr>
       <th scope="row">2</th>
          <td>jacob@beamfox.com</td>
          <td>Backend task</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>larry@beamfox.com</td>
      <td>Test</td>
    </tr>
  </tbody>
</table>
</div>
    )
}

export default Reminder



   

