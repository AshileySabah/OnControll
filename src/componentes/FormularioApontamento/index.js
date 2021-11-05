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
          <select required name="cliente" id="cliente" className="form-apontamento-select">
            <option value="aa">Selecione um Cliente</option>
          </select>
          <button className="form-apontamento-botao-novo-cliente">
            <i className="fas fa-plus"></i>
          </button>
        </div>

        <div className="form-apontamento-caixa-calendario">
          <input required className="input-calendario" type="date" />
        </div>

        <div className="caixa-selecionar-periodos">
          <label htmlFor="input-num">
            Selecione a quantidade de períodos:{" "}
          </label>
          <input
            className="input-numero"
            type="number"
            min="1"
            max="3"
            id="input-num"
            required
          />
        </div>

        <ol className="lista-periodos">
          <li className="item-lista-periodos">
            das <input required className="input-hora" type="time" /> às <input required className="input-hora" type="time" />
          </li>
          <li className="item-lista-periodos">
            das <input required className="input-hora" type="time" /> às <input required className="input-hora" type="time" />
          </li>
        </ol>

        <textarea
          rows="15"
          className="form-apontamento-descricao"
          placeholder="Descreva a atividade feita"
          required
        ></textarea>

        <div className="form-apontamento-caixa-botao-enviar">
          <button type="submit" className="form-apontamento-botao">Enviar Apontamento</button>
        </div>
      </form>
    </div>
  );
}

export default FormularioApontamento;
