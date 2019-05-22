# react-redux-portfolio
React-redux portfolio app with multiple bundled projects

## React core concepts
- **Components:** reusable pieces of React code to control part of the user interface. Components capture the structure of UI, and can have internal data to track the user behavior throughout the lifetime of the app.

- **State:** dynamic data in a React component. This is often used to track variables that will be re-rendered in the UI based on events that occur in the application.

👉 Remember the React State Rule: Never Directly Modify State. Instead use the `this.setState` method.

- **Props:** data in a React component that gets passed down from its parent. In the parent component, it will pass data down to the child component through attributes in the child component’s JSX.

- **Routing:** With react-router, a single page React application can transform into one with multiple pages of different content. Each page matches a url path of the application to a different component.

- **Higher-order components:** A higher-order component is one that takes another component as an input. The idea is to treat the component like a function. Have one component as input, and then output an entirely new component based on that input, with new properties, methods, and/or JSX!

## Redux concepts
- **Redux** is a state management technology. It handles all the underlying data for your React application by enforcing a universal flow of data - that components can read from and add to using dispatchable actions.

- The **Store** is the global object that collects all the data for a React application.

- **Reducers** split up the store and describe how sections of the store should update.

- **Actions** are objects full of data that the reducers listen to. These actions are dispatchable by components. And reducers will then use the action data to update the redux store.

- **React Redux** provides the connection between the redux system and the React components. Particularly, the Provider component gives each component access to the redux store. And the connect function allows each component to customize what parts of the redux store it wants to read, and what actions the component should be able to dispatch.

- **MapStateToProps**, parameter one of the react-redux connect function customizes which part of the redux store the component will have access to.

- **MapDispatchToProps**, parameter two of the react-redux connect function specifies which action creators the component should be able to dispatch.

- **Redux Middleware** code runs in between the point that an action gets dispatched and the reducers receive the action objects. Think of it as extensions for the redux system; it’s useful for adding new capabilities to the underlying redux logic. One such middleware is redux-thunk.

- **Redux thunk** is a library that allows for asynchronous actions to be dispatched. Normally, actions are plain objects. But in the case of using the fetch method, to make an api call, an asynchronous action is useful in order to dispatch different kinds of actions based on the result of the api call.

- **LocalStorage** is a JavaScript object that can be used to store items in a key-value structure within the browser.

- **React context** is a way to share data between many components, without having to manually pass objects down through props.

- **The Context Provider Component** uses a value property to provide data to any nested component through its context field.

- The **Redux devtools** is an extension that allows you to examine the redux store state, and see actions being dispatched in real time.

## Design patterns
- **Pub/Sub** is a pattern that enables communication in a network based on publishing messages to channels, and subscribing to those messages.

## Glossary
Components: Reusable pieces of the application UI that has inner dynamic functionality and state.

- **Classes:** Interfaces of properties and methods that will be assigned to object instances.

- **Inheritance:** The extension of existing properties and methods from a parent class to a subclass. The subclass extends the parent class to inherit the base parent class’s methods and properties.

- **State:** The internal data of a React component. The state can be updated through interactions with the component during the application.

- **SetState:** The official way to update state in a React component. It is a react rule to not modify the state directly. Instead, provide new values for keys in the state, using the setState() method. The setState() method recalls the render method when complete, giving the component the chance to reflect changes in the UI.

- **.bind:** A JavaScript method that passes the this object down from a component to a helper methods. Crucial for components to pass down the `this.setState()` method to helper methods.

- **Class Properties and Initializers:** An alternative syntax for declaring the state and within components that automatically binds the `this` object.

- **Props:** Data passed down to the React component from the parent.

- **Bundling:** The packaging of multiple JavaScript files and their dependencies into one giant file that the HTML can refer to.

- **DOM:** The Document Object Model for the web application. The document object, provided to the JavaScript, allows methods to update the UI.

- **React’s Virtual DOM:** An internal virtual representation of the DOM, that is much lighter weight, which allows React to efficiently compute updates using the `document API`.

- **Lifecycle Methods:** Method that fire in different phases in the React component. Most have to do with the component’s relationship with the document. For example, componentDidMount fires when the component appears in (mounts to) the DOM. Likewise, componentWillUnmount fires when the component is about to leave (unmount from) the DOM.

- **Fetch:** Implemented as a JavaScript promise, this method can make HTTP requests to grab data.

- **Stateless Functional Components:** An alternative cleaner syntax to create React components based on returning JSX from a function.

- **React Router:** A technology which can turn a single-page app into one with multiple pages of content based on paths.

- **Higher Order Components:** Components that take other components as inputs, to return an entirely new component. They are like functions which have component inputs, and output a new customized component, based on that component input.

## Notes
User input can be tracked with the `onChange` property. The onChange will pass an event object to a callback function. This contains an `event.target.value` to represent what the user typed into the input element.

Using the fetch method to make API calls. With the fetch method, React app can make HTTP requests to API services. This is an excellent way to add a ton of new content to your React application.
