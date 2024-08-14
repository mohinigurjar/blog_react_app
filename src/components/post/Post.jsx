import './post.css'

function Post() {
  return (
    <div className='post'>
      <img
      className='postImg'
      src="post.jpg"
      alt=""/>
    <div className="postInfo">
      <div className="postCats">
        <span className="postCat">Music</span>
        <span className="postCat">life</span>
      </div>
    <span className='postTitle'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
     
       </span>
       <hr/>
       <span className="postDate">1 hour ago</span>
    </div>
    <p className='postDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Blanditiis quaerat et obcaecati temporibus dolore sapiente quod impedit. 
       Voluptatibus tempora laborum fugiat, 
      repellat necessitatibus voluptatem qui eos a quas voluptates? Numquam!
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Blanditiis quaerat et obcaecati temporibus dolore sapiente quod impedit. 
       Voluptatibus tempora laborum fugiat, 
      repellat necessitatibus voluptatem qui eos a quas voluptates?Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Blanditiis quaerat et obcaecati temporibus dolore sapiente quod impedit. 
       Voluptatibus tempora laborum fugiat, 
      repellat necessitatibus voluptatem qui eos a quas voluptates?Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Blanditiis quaerat et obcaecati temporibus dolore sapiente quod impedit. 
       Voluptatibus tempora laborum fugiat, 
      repellat necessitatibus voluptatem qui eos a quas voluptates?Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Blanditiis quaerat et obcaecati temporibus dolore sapiente quod impedit. 
       Voluptatibus tempora laborum fugiat, 
      repellat necessitatibus voluptatem qui eos a quas voluptates?</p>
    </div>
  );
}

export default Post