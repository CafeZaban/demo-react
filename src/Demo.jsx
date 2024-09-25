import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack, TextField } from "@mui/material";

export default function Demo() {
  const form = useForm({
    mode: "all",
    initialValues: { name: "", email: "" },
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().max(20).min(4),
        email: Yup.string().email(),
      })
    ),
  });

  const onSubmit = form.handleSubmit((x) => console.log(x));

  return (
    <Stack component="form" onSubmit={onSubmit} gap={2}>
      <TextField
        label="Name"
        placeholder="Name"
        {...form.register("name")}
        error={!!form.formState.errors["name"]}
        helperText={form.formState.errors["name"]?.message}
      />
      <TextField
        label="Email"
        placeholder="Email"
        {...form.register("email")}
        error={!!form.formState.errors["email"]}
        helperText={form.formState.errors["email"]?.message}
      />
      <Button
        type="submit"
        variant="outlined"
        disabled={!form.formState.isValid}
      >
        Submit
      </Button>
    </Stack>
  );
}
