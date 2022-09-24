import React from 'react'

function Welcome(Props){
  return (
    <div>
        <h1>Welcome!!....<br>
        </br> {Props.name}<br>
        </br> {Props.email}<br>
        </br> {Props.semester}<br>
        </br> {Props.branch}</h1>
        </div>     
  )
}

function Props(){
    return (
        <div>
            <Welcome name="Name: Amulya"
            usn="USN: 4MK19CS006"
            branch="BRANCH: CSE"
            semester="SEMESTER: 7TH"/>
            
        </div>
    )
}

export default Props