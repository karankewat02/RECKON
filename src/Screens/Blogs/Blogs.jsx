import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BlogCard from '../../components/BlogCard/BlogCard'
import Loading from '../Loading/Loading'

export default function Blogs() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async() => {
        axios.get("http://localhost:5000/blogs")
        .then((res) => {
            console.log(res.data)
            setData(res.data)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <>
    {loading ? <Loading/> : 
    <div style={{padding:"2rem"}}>
        <h1 style={{textAlign:"center", marginBottom:"2rem"}}>Blogs</h1>

        <div className="blogsContainer" style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1rem"}}>
            {data.map((blog,index) => (
                <BlogCard key={index} blog={blog}/>
            ))}
        </div>
    </div>
    }
    </>
  )
}
