import { useState } from "react";
import "./Header.css";

function Header() {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark(prev => {
      const next = !prev;
      document.body.setAttribute("data-theme", next ? "dark" : "light");
      return next;
    });
  }

  return (
    <header className="header">
      <h1 className="logo">Meu Portfólio</h1>
      <nav>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#contato">Contato</a>
      </nav>
      <button className="theme-btn" onClick={toggleTheme}>
        {dark ? "🌞" : "🌙"}
      </button>
    </header>
  );
}

export default Header;

