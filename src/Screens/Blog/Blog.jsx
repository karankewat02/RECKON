import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'

export default function Blog() {
    const id = window.location.pathname.split("/")[2]

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getBlog = async() => {
        axios.get(`http://localhost:5000/blogs/${id}`)
        .then((res) => {
            setData(res.data[0])
            setLoading(false)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getBlog()
    }, [])

  return (
    <>{loading?<Loading/>:
    <div style={{minHeight:"80vh" , padding:"2rem", textAlign:"justify"}}>
        <h1 style={{textAlign:"center"}}>{data.title}</h1>
        <img src={data.img_url} alt="" />
        
        <div style={{display:"flex", justifyContent:"space-between",margin:"2rem 0"}}>
            <p>Author ~ {data.author}</p>
            <p>Date ~ {data.posted_on}</p>
        </div>
        
        <p style={{textAlign:"justify"}}>{data.content}</p>

    </div>
    }</>
  )
}
