import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BlogCard({blog}) {
  
    const navigate = useNavigate();

  return (
    <div style={{background:"#eee",padding:"1rem",textAlign:"center", borderRadius:".5rem"}}>
        <img src={blog.img_url} alt="" style={{width:"100%"}} />
        <h3>{blog.title}</h3>
        <p style={{margin:".5rem 0"}}>By ~ {blog.author}</p>
        <button onClick={()=>{ navigate(`/blog/${blog.id}`) }} style={{padding:".25rem 1rem"}}>read more</button>
    </div>
  )
}
