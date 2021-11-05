import "./estilo.css";

function Footer() {
  return (
    <footer className="rodape">
        <p>&copy; OnControll {new Date().getFullYear()}</p>
        <p>Desenvolvido por Ashiley</p>
    </footer>
  );
}

export default Footer;
