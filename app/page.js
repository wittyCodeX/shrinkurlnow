"use client"

import Form from "@/components/Form"
import ThemeSwitcher from "../components/ThemeSwitcher"

export default function Home() {
  return (
    <section className="p-6 min-h-screen">
      <div className="text-right">
        <ThemeSwitcher />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to ShrinkUrlNow</h1>
        <p className="text-lg mb-6">A simple tool to shorten your URLs</p>
        <Form />
      </div>
    </section>
  )
}
