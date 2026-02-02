import React from 'react'

export const MapDemo2 = () => {

    var users =[
        {id:1,name:'Shyam',age:23,gender:"male"},
        {id:2,name:"Jayesh",age:24,gender:"male"},
        {id:3,name:"Prathna",age:25,gender:"female"}
    ]
  return (
    <div>
        <h1>MAP DEMO 2</h1>
        {
            users.map((user)=>{
                return <li>{user.id} -{user.name} {user.age} -{user.gender}</li>
            })
        }
    </div>
  )
}