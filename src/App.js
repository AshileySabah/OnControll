import './App.css';

import EstruturaPaginas from './componentes/EstruturaPaginas';
import FormularioApontamento from './componentes/FormularioApontamento';

const App = () => {
  return (
    <EstruturaPaginas>
      <FormularioApontamento/>
    </EstruturaPaginas>
  );
}

export default App;