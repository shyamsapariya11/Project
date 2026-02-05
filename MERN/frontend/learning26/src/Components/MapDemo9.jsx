import React from 'react'

export const MapDemo9 = () => {
    var hospital =[
        {id:1,patientname:"Shyam",age:21,bill:50000,city:"Junagadh"},
        {id:2,patientname:"Bhavy",age:25,bill:40000,city:"Rajkot",},
        {id:3,patientname:"Prey",age:23,bill:25000,city:"Dwarka",},
        {id:4,patientname:"Jayesh",age:24,bill:30000,city:"Botad"},
        {id:5,patientname:"Shubh",age:22,bill:22000,city:"Manavadar"},
        {id:6,patientname:"suraj",age:21,bill:20000,city:"Upleta"},

    ]

  return (
   <div style={{textAlign:"center"}}>
        <h1>HOSPITAL DETAILS</h1>
          <table className='table' border="4" align='center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>PATIENTNAME</th>
                    <th>AGE</th>
                    <th>BILL</th>
                    <th>CITY</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    hospital.map((hs)=>{
                        return <tr>
                            <td>{hs.id}</td>
                            <td>{hs.patientname}</td>
                           <td >{hs.age}</td>
                            <td>{hs.bill}</td>
                            <td >{hs.city}</td>
                           
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>

  )
}
