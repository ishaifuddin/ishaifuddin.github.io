import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let wp_API_Url = `http://localhost:10039`;
    axios.get(`${wp_API_Url}/wp-json/wp/v2/posts`)
      .then(response => {
        console.log(response)
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item md={12}>
      <h1>Blog</h1>
        {console.log(posts)}
        {posts.map(post => (
          <div key={post.id}>
            <img src={post.featured_image_url}/>
            <Link to={`/post/${post.id}`}><h2>{post.title.rendered}</h2></Link>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </div>
        ))}
      </Grid>
    </Grid>
  );
}

export default BlogPage;
