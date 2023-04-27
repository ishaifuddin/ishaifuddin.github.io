import {
  Button,
  Container,
  Grid,
  Image,
  Paper,
  TypographyStylesProvider,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons";
import { Link as RouterLink } from "react-router-dom";
import ModalSx from "./ModalSx";

function HomeSx() {
  return (
    <Paper id="home" component="section" className="home">
      {/* <div className="hero-img">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" color='#EBF1FE' viewBox="191.167 0 420.833 411.166">
          <g>
            <path fill="currentColor" d="M243.164,156.312c-21.646,21.532-35.852,49.413-40.552,79.58c-0.17,1.108-0.333,2.208-0.475,3.311c-0.861,6.393-1.292,12.836-1.292,19.287c0.002,8.043,0.669,16.071,1.994,24.004c0.135,0.802,0.277,1.611,0.425,2.412c2.131,11.542,5.667,22.779,10.529,33.462c0.291,0.646,0.59,1.3,0.896,1.946c4.576,9.654,10.212,18.77,16.805,27.178c0.406,0.535,0.834,1.062,1.26,1.587c6.529,8.093,13.902,15.466,21.995,21.995c0.527,0.428,1.055,0.855,1.584,1.257c8.409,6.594,17.527,12.232,27.184,16.81c0.646,0.305,1.3,0.604,1.943,0.894c10.816,4.922,22.201,8.488,33.893,10.616c0.809,0.143,1.611,0.276,2.417,0.404c14.173,2.342,28.617,2.557,42.854,0.639c1.108-0.143,2.208-0.305,3.316-0.476c30.167-4.7,58.046-18.907,79.578-40.552l165.649-165.649V-1.833H401.309L243.164,156.312z"></path>
          </g>
        </svg>
       </div> */}
      <Container size="lg">
        <Grid align="center">
          <Grid.Col md={7}>
            <div className="content" style={{ position: "relative" }}>
              <TypographyStylesProvider>
                <h1>Analyse, Execute, Grow Your Business</h1>
                <p>
                  The only e-commerce store analytics you’ll ever need -
                  Understand your customers behaviors better - Quickly segment
                  and visualize your data - Measure all e-commerce store metrics
                  - Advanced Dynamic product pricing for targeted segment -
                  Targeted Automatic Emails{" "}
                </p>
                <ModalSx formType="signup" formTitle="signup" />
              </TypographyStylesProvider>
              <div className="built-for">
                <div>Build For: </div>
                <Image
                  className="woocommerce"
                  radius="md"
                  src="./images/asset3.png"
                  alt="woocommerce logo"
                />
                <Image
                  className="woocommerce"
                  radius="md"
                  src="./images/asset2.png"
                  alt="Shopify logo"
                />
              </div>
            </div>
          </Grid.Col>
          <Grid.Col md={5}>
            <Image
              className="app-screen desktop"
              radius="lg"
              src="./images/dashboard.png"
              alt="Shop Dashboard Screen"
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Paper>
  );
}

export default HomeSx;
