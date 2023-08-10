import { render, JSX } from 'react';
import './style.scss';

/* this file is verbose, but it's here as a proof of concept. */

/**
 * Props for MyComponent
 * @property {string} props.name - Your name
 */
type Props = {
  name: string;
};

/**
 * Primary UI component for user interaction
 * 
 * @param {string} name Your name
 * @returns {JSX.Element} The rendered component
 * 
 * @example
 * render(<MyComponent name="Lily" />, document.body);
 * 
 * @placeholder
 */
function MyComponent({ name }: Props): JSX.Element {
  return <div>My name is {name}</div>;
}

render(<MyComponent name="Lily" />, document.body);
