import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import React, { useEffect, useState } from "react";
import Nav from './Nav';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      axios
        .get('http://localhost:8000/api/posts')
        .then(response => {
          // Check if the response data is an array
          if (Array.isArray(response.data)) {
            setPosts(response.data);
          } else {
            // Handle the case where the response data is not an array
            console.error('Received non-array data from the API.');
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };

    fetchPosts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div className="App">
          <Nav />
          {posts.map((post, i) => (
            <div key={i}>
              <h2>{post.title}</h2>
              <p>{post.slug}</p>
              <p>{post.content}</p>
            </div>
          ))}
        </div>

        <Footer />
      </header>
    </div>
  );
}

export default App;
