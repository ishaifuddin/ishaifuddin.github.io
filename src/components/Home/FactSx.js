import {
  Badge,
    Center,
    Container,
    Group,
    Image,
    Paper,
    RingProgress,
    SimpleGrid,
    Text,
    ThemeIcon,
    Title
  } from "@mantine/core";
  import { IconChartBar, IconCheck, IconCloudDownload, IconStar, IconUser, IconUserCheck } from "@tabler/icons";
  
  const mockdata = [
    {
      icon: IconCloudDownload,
      label: "Dwonloads",
      value: "500+"
    },
    {
      icon: IconUserCheck,
      label: "Active Users",
      value: "100, 000+"
    },
    {
      icon: IconStar,
      label: "User Rating",
      value: "1000+"
    }
  ];
  
function FactSx() {
    const stats = mockdata.map((stat, index) => {
      return (
        <Paper className="item" withBorder radius="md" p="xs" key={index}>
          <Group>
            <RingProgress
              size={80}
              roundCaps
              thickness={8}
              sections={[{ value: 100, color: "white" }]}
              label={
                <Center>
                  <ThemeIcon color="green" variant="light" radius="xl" size="xl">
                  <stat.icon size={50} stroke={2}  />
                  </ThemeIcon>
                </Center>
              }
            />
            <div>
              <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
                {stat.label}
              </Text>
              <Text weight={700} size="xl">
                {stat.value}
              </Text>
            </div>
          </Group>
        </Paper>
      );
    });
    return (
      <section className="facts" id="why"><br/><br/><br/>
        <Container size="lg">
            <Group position="center">
                <Badge variant="light" color='indigo' size="lg">Exclusive App</Badge>
            </Group>
            <Title style={{fontWeight: 900}} align="center" mt="sm">Cool facts about this app</Title>
            <Image style={{padding: '3rem 0 2rem'}} className='app-screen desktop'
                  radius="lg"
                  src="./images/asset4.jpg"
                  alt="Shop Dashboard Screen"
                />
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
                {stats}
            </SimpleGrid><br/><br/><br/>
        </Container>
      </section>
    );
  }
  

  export default FactSx