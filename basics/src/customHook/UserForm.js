import React,{useState} from 'react'
import useFormHook from './hooks/useFormHook'

const UserForm = () => {


    const [firstName,bindFirstName,resetFirstName]=useFormHook('')
    const [lastName,bindLastName,resetLastName]=useFormHook('')

    const submitHandler=e=>{
        e.preventDefault() // for preventing reloading on submiting
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()

    }
  return (
    <div>
        <nav>Fill up the details</nav>
        <form onSubmit={submitHandler}>
            <label>First Name</label>

        {/* two ways to use bind method  */}
            <input type="text" {...bindFirstName}/>  
            <label style={{marginLeft:"2%"}}>Last Name</label>
            <input type="text" value={bindLastName.value} onChange={bindLastName.onChange}/>
            <button>Submit</button>

        </form>
    </div>
  )
}

export default UserForm