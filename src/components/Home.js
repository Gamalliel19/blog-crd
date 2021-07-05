import { useState, useEffect } from 'react'
import BlogList from '../BlogList'

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "My New Websote", body: 'lorem ipsum...', author: "mario", id:1},
        {title: "Hello World", body: 'lorem ipsum...', author: "Luigi", id:2},
        {title: "Web Dev Journey", body: 'lorem ipsum...', author: "Wario", id:3}
    ])

    const [name, setName] = useState("Mario")

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log('use effect ran')
        console.log(name)
    }, [name])

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
            <button onClick={() => setName("luigi")}>Change Name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;