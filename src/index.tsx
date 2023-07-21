import { render } from 'react';
import './index.scss';

function MyComponent(props) {
  return <div>My name is {props.name}.</div>;
}

const App = <MyComponent name="lily" />;

render(App, document.body);