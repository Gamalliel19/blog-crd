import { useState } from 'react'

const Home = () => {

    const [blogs, setBlog] = useState([
        {title: "My New Websote", body: 'lorem ipsum...', author: "mario", id:1},
        {title: "Hello World", body: 'lorem ipsum...', author: "Luigi", id:2},
        {title: "Web Dev Journey", body: 'lorem ipsum...', author: "Wario", id:3}
    ])

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;