import logo from './logo.svg';
import './App.css';
import Greet from './component/Functional_Component_Example';
import Welcome from './component/Class_Component_Example';

function App() {
  return (
    <div className="App">
      <Greet name="Soumya" age= "30">
        This is a children props
      </Greet>
      <Greet name="Sayan" age = "25">
      <button>Click me</button>
      </Greet>
      <Greet name="Rajesh" age="28"/>
      <Greet name="Priyanka" age="30"/>
      <Welcome place="Burdwan"/>
      <Welcome place="Kolkata"/>
      <Welcome place="Asansol"/>
    </div>
  );
}

export default App;
