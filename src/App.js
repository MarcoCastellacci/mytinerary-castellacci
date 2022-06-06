import Main from './components/Main';
import './styles/App.css';
import "swiper/css/bundle";
import "../src/styles/styles.css";
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Header/>
      <Main />
    </>
  )
}

export default App;
