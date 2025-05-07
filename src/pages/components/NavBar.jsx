// src/components/Navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo e Nome do App */}
        <Link href="/">
          <span className="text-2xl font-semibold">MemeVerse</span>
        </Link>

        {/* Links de Navegação */}
        <div className="flex space-x-6">
          <Link href="/">
            <span
              className={`${
                router.pathname === '/' ? 'text-blue-500' : 'text-white'
              } hover:text-blue-300 transition duration-200`}
            >
              Home
            </span>
          </Link>
          <Link href="/GaleriaMemes">
            <span
              className={`${
                router.pathname === '/GaleriaMemes' ? 'text-blue-500' : 'text-white'
              } hover:text-blue-300 transition duration-200`}
            >
              Memes
            </span>
          </Link>
          <Link href="/CriarMeme">
            <span
              className={`${
                router.pathname === '/CriarMeme' ? 'text-blue-500' : 'text-white'
              } hover:text-blue-300 transition duration-200`}
            >
              Criar Meme
            </span>
          </Link>
          <Link href="/login">
            <span
              className={`${
                router.pathname === '/login' ? 'text-blue-500' : 'text-white'
              } hover:text-blue-300 transition duration-200`}
            >
              Login
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
