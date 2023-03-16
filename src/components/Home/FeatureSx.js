import { useState } from 'react';
import { Badge, Button, Collapse, Container, Grid, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import { IconBasket, IconChartPie, IconChevronDown, IconDiscount2, IconDiscountCheck, IconFilter, IconMailForward, IconSquareRoundedArrowDown, IconUsers } from '@tabler/icons';

function FeatureSx() {
  const [opened, setOpened] = useState(false);
  return (
    <section className="features" id='features'>
         <Container size="lg" py={100}>
            <Grid align='center'>
                <Grid.Col md={12}>
                    <Group position="center">
                        <Badge variant="light" color='violet' size="lg">Core Service</Badge>
                    </Group>
                    <Title order={1} weight={900} align="center" mt="sm" mb={70}>Key Features</Title>
                </Grid.Col>
                <Grid.Col lg={6} mb={90}>
                  <Group position="left" style={{maxWidth: '400px'}}>
                      <ThemeIcon variant="light" color='red' size={60} radius={40}>
                        <IconFilter size={35} stroke={2} />
                      </ThemeIcon>
                      <Title weight={600} size={30} >Data Filtering and Segmentation</Title>
                      <List>
                          <List.Item>Unlimited number of filters to help you segmentise your order, customer and products</List.Item>
                          <List.Item>Track the performance of all Segments</List.Item>
                          <List.Item>See which customer is getting in and out of a segment instantly</List.Item>
                      </List>
                  </Group>
                </Grid.Col>
                <Grid.Col lg={6} mb={90}>
                <Image radius="md" pt={60} pl={55} style={{background: '#FAE9EE', borderRadius: '10px', width: 'unset'}}
                    src="./images/asset5.jpg"
                    height={285}
                    fit="contain"
                    alt="Norway"
                    />
                </Grid.Col>
                <Grid.Col lg={6} mb={90}>
                    <Image radius="md" pt={60} pl={55} style={{background: '#EBF1FE', borderRadius: '10px', width: 'unset'}}
                    src="./images/asset5.jpg"
                    height={285}
                    fit="contain"
                    alt="Norway"
                    />
                </Grid.Col>
                <Grid.Col lg={6} mb={90}>
                    <Group position="left" style={{maxWidth: '480px', marginLeft: 'auto'}}>
                        <ThemeIcon variant="light" color='indigo' size={60} radius={40}>
                          <IconDiscount2 size={35} stroke={2} />
                        </ThemeIcon>
                        <Title weight={600} size={30} >Dynamic pricing And discounts with the help of Segment system</Title>
                        <List>
                            <List.Item>Create Quantity based pricing</List.Item>
                            <List.Item>Create Catagory based pricing</List.Item>
                            <List.Item>Gift products based on product added to cart</List.Item>
                            <List.Item> Offer discount on entire shop</List.Item>
                            <List.Item>And with the help of our advanced segmentation system, you can segmentize your customers based on their purchase behavior and offer invivisual "product-pricing-and-discounts" to "indivisual-segment"</List.Item>
                        </List>
                    </Group>
                </Grid.Col>
                <Grid.Col lg={6} mb={90}>
                  <Group position="left" style={{maxWidth: '480px'}}>
                      <ThemeIcon variant="light" color='green' size={60} radius={40}>
                        <IconChartPie size={35} stroke={2} />
                      </ThemeIcon>
                      <Title weight={600} size={30} >Advanced Report And analysis</Title>
                      <List>
                          <List.Item>Advanced reports on order data, order-shipping and billing location-wise reports</List.Item>
                          <List.Item>Customer reports, customer revenue breakdown based on location, customer retention analysis, find makes them purchase again, retention analysis of specific location, compare retention between different location</List.Item>
                          
                          <Collapse in={opened} transitionDuration={400} transitionTimingFunction="linear">
                          <List.Item>Single customer report, See what they buy most, avarage day gap between each indivisual product-purchase , average day-gap between each order, what they buy most with discount, average shipping cost of this customer and each session data and much more</List.Item>
                            <List.Item>Reports on product performance, product sales data, shipping location-wise product performace, Select specific shipping city and find which product it loves most, which products demand is growing, which product makes more revenue and profit with the help of line charts</List.Item>
                            <List.Item>Single product performance report, product frequently bought together with a product, each quarter average sales report, Total view of specific product, average view duration, average view duration before adding to cart, Retention data of single product, performace comparision between different city</List.Item>
                            <List.Item>Reports on ad-campaigns, coupon data and much more .</List.Item>
                          </Collapse>
                          <small style={{color: '#40BF56', cursor: 'pointer', display: 'inline-flex'}} onClick={() => setOpened((o) => !o)}>
                            View More <IconChevronDown stroke={1} />
                          </small>
                      </List>
                  </Group>
                </Grid.Col>
                <Grid.Col lg={6} mb={90}>
                    <Image radius="md" pt={60} pl={55} style={{background: '#E6F4F2', borderRadius: '10px', width: 'unset'}}
                    src="./images/asset5.jpg"
                    height={285}
                    fit="contain"
                    alt="Norway"
                    />
                </Grid.Col>
                <Grid.Col lg={6} mb={90}>
                    <Image radius="md" pt={60} pl={55} style={{background: '#FEF0DE', borderRadius: '10px', width: 'unset'}}
                    src="./images/asset5.jpg"
                    height={285}
                    fit="contain"
                    alt="Norway"
                    />
                </Grid.Col>
                <Grid.Col lg={6} mb={90}>
                    <Group position="left" style={{maxWidth: '480px', marginLeft: 'auto'}}>
                        <ThemeIcon variant="light" color='orange' size={60} radius={40}>
                          <IconUsers size={35} stroke={2} />
                        </ThemeIcon>
                        <Title weight={600} size={30} >Traffic</Title>
                        <List>
                            <List.Item>Create Quantity based pricing</List.Item>
                            <List.Item>Create Catagory based pricing</List.Item>
                            <List.Item>Gift products based on product added to cart</List.Item>
                            <List.Item> Offer discount on entire shop</List.Item>
                            <List.Item>And with the help of our advanced segmentation system, you can segmentize your customers based on their purchase behavior and offer invivisual "product-pricing-and-discounts" to "indivisual-segment"</List.Item>
                        </List>
                    </Group>
                </Grid.Col>
                <Grid.Col lg={6} mb={90}>
                  <Group position="left" style={{maxWidth: '480px'}}>
                      <ThemeIcon variant="light" color='lime' size={60} radius={40}>
                        <IconMailForward size={35} stroke={2} />
                      </ThemeIcon>
                      <Title weight={600} size={30} >Engage with manuel and automated mail</Title>
                      <List>
                          <List.Item>Advanced reports on order data, order-shipping and billing location-wise reports</List.Item>
                          <List.Item>Customer reports, customer revenue breakdown based on location, customer retention analysis, find makes them purchase again, retention analysis of specific location, compare retention between different location</List.Item>
                          <List.Item>Single customer report, See what they buy most, avarage day gap between each indivisual product-purchase , average day-gap between each order, what they buy most with discount, average shipping cost of this customer and each session data and much more</List.Item>
                          <List.Item>Reports on product performance, product sales data, shipping location-wise product performace, Select specific shipping city and find which product it loves most, which products demand is growing, which product makes more revenue and profit with the help of line charts</List.Item>
                          <List.Item>Single product performance report, product frequently bought together with a product, each quarter average sales report, Total view of specific product, average view duration, average view duration before adding to cart, Retention data of single product, performace comparision between different city</List.Item>
                          <List.Item>Reports on ad-campaigns, coupon data and much more .</List.Item>
                      </List>
                  </Group>
                </Grid.Col>
                <Grid.Col lg={6} mb={90}>
                    <Image radius="md" pt={60} pl={55} style={{background: '#F1FBDB', borderRadius: '10px', width: 'unset'}}
                    src="./images/asset5.jpg"
                    height={285}
                    fit="contain"
                    alt="Norway"
                    />
                </Grid.Col>
                <Grid.Col lg={6} mb={90}>
                    <Image radius="md" pt={60} pl={55} style={{background: '#F7E6FB', borderRadius: '10px', width: 'unset'}}
                    src="./images/asset5.jpg"
                    height={285}
                    fit="contain"
                    alt="Norway"
                    />
                </Grid.Col>
                <Grid.Col lg={6} mb={90}>
                    <Group position="left" style={{maxWidth: '480px', marginLeft: 'auto'}}>
                        <ThemeIcon variant="light" color='grape' size={60} radius={40}>
                          <IconBasket size={35} stroke={2} />
                        </ThemeIcon>
                        <Title weight={600} size={30} >Carts</Title>
                        <List>
                            <List.Item>Create Quantity based pricing</List.Item>
                            <List.Item>Create Catagory based pricing</List.Item>
                            <List.Item>Gift products based on product added to cart</List.Item>
                            <List.Item> Offer discount on entire shop</List.Item>
                            <List.Item>And with the help of our advanced segmentation system, you can segmentize your customers based on their purchase behavior and offer invivisual "product-pricing-and-discounts" to "indivisual-segment"</List.Item>
                        </List>
                    </Group>
                </Grid.Col>
                <Grid.Col lg={6} mb={90}>
                  <Group position="left" style={{maxWidth: '400px'}}>
                      <ThemeIcon variant="light" color='cyan' size={60} radius={40}>
                        <IconDiscountCheck size={35} stroke={2} />
                      </ThemeIcon>
                      <Title weight={600} size={30} >Cost</Title>
                      <List>
                          <List.Item>Unlimited number of filters to help you segmentise your order, customer and products</List.Item>
                          <List.Item>Track the performance of all Segments</List.Item>
                          <List.Item>See which customer is getting in and out of a segment instantly</List.Item>
                      </List>
                  </Group>
                </Grid.Col>
                <Grid.Col lg={6} mb={90}>
                <Image radius="md" pt={60} pl={55} style={{background: '#DAF9FC', borderRadius: '10px', width: 'unset'}}
                    src="./images/asset5.jpg"
                    height={285}
                    fit="contain"
                    alt="Norway"
                    />
                </Grid.Col>
            </Grid>
         </Container>
    </section>
  );
}

export default FeatureSx;
