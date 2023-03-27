import React from 'react';
import './index.css';

function Home() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to my website</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <main>
        <h2>Featured Posts</h2>
        <div className="posts">
          <div className="post">
            <img src="https://picsum.photos/400/300" alt="Post" />
            <h3>Post Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod metus quis magna lacinia, sit amet consectetur odio rhoncus.</p>
          </div>
          <div className="post">
            <img src="https://picsum.photos/400/300" alt="Post" />
            <h3>Post Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod metus quis magna lacinia, sit amet consectetur odio rhoncus.</p>
          </div>
          <div className="post">
            <img src="https://picsum.photos/400/300" alt="Post" />
            <h3>Post Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod metus quis magna lacinia, sit amet consectetur odio rhoncus.</p>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2023 My Website</p>
      </footer>
    </div>
  );
}

export default Home;
