import "./estilo.css";

function Header() {
  return (
    <header className="topo">
      <div className="caixa-logo">
        <h1>OnControll</h1>
      </div>
      <nav className="navegacao-topo">
        <ul className="lista-navegacao-topo">
          <li className="item-lista-navegacao-topo">
            <a href="/">Apontamentos</a>
          </li>
          <li className="item-lista-navegacao-topo">
            <a href="/">Frequência</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
