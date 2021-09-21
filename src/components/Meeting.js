import React from 'react'
import './Meeting.css'


const Meeting = () => {
  return(
    <div className="meeting" >
     <table className="table table-dark table-striped ">
          <thead>
            <tr>
             <th scope="col">No.</th>
             <th scope="col">Name</th>
             <th scope="col">EmailId</th>
             <th scope="col">Location</th>
            </tr>
     </thead>
        <tbody>
          <tr>
           <th scope="row">1</th>
             <td>Mark</td>
             <td>mark@beamfox.com</td>
             <td>India</td>
           </tr>
    <tr>
       <th scope="row">2</th>
         <td>Jacob</td>
          <td>jacob@beamfox.com</td>
          <td>London</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry</td>
      <td>larry@beamfox.com</td>
      <td>NewYork</td>
    </tr>
  </tbody>
</table>
</div>
    );
}

export default Meeting