import "./estilo.css";

function FormularioApontamento() {
  return (
    <div className="container-form-apontamento">
      <div className="form-apontamento-caixa-botao-novo-apontamento">
        <button className="form-apontamento-botao">Novo Apontamento</button>
      </div>

      <form className="form-apontamento">
        <h2 className="form-apontamento-titulo">Novo Apontamento</h2>
        <div className="form-apontamento-caixa-cliente">
          <select className="form-apontamento-select">
            <option value="">Selecione um Cliente</option>
          </select>
          <button className="form-apontamento-botao-novo-cliente">
            <i className="fas fa-plus"></i>
          </button>
        </div>

        <textarea
          rows="15"
          className="form-apontamento-descricao"
          placeholder="Descreva a atividade feita"
        ></textarea>

        <div className="form-apontamento-caixa-botao-enviar">
          <button className="form-apontamento-botao">Enviar Apontamento</button>
        </div>
      </form>
    </div>
  );
}

export default FormularioApontamento;
