import './singlePost.css'

function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src="post.jpg" alt="" className="singlePostImg" />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor
          <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>       
          </div>
          </h1>
          <div className="singlePostInfo">
            <span className='singlePostAuthor'>
              Author: <b>Marie Curie</b>
              </span>
              <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className='singlePostDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Nisi, voluptas natus? Voluptatem possimus velit sequi esse 
             quisquam sed placeat ex nam eveniet obcaecati reiciendis officia 
             facilis, nemo odio suscipit eligendi!
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Nisi, voluptas natus? Voluptatem possimus velit sequi esse 
             quisquam sed placeat ex nam eveniet obcaecati reiciendis officia 
             facilis, nemo odio suscipit eligendi!
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Nisi, voluptas natus? Voluptatem possimus velit sequi esse 
             quisquam sed placeat ex nam eveniet obcaecati reiciendis officia 
             facilis, nemo odio suscipit eligendi!
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Nisi, voluptas natus? Voluptatem possimus velit sequi esse 
             quisquam sed placeat ex nam eveniet obcaecati reiciendis officia 
             facilis, nemo odio suscipit eligendi!
             
          </p>
      </div>
    </div>
  )
}

export default SinglePost