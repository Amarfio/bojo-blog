import { useState } from "react";

const Create = () => {
    
    // code to get form values
    const [title , setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');    
    
    const handleSubmit = (e)=> {
        e.preventDefault();

        const blog = {title, body, author};
        console.log(blog);
    }
    return ( 
    
    <div className="create">
        <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog body</label>
                <textarea
                required
                value={body}
                onChange = {(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Author</label>
                <select 
                value={author}
                onChange = {(e)=>setAuthor(e.target.value)}
                >
                    <option>select author </option>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>

                <button type="submit">Add blog</button>
            </form>    
    </div> 
    );
}
 
export default Create;