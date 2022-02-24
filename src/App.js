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
import LifeCycleA from './component/LifeCycleA';
import ReactFragment from './component/React-Fragment';
import Table from './component/Table';
import PureComponentExample from './component/PureComponentExample';
import ParentComponentWithPureCompExample from './component/ParentComponentWithPureCompExample';
import RefComponent from './component/RefComponent';
import RefExample from './component/RefExample';
import FwdRefParentInput from './component/FwdRefParentInput';
import ReactPortalsDemo from './component/ReactPortalsDemo';
import ShowDialog from './component/ShowDialog';
import Hero from './component/Hero';
import ErrorBoundary from './component/ErrorBoundary';
import ClickCounter from './component/higherOrderFunction/ClickCounter';
import HoverCounter from './component/higherOrderFunction/OverCounter';

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
      {/* <Form /> */}
      {/* <LifeCycleA /> */}
      {/* <ReactFragment/>
      <Table /> */}
      {/* <ParentComponentWithPureCompExample/>       */}
      {/* <RefComponent /> */}
      {/* <RefExample/> */}
      {/* <FwdRefParentInput/> */}
      {/* <ReactPortalsDemo/> */}
      {/* <ShowDialog/> */}
      {/* <ErrorBoundary>
        <Hero heroName='BatsMan' />
        <Hero heroName='SuperMan' />
        <Hero heroName='Joker' />
      </ErrorBoundary> */}

      {/* <ErrorBoundary>
        <Hero heroName='BatsMan' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='SuperMan' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Joker' />
      </ErrorBoundary> */}

      <ClickCounter />
      <HoverCounter />

    </div>
  );
}

export default App;
