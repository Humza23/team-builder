import React, { useState } from 'react'
import Form from './Form.js'
import './App.css';

const teamList = [
  { name: 'Fido' },
  { name: 'Tweetie' },
  { name: 'Goldie' }
]


const initialMembersValues = {
  name: '',
  email: '',
  role: ''
}


function App() {
  const [teamMembers, setTeamMembers] = useState(teamList)
  const [formValues, setFormValues] = useState(initialMembersValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue })
  }

  const submitForm = evt => {
    evt.preventDefault()
    const newMember = {
      username: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setTeamMembers([...teamMembers, newMember])
    setFormValues(initialMembersValues)
  }

  return (
    <div>

      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        teamMembers.map((member, id) => {
          return (
            <div key={id}> {member.name} </div>
          )
        })
      }
    </div>
  )
}

export default App;


// Task 2: Minimum Viable Product
//  Render a list of team members from state.
//  Build a form to add a new member to the list of members.

// Setup your state
//  Import the useState hook and set up state to keep your team members list.
//  Give the state variable you just declared a default value. You will need to keep track of a list of team members and each team member will have several key/value pairs associated with them.
//  Render your list of team members.

// Build your form
//  In Form.js build out your markup.
//  Build inputs for name, email and role (backend engineer, frontend engineer, designer, etc. Use your imagination).
//  You will have to decide which component is responsible for maintaining the state of the form (Form itself, or its parent App). Each approach has advantages and disadvantages.
//  Render your Form component in App. The App component should hand down through props any callback(s) needed for Form to do its job (adding new members to your team members state on submit).

// Now you are finished with MVP! Move on to the stretch goals at the bottom. The first is to add the functionality to edit members. As this is a very complicated process, steps have been included here to help you through that.

