import React from 'react'
import Virat from '../assets/Virat.jpg'
import Rohit from '../assets/Rohit.jpg'
import Surya from '../assets/Surya.jpg'
import Dhoni from '../assets/Dhoni.jpg'
import sachin from '../assets/sachin.jpg'
import bumrah from '../assets/bumrah.jpg'

export const MapDemo7 = () => {
    var cricketers =[
        {id:1,name:"Virat Kohli",gender:"male",Image:Virat},
        {id:2,name:"Rohit Sharma",gender:"male",image:Rohit},
        {id:3,name:"Surykumar yadav",gender:"male",image:Surya},
        {id:4,name:"MS Dhoni",gender:"male",Image:Dhoni},
        {id:5,name:"Sachin Tendulkar",gender:"Male",image:sachin},
        {id:6,name:"Bumrah",gender:"male",image:bumrah},

    ]

  return (
   <div style={{textAlign:"center"}}>
        <h1>CRICKETERS</h1>
        <table className='table' border="2" align='center' height="500" width="500">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>GENDER</th>
                    <th>IMAGE</th>
                </tr>
            </thead>
            <tbody>
                {
                    cricketers.map((cr)=>{
                        return <tr>
                    <td>{cr.id}</td>
                    <td>{cr.name}</td>
                    <td>{cr.gender}</td>
                    <td>
                       <img src={cr.Virat} alt={cr.name} height="50" width="50"/>
                       <img src={cr.Rohit}  width="80"/>
                       <img src={cr.Surya}/>
                       <img src={cr.Dhoni}/>
                       <img src={cr.sachin}/>
                       <img src={cr.bumrah}/>
                    </td>
                    </tr>
                    })
                }
            </tbody>
        </table>
    </div>

  )
}
