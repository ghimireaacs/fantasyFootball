import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-8 px-8 py-2 w-full max-w-screen-xl mx-auto bg-darkBackground text-whiteText border-2 border-neonGreen rounded-s shadow-lg transition-all">
      <Link href="/" className="hover:text-neonGreen">
        Home
      </Link>
      <Link href="#players" className="hover:text-neonGreen">
        Players
      </Link>
      <Link href="#about" className="hover:text-neonGreen">
        About
      </Link>
    </nav>
  );
}
