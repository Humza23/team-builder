import React from 'react'



const Form = (props) => {
const {values, update, submit} = props

    const onChange = evt => {
        const {name, value} = evt.target
        update(name, value)
    }

    return (
        <form onSubmit={submit}>
        <div>
            <label> Name
                <input
                type="text"
                value={values.name}
                onChange={onChange}
                name="name"
                />
            </label>
            <label> Email
                <input
                type="text"
                value={values.email}
                onChange={onChange}
                name="email"
                />
            </label>
            <label> Role
               <select value={values.role} name="role" onChange={onChange}>
                <option value="">-- Select a Role --</option>
                <option value="Front-End">Front End</option>
                <option value="Back-End">Back End</option>
                <option value="Full-Stack">Full Stack</option>
               </select>
            </label>
            <div className='submit'>
          <button>Submit</button>
        </div>
        </div>
        </form>
    )
}

export default Form
