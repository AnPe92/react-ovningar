import { useEffect, useState } from "react"



function DisplayApiData() {

    const [list, setList] = useState([])

    // const apiURL = 'https://jsonplaceholder.typicode.com/'
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setList(data))
    })




    return <>
        <ul>
            {list.filter(num => { return num.id <= 50 }).map(post => {
                return < div key={post.id}>
                    <li>
                        {post.title}
                        <div>{post.id}</div>
                    </li>
                </div>
            })}
        </ul>
    </>
}

export default DisplayApiData;