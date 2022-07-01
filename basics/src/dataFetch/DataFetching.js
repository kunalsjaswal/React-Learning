import React,{useState,useEffect} from 'react'
import axios from 'axios'

const DataFetching = ({navTitle}) => {

    const [post, setPost] = useState({})
    const [id,setId]=useState(1);
    const [btnid,setBtnid]=useState(1)

    const handleClick=()=>{
        setBtnid(id)
    }

    useEffect(()=>{
        axios.get(`http://jsonplaceholder.typicode.com/posts/${btnid}`)  //we can use fetch also
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[btnid])
  return (
    <div>
        <nav>{navTitle}</nav>

        <input type="number" value={id} onChange={e=>setId(e.target.value)} style={{marginTop:"2%",padding:"0.2%",fontSize:"1vw",marginLeft:"42%"}}/>
        <button type='button' onClick={handleClick} style={{padding:" 0.5% 2%",marginLeft: "43.5%"}}>Fetch Post</button>
        {/* <ul>
            {
                posts.map(post=> <li key={post.id}>{post.title}</li>)
            }
        </ul> */}
        <div style={{fontSize:"1.2vw",textAlign:"center",marginTop:"2%"}}><b style={{color:"yellow",fontSize:"1.5vw"}}>Title </b> {post.title}</div>
    </div>
  )
}

export default DataFetching