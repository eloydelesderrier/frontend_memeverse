// src/pages/index.js
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const navigateToAbout = () => {
    router.push('/GaleriaMemes'); // Navega para a página "about"
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl">Bem-vindo ao Meu Site. Aqui você pode criar seus memes livremente</h1>
      
    </div>
  );
}
