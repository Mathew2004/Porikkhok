import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import CardContainer from './components/Card/CardContainer';
import Footer from './components/Footer/Footer';

function App() {
  const [theme, setTheme] = useState("light");

  // const changeTheme = (newTheme) => {
  //   setTheme(newTheme);
  //   document.documentElement.setAttribute("data-theme", newTheme);  // Change the theme
  // };

  return (
    <>
      <Navbar />
      <Hero />
      <CardContainer/>
      <Footer/>
    </>
  );
}

export default App;
