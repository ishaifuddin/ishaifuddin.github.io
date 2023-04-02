import React, { useState, useEffect } from 'react';
import { Card, Image, Text, Badge, Title, Grid, Container, Navbar, ActionIcon } from '@mantine/core';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import NavbarSx from './NavbarSx';
import FooterSx from './FooterSx';

const SinglePost = (props) => {
  const [post, setPost] = useState({});
  const { id } = useParams()

  useEffect(() => {
    let wp_API_Url = `http://localhost:10039`;
    axios.get(`${wp_API_Url}/wp-json/wp/v2/posts/${id}`)
      .then(response => {
        console.log(response)
        setPost(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <NavbarSx/>
      <section className='blog-post'>
        <Container size='lg' pt={60} pb={80}>
          <Grid gutter={32}>
            <Grid.Col span={12} align='center'>
              {/* <Title  weight={800} mb="sm">Blog</Title>
              <Text>Latest updates and Hand-picked resources.</Text><br/>
               */}
              <h1>{post.title?.rendered}</h1>
              <img style={{width: '100%'}} src={post.featured_image_url}/>
              <div className='post-details' dangerouslySetInnerHTML={{ __html: post.content?.rendered }}></div>
            </Grid.Col>
          </Grid>
        </Container>
      </section>
      <FooterSx/>
    </>
  );
}

export default SinglePost;

