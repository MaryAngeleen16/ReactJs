import { useEffect, useState } from 'react';
import axios from 'axios'


import './App.css';


import Nav from './Nav';
import Footer from './Footer'


const App = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
    axios.get('http://127.0.0.1:8000/api/posts')
      .then(res => {

        setPosts(res.data.posts)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => { fetchPosts(); }, [])

  const handleDelete = e => {
    const id = e.target.getAttribute('data-id')
    if (window.confirm('Are you sure you want to DELETE this post?')) {
      alert('Yes')
      axios
        .delete(`http://localhost:8000/api/post/${id}`, {
        })
        .then((res) => {
          console.log(res);
          fetchPosts();
        })
        .catch((err) => {
          console.log(err);

        })

    }
  }

  return (
    <div className="App" >
      <Nav />
      <div className='container p-xxl-5 p-sm-5'>      
        {posts.map((post) => (
          <div key={post.id} style={{ marginBottom: "50px" }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className='btn btn-outline-primary' style={{ marginRight: "10px" }} >Edit</button>
              <button data-id={post.id} onClick={handleDelete} className='btn btn-outline-danger'>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;