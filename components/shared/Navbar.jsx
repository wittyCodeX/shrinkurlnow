"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  const pathname = usePathname();

  const isSigninPage = pathname === "/signin";

  return (
    <header className="w-full h-[5rem] flex items-center justify-between fixed top-0 bg-light-neutral dark:bg-dark-neutral left-0 right-0 section">
      <Logo />
      <div className="flex items-center justify-center gap-5">
        <ThemeSwitcher />
        <Link href={isSigninPage ? "/signup" : "/signin"}>
          <Button
            variant="ghost"
            className="border border-light-primary text-light-primary dark:border-dark-primary dark:text-dark-primary bg-transparent"
          >
            {isSigninPage ? "Sign Up" : "Sign In"}
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
