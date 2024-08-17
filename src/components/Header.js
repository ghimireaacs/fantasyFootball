import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="p-6 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="w-12 h-12" />
      </div>

      {/* Navbar Section */}
      <Navbar />

      {/* Login/Signup Section */}
      <div className="flex space-x-4">
        <button className="bg-mutedBlack text-whiteText font-bold py-2 px-4 rounded-lg shadow-md hover:bg-neonGreen hover:text-darkBackground transition-colors">
          Log In
        </button>
        <button className="bg-vibrantBlue text-whiteText font-bold py-2 px-4 rounded-lg shadow-md hover:bg-neonGreen hover:text-darkBackground transition-colors">
          Sign Up
        </button>
      </div>
    </header>
  );
}
