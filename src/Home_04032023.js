// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    // useState([
    //     {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
    //     {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    //     {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
    // ]);

    const {data : blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    // const [name, setName] = useState('mario');

    // const handleDelete = (id)=>{
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs);
    // }

    

    return ( 
        <div className="home">
            {/* {blogs && <BlogList blogs={blogs} title= "All Blogs" handleDelete={handleDelete}/>} */}
            {error && <div> { error }</div>}
            {isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title= "All Blogs"/>}
            {/* <button onClick={() => setName('luigi')}>change name</button> */}
            {/* <p>{ name }</p> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title= "Mario's blogs"/> */}
        </div>
     );
}
 
export default Home;