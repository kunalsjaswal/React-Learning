import React from 'react'
import { UserContext } from '../../App'

const CompC = () => {
  return (
    <div>
        <nav>Hey I am Component C child of B</nav>
        
        <UserContext.Consumer>
            {
                //using context without useContext
                user=>{
                    return <div>User Context value {user}</div>
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default CompC