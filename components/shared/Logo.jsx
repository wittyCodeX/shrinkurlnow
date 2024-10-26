"use client";

import Image from "next/image";
import { useTheme } from 'next-themes';
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = () => {

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  
  return (
    <div>
      {theme === "dark" ? (    
        <Link href="/">
          <Image
            src="/logo.png"
            alt="ShrinkURLNow"
            width={2765}
            height={2732}
            className="w-10 h-10"
          />
        </Link>
      ) : (
        <Link href="/">
          <Image
            src="/logo3.png"
            alt="ShrinkURLNow"
            width={2765}
            height={2732}
            className="w-10 h-10"
          />
        </Link>
      )}
    </div>
  );
};

export default Logo;
