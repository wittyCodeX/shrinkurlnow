import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="ShrinkURLNow"
        width={2765}
        height={2732}
        className="w-10 h-10"
      />
    </Link>
  );
};

export default Logo;
