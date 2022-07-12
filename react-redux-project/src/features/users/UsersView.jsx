import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchUsers } from './usersSlice'

const usersView = () => {

  const user= useSelector(state=>state.users)
  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])

  return (
    <div>
      <hr />
        <h1 style={{textDecoration:'underline',textShadow:"1px 1px 6px gray"}}>List of Users</h1>
        {user.loading && <div>Loading ..</div>}
        {!user.loading && user.error && <div>error: {user.error}</div>}
        {!user.loading && user.users.length &&
        <ul style={{listStyleType:'none'}}>
          {
            user.users.map(users=>(
              <li key={users.id}>{users.name}</li>
            ))
          }
        </ul>}
    </div>
  )
}

export default usersView