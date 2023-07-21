// import preact
import { render } from 'react';
import './index.scss';

function MyComponent(props) {
  return <div>My name is {props.name}.</div>;
}

// Usage
const App = <MyComponent name="John Doe" />;

// Renders: <div>My name is John Doe.</div>
render(App, document.body);