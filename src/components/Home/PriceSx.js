import { useState } from 'react';
import { Badge, Button, Card, Container, Grid, List, Radio, Switch, Group, useMantineTheme, Text, Title } from '@mantine/core';
import { IconBasket, IconCheck, IconX } from '@tabler/icons';
import ModalSx from './ModalSx'

function PriceSx ({oneHundred='', }) {

  const theme = useMantineTheme();
  const [checked, setChecked] = useState(true);
  const [value, setValue] = useState('500');

//   const priceValue = () => {
//     if(value === '500'){'$50'} else{'$20'}
//  }

  return (
    <section id='pricing' className="pricing-list">
      <Container size="lg" py={90}>
        <Grid gutter={0} align='center'>
            <Grid.Col md={12} style={{textAlign: 'center'}}>
                <Group position="center">
                    <Badge variant="light" color='orange' size="lg">Pricing List</Badge>
                </Group>
                <Title order={1} weight={900} align="center" mt="sm" mb={50}>Minimalist Plans</Title>

              <Radio.Group className='select-plan'offset="sm"
                value={value}
                onChange={setValue}
                >
                <span>Up to</span>
                <Radio value="100" label="100" color="indigo"/>
                <Radio value="500" label="500" color="indigo" />
                <Radio value="2500" label="2500" color="indigo" />
                <span>Orders per month</span>
              </Radio.Group>
            </Grid.Col>
            <Grid.Col md={6}>
              <Card className='item' shadow="sm" p="lg" radius="xl" withBorder style={{marginLeft: 'auto'}}>
                <Card.Section>
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Title color='indigo' order={4} weight={600}>Business</Title>
                  <Badge color="pink" variant="light">
                    Core Features
                  </Badge>
                </Group>
                <Title order={1} size="h1" color="black">{value ==='100' ? '$20' : value === '2500' ? '$100' : '$50'}<sub className=''><small>/month</small></sub></Title>
                <Text size="sm" color="dimmed">
                  Lorem ipsum you can explore more of the magical fjord landscapes with tours.
                </Text>
                <List mb='md'>
                  <List.Item><IconCheck stroke={2.5} size={20} color='indigo' /> Historical Data</List.Item>
                  <List.Item><IconCheck stroke={2.5} size={20} color='indigo' />Unlimited Team Members</List.Item>
                  <List.Item><IconCheck stroke={2.5} size={20} color='indigo' />Advanced Reports</List.Item>
                  <List.Item><IconCheck stroke={2.5} size={20} color='indigo' />Segmenting</List.Item>
                  <List.Item><IconCheck stroke={2.5} size={20} color='indigo' />Cart Tracking and Recovery</List.Item>
                  <List.Item><IconCheck stroke={2.5} size={20} color='indigo' />Customer Journey Tracking</List.Item>
                  <List.Item><IconCheck stroke={2.5} size={20} color='indigo' />Traffic data</List.Item>
                  <List.Item><IconCheck stroke={2.5} size={20} color='indigo' />Dynamic product pricing</List.Item>
                  <List.Item><IconCheck stroke={2.5} size={20} color='indigo' />Manage multiple shop with same account</List.Item>
                </List>
                <ModalSx formType='signup' icon='basket' formTitle='signup' buttonText="Start with a 15-day trial"  buttonColor="indigo" />
              </Card>
            </Grid.Col>

            <Grid.Col md={6}>
              <Card className='item extend' shadow="sm" p="lg" withBorder>
                <Card.Section>
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Title color='indigo' order={4} weight={600}>Add-On: Mail-automation</Title>
                  <Switch style={{marginBottom: '-10px'}}
                  labelPosition="left"
                    checked={checked}
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                    color="green"
                    size="md"
                    thumbIcon={
                      checked ? (
                        <IconCheck size={12} color='green' stroke={3} />
                      ) : (
                        <IconX size={12} color='#aaa' stroke={3} />
                      )
                    }
                  />
                </Group>
                <Title order={1} size="h1" color="black">{value ==='100' ? '$10' : value === '2500' ? '$60' : '$25'}<sub className=''><small>/month</small></sub></Title>
                <Text  color="dimmed">
                  Lorem ipsum you can explore more of the magical fjord landscapes with tours.
                </Text>
                <List>

                <List.Item><IconCheck stroke={2.5} size={20} color='indigo' />Send automated emails to Customer-Segments</List.Item>
                  <List.Item><IconCheck stroke={2.5} size={20} color='indigo' />Send emails to Browse-abandoners</List.Item>
                  <List.Item><IconCheck stroke={2.5} size={20} color='indigo' />Recover lost carts with Abandoned-Cart emails.</List.Item>
                </List>
              </Card>
            </Grid.Col>
        </Grid>
      </Container>
      </section>
  );
}
export default PriceSx