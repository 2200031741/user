import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Datafetch = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div>
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      <p>{posts.title}</p>

      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Datafetch;
