"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Signup = () => {
  const methods = useForm();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="flex flex-col max-w-md w-full space-y-4 section">
      <h1 className="text-2xl font-bold text-center">Sign In</h1>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 w-full m-auto"
        >
          <Input
            type="email"
            label="Email"
            className="focus:outline-none focus:border-light-primary focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary dark:focus:border-dark-primary "
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={errors.email}
          />
          <Input
            type="password"
            label="Password"
            className="focus:outline-none focus:border-light-primary focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary dark:focus:border-dark-primary "
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            error={errors.password}
          />
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </FormProvider>
    </section>
  );
};

export default Signup;
