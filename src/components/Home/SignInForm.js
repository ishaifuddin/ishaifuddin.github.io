import { useState } from 'react';
import { TextInput, PasswordInput, Tooltip, Center, Text, Button } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons';

function UserEmail() {

  return (
    <TextInput
      mt="md"
      label="Your Eamil"
      placeholder="Your Email Address"
    />
  );
}

function Password() {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState('');
  const valid = value.trim().length >= 6;
  return (
    <Tooltip
      label={valid ? 'All good!' : 'Password must include at least 6 characters'}
      position="bottom-start"
      withArrow
      opened={opened}
      color={valid ? 'indigo' : undefined}
    >
      <PasswordInput
        label="Your password"
        required
        placeholder="Your password"
        onFocus={() => setOpened(true)}
        onBlur={() => setOpened(false)}
        mt="md"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </Tooltip>
  );
}


function SignInForm() {
  return (
    <>
      <UserEmail />
      <Password />
      <Button fullWidth mt='xl' px='xl' size="md" color="indigo">Submit</Button>
    </>
  );
}

export default SignInForm;
