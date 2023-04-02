import React, { useState, useEffect } from 'react';
import { Card, Image, Text, Badge, Title, Grid, Container, Navbar, ActionIcon } from '@mantine/core';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './shopexLanding.css';
import NavbarSx from './NavbarSx';
import FooterSx from './FooterSx';
import PostCategory from './postCategory';
import Pagination from "./Pagination";
import { IconArrowBack, IconArrowLeft, IconArrowRight } from '@tabler/icons';
import { Button } from 'react-scroll';

function BlogPage() {
  const [posts, setPosts] = useState([]);

  const [page, setPage] = useState(1);
  const [nrofpages, setNumberofpage] = useState(1);

    // useEffect(() => {
    //     let wp_API_Url = `http://localhost:10039`;
    //     axios.get(`${wp_API_Url}/wp-json/wp/v2/posts`)
    //     .then(response => {
    //         console.log(response)
    //         setPosts(response.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // }, []);

    // When the page number changes call the api for posts.
  useEffect(() => {
    let wp_API_Url = `http://localhost:10039`;
    axios.get(`${wp_API_Url}/wp-json/wp/v2/posts`, { params: { page: page } })
    .then(response => {
      // Store the number of posible pages.
      setNumberofpage(response.headers["x-wp-totalpages"]);
      // Store the posts from the response.
      console.log(response)
      setPosts(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, [page, setPosts]);

  // Event handler: Decrease page count no lower then 1.
  const handlePrevPage = () => setPage(page - 1 ? page - 1 : 1);
  // Event handler: Increase page count no higher then nrofpages.
  const handleNextPage = () => setPage(page < nrofpages ? page + 1 : nrofpages);

  return (
    <>
    <NavbarSx/>
    <section className='blog-page'>
      <Container size='lg' pt={60} pb={80}>
          <Grid gutter={32}>
          <Grid.Col span={12} align='center'>
            <Title  weight={800} mb="sm">Blog</Title>
            <Text>Latest updates and Hand-picked resources.</Text><br/>

          </Grid.Col>
            {console.log('Posts', posts)}
            {posts && posts.length &&
            posts.map(post => (
            <Grid.Col span={6}  key={post.id}>
              <Card className='post-item' shadow="md" p="xl" radius="lg" >
                <Card.Section>
                  <Image
                    src={post.featured_image_url}
                    height={200}
                    alt="Norway"
                  />
                  </Card.Section>
                  <div style={{padding: '30px 0 5px'}}>
                    <PostCategory/>
                    <h4><Link to={`/post/${post.id}`} className='post-title'>{post.title.rendered}</Link> </h4>
                  </div>
                  <Text size="sm" color="dimmed" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                </Card>
              </Grid.Col>
            ))}
          </Grid><br/><br/>
          {/* <Pagination nrOfPages={nrofpages} currentpage={page} onSelectPage={ n => setPage(n)} /> */}
         <div className='pagination'>
           <ActionIcon variant="outline" color={'violet'} onClick={handlePrevPage}><IconArrowLeft size="1rem" /></ActionIcon>
           <div style={{margin: '0 10px'}}>Page {page} of {nrofpages}</div>
           <ActionIcon variant="outline" color={'violet'} onClick={handleNextPage}><IconArrowRight size="1rem" /></ActionIcon>
         </div>
        </Container>
      </section>
      <FooterSx/>
    </>
  );
}
export default BlogPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Grid from '@mui/material/Grid';

// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// function BlogPage() {

//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         let wp_API_Url = `http://localhost:10039`;
//         axios.get(`${wp_API_Url}/wp-json/wp/v2/posts`)
//         .then(response => {
//             console.log(response)
//             setPosts(response.data);
//         })
//         .catch(error => {
//             console.log(error);
//         });
//     }, []);

//   const classes = useStyles();


//   return (
//     <Grid container spacing={3}>
//       {console.log('Posts', posts)}
//       {posts.map(post => (
//       <Grid item md={4} key={post.id}>
//         <Card className={classes.root}>
//             <CardMedia
//               className={classes.media}
//               image={post.featured_image_url}
//               title="Paella dish"
//             />
//             <CardContent>
//             <Link to={`/post/${post.id}`}><h4>{post.title.rendered}</h4></Link> 
//               <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
//             </CardContent>
//         </Card>
//       </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default BlogPage