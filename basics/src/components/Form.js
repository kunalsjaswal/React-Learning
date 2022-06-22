import React,{useState} from 'react'

const Form = ({navTitle}) => {


    const [inputs, setInputs] = useState({
        uname:'',
        comments:'',
        topic:"react"
    });

    // to handle seperately 

    // const handleUname=(ev)=>{
    //     setInputs({
    //         uname:ev.target.value,
    //     })
    //     console.log(inputs.uname)

    // }

    // const handleComments=(ev)=>{
    //     setInputs({
    //         uname:ev.target.value,
    //         comments:ev.target.value,
    //         topic:ev.target.value
    //     })
    //     console.log(inputs.comments)

    // }

    // const handeltopic=ev=>{
    //     setInputs({
    //         uname:ev.target.value,
    //         comments:ev.target.value,
    //         topic:ev.target.value
    //     })
    //     console.log(inputs.topic)

    // }

    const onChangeHandle=(e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value})
      }

    const handleSubmit=(event)=>{
        alert(`username: ${inputs.uname}\ncomment: ${inputs.comments}\ntopic: ${inputs.topic}`)
        event.preventDefault()
    }

  return (
    <form onSubmit={handleSubmit}>
        <nav>{navTitle}</nav>

        {/* handling textfields  */}
        <label>Username </label>
        <input type="text" name='uname' value={inputs.uname} onChange={onChangeHandle}/>
        
        {/* handling textarea  */}
        <br />
        <label>Comments </label>
        <textarea cols="30" name='comments' rows="5" value={inputs.comments} onChange={onChangeHandle}/>

        {/* handling select  */}
        <br />
        <label>Topics</label>
        <select value={inputs.topic} name='topic' onChange={onChangeHandle}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
        </select>

        {/* handling button  */}
        <br />
        <button type="submit">Submit</button>


    </form>
  )
}

export default Form