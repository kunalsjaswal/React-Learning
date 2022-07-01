import React,{useContext} from 'react'
import CompC from './CompC'
import { UserContext,CourseContext } from '../../App'

const CompB = () => {

    const user=useContext(UserContext)
    const course=useContext(CourseContext)
  return (
    <div>
        <nav>Hey I am Component B Child of A</nav>
        <div>Hello my name is {user} and i am learning {course}</div>
        <CompC/>
    </div>
  )
}

export default CompB