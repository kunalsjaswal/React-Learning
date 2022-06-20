import React ,{useState} from 'react'

const Sample1 = ({navTitle}) => {
    
    const [msg, setMsg] = useState({msg:"Hello Kunal",count:0});

    const onClickHandler=()=>{
        if(msg.msg==="Hello Kunal"){
            
            setMsg(prevState=>({
                count:prevState.count+1,
                msg:"Status Updated"
            }))
        }
        else{
            setMsg(prevState=>({
                count:prevState.count+1,
                msg:"Hello Kunal"
            }))
        }
        console.log(msg.count)
    }


  return (
    <div>
        <nav>{navTitle}</nav>
        <div className="msg">{msg.msg}</div>
        <button onClick={onClickHandler}>Click</button>
    </div>
  )
}

export default Sample1