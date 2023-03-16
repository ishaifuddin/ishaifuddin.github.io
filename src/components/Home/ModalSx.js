import { useState } from 'react';
import { Modal, Button, Group, useMantineTheme } from '@mantine/core';
import { IconArrowRight, IconBasket } from '@tabler/icons';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

function ModalSx({ formType='', formTitle='', icon='', buttonText='Get Started', buttonColor='green' }) {
  const [opened, setOpened] = useState(false);
  const [isSignUp, setSignIn] = useState("signup");
  const theme = useMantineTheme();

  return (
    <>
      <Modal className='modal' centered radius="lg"
        
        overlayProps={{
          color: theme.colorScheme === 'light' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.7,
          blur: 50}}
        opened={opened}
        onClose={() => setOpened(false)}
        title={formTitle === 'signup' ? "Sign Up Now" : "Sign In Now"}
      >
        {formType ==='signup' ? <SignUpForm/> : <SignInForm/> }
        {/* <Button onClick={() => setSignIn(false)} fullWidth mt='xl' px='xl' size="md" color="indigo">Submitd</Button> */}
      </Modal>
      
      <Button onClick={() => setOpened(true)} variant="filled" color={buttonColor} rightIcon={icon === 'basket' ?  <IconBasket size={18} /> : <IconArrowRight size={18} />} size='lg'>{buttonText}</Button>
      
      {/* <Button onClick={() => setOpened(true)} variant="filled" color='green' size="lg" rightIcon={<IconArrowRight size={18} />}>{buttonText}</Button> */}
      {/* <Button onClick={handleButtonClick} variant="filled" color={buttonColor} rightIcon={<IconArrowRight size={18} />} size='lg'>{buttonText}</Button> */}
    </>
  );
}
export default ModalSx;


