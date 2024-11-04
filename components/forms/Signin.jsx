"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function Signin() {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col max-w-md w-full space-y-4">
      <h1 className="text-2xl font-bold text-center">Sign In</h1>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="space-y-4 w-full m-auto"
        >
          <Input
            type="email"
            placeholder="Email"
            {...methods.register("email")}
          />
          <Input
            type="password"
            placeholder="Password"
            {...methods.register("password")}
          />
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Signin;
