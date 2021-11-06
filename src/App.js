import logo from './logo.svg';
import './App.css';
import Greet from './component/Functional_Component_Example';
import Welcome from './component/Class_Component_Example';
import Message from './component/State_Component_Example';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import Greetings from './component/Greetings';
import List_Rendering from './component/List_Rendering';
import Form from './component/Form';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Soumya" age= "30">
        This is a children props
      </Greet>
      <Greet name="Sayan" age = "25">
      <button>Click me</button>
      </Greet>
      <Greet name="Rajesh" age="28"/>
      <Greet name="Priyanka" age="30"/>
      <Welcome place="Burdwan"/>
      <Welcome place="Kolkata"/>
      <Welcome place="Asansol"/> */}
      {/* <Message /> */}
      {/* <Counter/> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick ></ClassClick> */}
      {/* <EventBind/> */}
      {/* <ParentComponent /> */}
      {/* <Greetings /> */}
      {/* <List_Rendering /> */}
      <Form />
    </div>
  );
}

export default App;
