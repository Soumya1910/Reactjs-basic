## React Component
-------------------------------------------
Components describe a part of the user interface. They are re-usable and can be nested inside other components.

<b>Component Types:</b><br/>
- Stateful Class Component : 
    - It should extend `React.component` class.
    - Render method returning HTML
- Stateless Functional Component :
    - It's a simple Javascript Function.
    - It accepts a property(props) and returns HTML(JSX)


## React JSX
-------------------------------------------
 - Javascript XML(JSX) - extension to the JS language syntax.
 - Write XML like code for elements and components.
 - JSX tags have a tag name, attributes and children.
  - JSX is not necessity to write React application.
  - JSX makes your react code simpler and elegant.
   - JSX ultimately transpiles to pure Javascript which is understood by the browser.

   ## React Props
-------------------------------------------
 - React props are immutable. We can't modify the value. Instead we can store in the state object and update the object.

| props | state |
| :---: | :---: |
|props get passed to the component|state is managed within the component|
|It's passed as a Paramter in the function|Variables declared in the function body|
|props are immutable|state can be changed|
|Functional components - props |useState hook for functional component|
Class Component - this.props |this.state - class component|