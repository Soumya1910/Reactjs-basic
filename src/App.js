import logo from './logo.svg';
import './App.css';
import Greet from './component/Functional_Component_Example';
import Welcome from './component/Class_Component_Example';
import Message from './component/State_Component_Example';
// import Counter from './component/Counter';
import Counter from './component/renderFunction/Counter';
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
import ClickMouseTwo from './component/renderFunction/ClickMouseTwo';
import HoverCounterTwo from './component/renderFunction/HoverCounterTwo';
import ComponentC from './component/ContextFunction/ComponentC';
import {UserProvider} from './component/ContextFunction/UserContext';
import ComponentD from './component/ContextFunction/ComponentD';
import { getByPlaceholderText } from '@testing-library/react';
import ClassCounter from './component/Hooks/ClassCounter';
import HookCounter from './component/Hooks/HookCounter';
import IncrementDecrementCounter from './component/Hooks/IncrementDecrementCounter';

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

      {/* <ClickCounter />
      <HoverCounter /> */}

      {/* <ClickMouseTwo/>
      <HoverCounterTwo /> */}

      {/* <Counter render={(counter, incrementHandler) => <ClickMouseTwo counter={counter} incrementHandler={incrementHandler} />} />

      <Counter render={(counter, incrementHandler) => <HoverCounterTwo counter={counter} incrementHandler={incrementHandler} />} /> */}

      {/* <UserProvider value="Soumya"> 
        <ComponentC />
      </UserProvider> */}
      
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      <IncrementDecrementCounter />
      
    </div>
  );
}

export default App;

/** 
What are Hooks?
Hooks are new feature addition to version of React 16.8 which allow you to use React features without having to write a class.
Hooks don't work inside the class.

Why Hooks?
Reason 1:
  Understand how this keyword works in Javascript.
  Remember to bind even handlers in class components.
  Classes don't minify very well and make hot reloading very unreliable.

Reason 2:
  There is no particular way to reuse stateful component logic.
  HOC and render pattern do address this problem but need to restructure the code. Ending up with several other components to share functionality.
  There is a need to share stateful logic in a better way. 

Reason 3:
  Create component for complex scenarios such as data fetching and subscribing to events, related code is not organized in one organized place. It's scattered.
  e.g. 
    Data Fetching - componentDidMount and componentDidUpdate
    Event Listeners - componentDidMount and componentWillUnmount



  */