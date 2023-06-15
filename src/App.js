import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
const [file,setFile]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{console.log("getting from ::", res.data)
    setFile(res.data)})
    .catch((err=>{console.log(err)}))


  },[ ])

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