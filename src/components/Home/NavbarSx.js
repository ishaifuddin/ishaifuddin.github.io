import React, {useEffect, useState} from 'react';
import useScrollListener from './useScrollListener';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import {
    createStyles,
    Header,
    Group,
    Button,
    UnstyledButton,
    Text,
    ThemeIcon,
    Divider,
    Box,
    Burger,
    Drawer,
    ScrollArea,
    Container,
    Image,
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
  } from '@tabler/icons';
import ModalSx from './ModalSx';
  
  const useStyles = createStyles((theme) => ({
    link: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontWeight: 700,
      textTransform: 'upperCase',
      fontSize: theme.fontSizes.sm,
  
      [theme.fn.smallerThan('sm')]: {
        height: 42,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      },
  
      ...theme.fn.hover({
        color: 'blue',
        backgroundColor: 'transparent',
      }),
    },
    linkActive: {
      '&, &:hover': {
        backgroundColor: 'transparent',
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      },
    },
  
    // subLink: {
    //   width: '100%',
    //   padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    //   borderRadius: theme.radius.md,
  
    //   ...theme.fn.hover({
    //     backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    //   }),
  
    //   '&:active': theme.activeStyles,
    // },
  
    // dropdownFooter: {
    //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    //   margin: -theme.spacing.md,
    //   marginTop: theme.spacing.sm,
    //   padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    //   paddingBottom: theme.spacing.xl,
    //   borderTop: `1px solid ${
    //     theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    //   }`,
    // },
  
    hiddenMobile: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    hiddenDesktop: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  }));
  
  const mockdata = [
    {
      icon: IconCode,
      title: 'Open source',
      description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
      icon: IconCoin,
      title: 'Free for everyone',
      description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
      icon: IconBook,
      title: 'Documentation',
      description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
      icon: IconFingerprint,
      title: 'Security',
      description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
      icon: IconChartPie3,
      title: 'Analytics',
      description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
      icon: IconNotification,
      title: 'Notifications',
      description: 'Combusken battles with the intensely hot flames it spews',
    },
  ];
  

  
  export function NavbarSx() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const { classes, theme } = useStyles();

    /* START: Add class on Scroll */
    const [menus, setActive ] = useState(false);
    const changedBg = () => {
      if (window.scrollY >= 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
    window.addEventListener('scroll', changedBg);
    /* END: Add class on Scroll */

    /* START: Header hide/show on Scroll up/down */
  const [menuClasses, setMenuClasses] = useState([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const classList = [];

    if (scroll.y > 100 && scroll.y - scroll.lastY > 0)
      classList.push("add-to-scroll-down");

    setMenuClasses(classList);
  }, [scroll.y, scroll.lastY]);
   /* END: Header hide/show on Scroll up/down */
  
    const links = mockdata.map((item) => (
      <UnstyledButton key={item.title}>
        <Group noWrap align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={22} color={theme.fn.primaryColor()} />
          </ThemeIcon>
          <div>
            <Text size="sm" weight={500}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));

    
  
    return (
      
      <Box className={`${menus ? 'menus active': 'menus'} ${menuClasses.join(" ")}`}>
        <Container size="lg">
          <Header height={60}>
            <Group position="apart" sx={{ height: '100%' }}>
              <RouterLink to={'/'} style={{ width: 150}}>
                <Image
                  src="/images/logo.png"
                  alt="Shopex Logo"
                />
              </RouterLink>
    
              <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                <ScrollLink to={'home'} spy={true} smooth={true} offset={-80} duration={500} className={classes.link}>Home</ScrollLink>
                <ScrollLink to={'features'} spy={true} smooth={true} offset={-80} duration={500} className={classes.link}>Features</ScrollLink>
                <ScrollLink to={'why'} spy={true} smooth={true} offset={-80} duration={500} className={classes.link}>Why</ScrollLink>
                <ScrollLink to={'pricing'} spy={true} smooth={true} offset={-80} duration={500} className={classes.link}>Pricing</ScrollLink>
                <RouterLink to={'./blog'} spy={true} smooth={true} offset={-80} duration={500} className={classes.link}>Blog</RouterLink>
                <RouterLink to={'./demo'} spy={true} smooth={true} offset={-80} duration={500} className={classes.link}>Demo</RouterLink>
              </Group>
    
              <Group className={classes.hiddenMobile}>
                {/* <RouterLink to={'./signIn'}><Button variant="filled" color="indigo" size="md">Sing In</Button></RouterLink> */}
                <ModalSx formType='signin' buttonText="Sign In" buttonColor="indigo"/>
              </Group>
    
              <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
            </Group>
          </Header>
        </Container>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="xl"
          className={classes.hiddenDesktop}
          zIndex={1000000}
        >
          <RouterLink input ref to={'/'}>
            <Image sx={{marginTop: '-40px', paddingBottom: '10px'}}
              width={150}
              src="/images/commflow-logo.png"
              alt="CommFlow Logo"
            />
          </RouterLink>
          <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
                <a href='home' className={classes.link}>Home</a>
                <ScrollLink to={'/FeatureSX'} className={classes.link}>Features</ScrollLink>
                <ScrollLink to={'/whySx'} className={classes.link}>Why</ScrollLink>
                <ScrollLink to={'/pricingSx'} className={classes.link}>Pricing</ScrollLink>
                <ScrollLink to={'/blogSx'} className={classes.link}>Blog</ScrollLink>
                <RouterLink to={'/demoSx'} className={classes.link}>Demo</RouterLink>
  
            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
  
            <Group position="center" grow pb="xl" px="md">
              {/* <RouterLink to={'./singin'}><Button variant="light" color="green" size="lg">Sing In</Button></RouterLink> */}
              <ModalSx formType='signin' buttonText="Sign In"  buttonColor="indigo"/>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }
  export default NavbarSx;