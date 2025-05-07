import '../styles/globals.css';
import Navbar from './components/Navbar'; // Importando o componente Navbar
// import DrawingCanvas from './components/DrawingCanvas'; // Importando o componente DrawingCanvas

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar /> {/* Navbar será exibida em todas as páginas */}
      {/* <DrawingCanvas/> */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
