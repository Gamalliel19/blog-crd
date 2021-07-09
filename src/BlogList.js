const BlogList = ({blogs, title}) => {
    // OPSI PERTAMA CUKUP MASUKKAN SEBAGAI PARAMETER DENGAN KURUNG KURAWAL YANG DIBUTUHKAN
    // OPSI KEDUA ADALAH DEKLARASIKAN SATU SATU SEPERTI DIBAWAH
    // const blogs = props.blogs
    // const title = props.title

    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;