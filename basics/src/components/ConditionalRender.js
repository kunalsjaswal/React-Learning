import React,{useState} from 'react'

const ConditionalRender = ({navTitle}) => {

    const [status, setstatus] = useState(false)

    // if(status){
    //     return(
    //         <div>Welcome Guest</div>
    //     )}
    // else{
    //     return(
    //         <div>Welcome Kunal</div>
    //     )}


    // let message;
    // if(status){
    //     message=<div>Welcome Kunal</div>
    // }
    // else{
    //     message=<div>Welcome Guest</div>

    // }

    return (
    <div>
        <nav>{navTitle}</nav>
        <hr />
        <ul>
            <h2>Types</h2>
            <li>if/else</li>
            <li>Element variables (e.g., let msg="Welcome")</li>
            <li>Ternary conditional operator (condition ? true statement : false statement)</li>
            <li>Short Circuit operation (condition && return statement)</li>
        </ul>

        <div className="content">
            
            {status?<div>Welcome Kunal</div>:<div>Welcome Guest</div>}
            {status && <div className='status'>(Logged In)</div>}
        </div>
    </div>
  )
}

export default ConditionalRender