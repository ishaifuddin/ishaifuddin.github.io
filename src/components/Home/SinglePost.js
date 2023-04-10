import React, { useState, useEffect } from "react";
import {
  Divider,
  Card,
  Image,
  Text,
  Badge,
  Title,
  Grid,
  Container,
  Navbar,
  ActionIcon,
} from "@mantine/core";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavbarSx from "./NavbarSx";
import FooterSx from "./FooterSx";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

const commentData = {
  postedAt: "10 minutes ago",
  body: '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>',
  author: {
    name: "Jacob Warnhalter",
    image:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
  },
};
const SinglePost = (props) => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let wp_API_Url = `http://localhost:10039`;
    axios
      .get(`${wp_API_Url}/wp-json/wp/v2/posts/${id}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <NavbarSx />
      <section className="blog-post">
        <Container size="lg" pt={60} pb={80}>
          <Grid gutter={32}>
            <Grid.Col span={12} align="center">
              {/* <Title  weight={800} mb="sm">Blog</Title>
              <Text>Latest updates and Hand-picked resources.</Text><br/>
               */}
              <h1>{post.title?.rendered}</h1>
              <img style={{ width: "100%" }} src={post.featured_image_url} />
              <div className="post-details">
                <div
                  dangerouslySetInnerHTML={{ __html: post.content?.rendered }}
                ></div>
                <br />
                <br />
                <br />
                <Divider my="xs" variant="dashed" label="Comments" />
                <Comments {...commentData} />
                <br />
                <br />
                <CommentForm />
              </div>
            </Grid.Col>
            <Grid.Col span={12}></Grid.Col>
          </Grid>
        </Container>
      </section>
      <FooterSx />
    </>
  );
};

export default SinglePost;
