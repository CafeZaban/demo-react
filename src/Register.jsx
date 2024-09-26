import react from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack, TextField } from "@mui/material";

export default function Register() {
  const form = useForm({
    mode: "all",
    initialValues: { name: "", email: "", address: "", number:"", lastname: ""},
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().max(20).min(4),
        email: Yup.string().email("Enter a valid email"),
        number: Yup.string().matches(/^\d+$/, "Enter a valid number"),
      })
    ),
  });

  const onSubmit = form.handleSubmit((x) => console.log(x));

  return (
    <Stack component="form" onSubmit={onSubmit} gap={2} sx={{
      maxWidth: "400px",
      margin: "auto",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
      backgroundColor: "#f9f9f9",
    }}>
      <TextField
        label="Name"
        placeholder="Name"
        {...form.register("name")}
        error={!!form.formState.errors["name"]}
        helperText={form.formState.errors["name"]?.message}
      />
      <TextField
        label="Last Name"
        placeholder="Last Name"
        {...form.register("lastname")}
        error={!!form.formState.errors["lastname"]}
        helperText={form.formState.errors["lastname"]?.message}
      />
      <TextField
        label="Email"
        placeholder="Email"
        {...form.register("email")}
        error={!!form.formState.errors["email"]}
        helperText={form.formState.errors["email"]?.message}
      />
      <TextField
        label="Number"
        placeholder="Number"
        {...form.register("number")}
        error={!!form.formState.errors["number"]}
        helperText={form.formState.errors["number"]?.message}
      />
       <TextField
        label="Address"
        placeholder="Address"
        {...form.register("address")}
        error={!!form.formState.errors["address"]}
        helperText={form.formState.errors["address"]?.message}
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
