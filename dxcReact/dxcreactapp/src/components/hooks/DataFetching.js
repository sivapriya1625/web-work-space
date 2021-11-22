import React, {useState,useEffect}from 'react'
import axios from axios
function DataFetching() {

const [posts,setPosts] = useState([])
//Promise -- Deferred obj in kotlin--
useEffect(
    ()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })
    }
)

    return (
        <div>
            <ul>
            {
                posts.map(
                    post => <li key={post.id}> {post.title}</li>
                )
            }
            </ul>
        </div>
    )
}

export default DataFetching