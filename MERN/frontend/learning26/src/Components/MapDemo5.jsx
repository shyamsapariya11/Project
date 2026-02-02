
import React from 'react'

export const MapDemo5 = () => {
    var students =[
        {id:1,name:"amit",age:23,marks:79,city:"junagadh",gender:"male"},
        {id:2,name:"prathna",age:25,marks:81,city:"ahmedabad",gender:"female"},
        {id:3,name:"anvi",age:24,marks:71,city:"rajkot",gender:"female"},
    ]
   return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 5</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>MARKS</th>
                    <th>CITY</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((st)=>{
                        return <tr style={{backgroundColor:st.gender =="female" && "pink"}}>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td style={{color: st.age>24 ? "red" :"black"}}>{st.age}</td>
                            {/* <td style={{backgroundColor:st.marks>80 ? "yellow":"white"}}>{st.marks}</td> */}
                            <td style={{backgroundColor:st.marks>80 && "gray"}}>{st.marks}</td>
                            <td>{st.city}</td>
                            <td>{st.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
