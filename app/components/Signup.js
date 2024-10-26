import React from "react"
import { useForm } from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // Handle signup logic here
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-md mx-auto"
    >
      <div className="flex flex-col">
        <label
          htmlFor="username"
          className="mb-1"
        >
          Username
        </label>
        <input
          id="username"
          className="p-2 border rounded w-full"
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && (
          <span className="text-red-500 text-sm">
            {errors.username.message}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="mb-1"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          className="p-2 border rounded w-full"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="mb-1"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          className="p-2 border rounded w-full"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full"
      >
        Sign Up
      </button>
    </form>
  )
}

export default Signup
