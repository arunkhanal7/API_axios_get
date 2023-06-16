import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
// use state for posting the data to api
const [title,setTitle]=useState([])
const [body,setBody]=useState([])


// use state for GET operation from API
const [file,setFile]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{console.log("getting from ::", res.data)
    setFile(res.data)})
    .catch((err=>{console.log(err)}))


  },[ ])
  
  const postdata=(e)=>{
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts',{
      title,
      body
    })
    .then((response)=>{console.log("posting data:",response)})
    .catch((error)=>{console.log(error)})
  }

  const arr = file.map((data,i)=>{
    return(
      <tr key={i}>
<td>{data.id}</td>
<td>{data.title}</td>
<td>{data.body}</td>
</tr>

    )
  })
  return (
    <div>
      <div>
        <h1>Post A data to API</h1>
        <form>
          <labl>Title:</labl><br/>
          <input type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}}/><br/>
          <label>Body:</label><br/>
          <input type='text' value={body} onChange={(e)=>{setBody(e.target.value)}}/><br/>
          <button onClick={postdata}>POST</button>
        </form>
      </div>
      <p>Getting Data from API using axios.</p>
      <table border={1}>
<tr>
<th>ID</th>
<th>Title</th>
<th>Body</th>
</tr>
{arr.slice(0,10)}

</table>
      

    </div>
  )
}

export default App