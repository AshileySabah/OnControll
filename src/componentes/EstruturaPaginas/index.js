import './estilo.css';

import Header from '../Header';
import Footer from '../Footer';

const App = (props) => {
  return (
    <div className="estrutura-paginas">
      <Header/>
        {props.children}
      <Footer/>
    </div>
  );
}

export default App;