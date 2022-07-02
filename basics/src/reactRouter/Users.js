import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'

const Users = () => {

    const [searchParams,setSearchParams] =useSearchParams()
    const showActiveUsers=searchParams.get('filter')==='active'

  return (
    <div>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>

        <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
        <button onClick={()=>setSearchParams({})}>Reset filter</button>

        {showActiveUsers ? 
        <div>Showing Active users</div>:
        <div>Showing All Users</div>
        }
    </div>
  )
}

export default Users