
import { useEffect, useReducer, useRef, useState } from "react";


function blogsReducer(state, action){
    switch(action.type){
        case "ADD":
            return [action.blog, ...state];
        case "REMOVE":
            return state.filter((blog, index)=> index !== action.index);

        default:
            return []
    }
}
//Blogging App using Hooks
export default function Blog(){

    // const [title, setTitle] = useState("")
    // const [content, setContent] = useState("");
    const [formData, setFormData] = useState({title:'', content:""})
    // const [blogs, setBlogs] = useState([]);
    const [blogs, dispatch] = useReducer(blogsReducer, [])
    const titleRef = useRef(null)

    useEffect(()=>{
        titleRef.current.focus();
    },[]);

    useEffect(()=>{
        if(blogs.length && blogs[0].title){
            document.title = blogs[0].title;
        }else{
            document.title = "No Blogs!!"
        }
    },[blogs])
    
    //Passing the synthetic event as argument to stop refreshing the page on submit
    function handleSubmit(e){
        e.preventDefault();
        // setBlogs([{title: formData.title, content: formData.content},...blogs])
        dispatch({type: "ADD", blog: {title: formData.title, content: formData.content}})
        titleRef.current.focus()
        setFormData({title: '', content: ''})
    }

    function RemoveBlog(i){
        dispatch({type: "REMOVE", index: i})
    //    const updateBlog =blogs.filter((blog, i)=> id !== i)
    //    setBlogs(updateBlog)

    }

    return(
        <>
        {/* Heading of the page */}
        <h1>Write a Blog!</h1>

        {/* Division created to provide styling of section to the form */}
        <div className="section">

        {/* Form for to write the blog */}
            <form onSubmit={handleSubmit}>

                {/* Row component to create a row for first input field */}
                <Row label="Title">
                        <input className="input"
                                placeholder="Enter the Title of the Blog here.." 
                                value={formData.title}
                                ref={titleRef}
                                onChange={(e)=> setFormData({title: e.target.value, content: formData.content})} 
                                />
                </Row >

                {/* Row component to create a row for Text area field */}
                <Row label="Content">
                        <textarea className="input content"
                                placeholder="Content of the Blog goes here.." 
                                value={formData.content}
                                required
                                onChange={(e)=> setFormData({title: formData.title, content: e.target.value})} 
                                ></textarea>
                </Row >

                {/* Button to submit the blog */}            
                <button className = "btn">ADD</button>
            </form>
                     
        </div>

        <hr/>

        {/* Section where submitted blogs will be displayed */}
        <h2> Blogs </h2>
        {blogs.map((blog, i)=>(
            <div className="blog" key={i}>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                <div className="blog-btn">
                    <button className="btn remove" onClick={()=>RemoveBlog(i)}>Remove</button>
                </div>
            </div>
            
        ))}
        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
