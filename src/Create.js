import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    
    // code to get form values
    const [title , setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);    
    const history = useHistory();

    const handleSubmit = (e)=> {
        e.preventDefault();

        //code to collect new blog data and create an object from it.
        const blog = {title, body, author};
        // console.log(blog);
        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false);

            //go to the home page
            history.push('/');
        })
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
                    <option value="chatgpt">Chat GPT</option>
                </select>

                {!isPending && <button type="submit">Add blog</button>}
                {isPending && <button type="submit">Adding blog ...</button>}
            </form>    
    </div> 
    );
}
 
export default Create;