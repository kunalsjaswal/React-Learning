import axios from 'axios'
import React,{useEffect, useState} from 'react'

const DataFetchingUseState = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(()=>{
        axios.get('http://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(err=>{
            setLoading(false)
            setPost({})
            setError('something went wrong, ',err)
        })
    },[])

  return (
    <div>
        <nav>data Fetching using useState</nav>
        {loading ? 'Loading':post.title}
        {error ? error : null}
    </div>
  )
}

export default DataFetchingUseState