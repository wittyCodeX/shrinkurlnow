import React from "react";
import { Button } from "../ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="w-full h-[5rem]  flex items-center justify-between fixed top-0 bg-light-neutral dark:bg-dark-neutral left-0 right-0 section">
      <Logo />
      <div className="flex items-center justify-center gap-5">
        <ThemeSwitcher />
        <Link href="/sign-up">
          <Button
            variant="ghost"
            className="border border-light-primary text-light-primary dark:border-dark-primary dark:text-dark-primary bg-transparent h"
          >
            Sign Up
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
