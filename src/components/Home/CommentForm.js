import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function CommentForm() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <TextInput
        label="Name"
        placeholder="Your name"
        name="name"
        variant="filled"
        {...form.getInputProps("name")}
      />

      <TextInput
        label="Email"
        placeholder="Your email"
        mt="md"
        name="email"
        variant="filled"
        {...form.getInputProps("email")}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        {...form.getInputProps("message")}
      />

      <Group mt="xl">
        <Button color="violet" type="submit" size="md">
          Submit Comment
        </Button>
      </Group>
    </form>
  );
}
