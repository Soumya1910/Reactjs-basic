import logo from './logo.svg';
import './App.css';
import Greet from './component/Functional_Component_Example';
import Welcome from './component/Class_Component_Example';

function App() {
  return (
    <div className="App">
      {/* <Greet/> */}
      <Welcome/>
    </div>
  );
}

export default App;
