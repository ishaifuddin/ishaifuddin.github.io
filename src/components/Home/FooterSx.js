import React from 'react';
import { useWindowScroll } from '@mantine/hooks';
import { createStyles, Container, Group, ActionIcon, Button } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconChevronUp } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    position: 'relative',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));
 function FooterSx() {
  const { classes } = useStyles();
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div className={`${classes.footer} footer`}>
      <Container size="lg" className={classes.inner}>
        <div>
          <small style={{color: '#777'}}>Shopex - 2023. All rights reserved.</small>
        </div>
        {/* <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group> */}
        {/* <Button className='scroll-top' onClick={() => scrollTo({ y: 0 })} variant='light' radius={4} p={0}  color='pink' style={{width: '50px', transform: 'rotate(45deg)', height: '50px', position: 'absolute', bottom: '15px', right: 'calc(50% - 25px)'}}><IconChevronUp size={30} /></Button> */}
      </Container>
    </div>
  );
}
export default FooterSx;