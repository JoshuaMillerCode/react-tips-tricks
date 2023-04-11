import './App.css';
import Modal from './components/Modal';
import Component from './components/Component';
import Hello from './components/Hello';
import { useState } from 'react';
import styles from './styles/appStyle';

const IsEven = (props) => {
  // Conditional Rendering w/ If Statement
  // if (props.number % 2 === 0) {
  //   return <h1> It is even </h1>;
  // } else {
  //   return <h1>It is odd</h1>;
  // }
  // Example of Ternary conditionally returning JSX
  //===================================================
  // return props.number % 2 === 0 ? <h1> it is even </h1> : <h1> it is odd </h1>;
  //===================================================
  return (
    <h1>
      {/* Example of conditionally rendering within JSX */}
      {props.number % 2 === 0
        ? props.number === '4'
          ? 'it is 4'
          : 'it is even'
        : 'it is odd'}
    </h1>
  );
};

export default function App() {
  // State to control modal visibility
  const [modal, setModal] = useState(false);
  // useState returns an array, above we are destructuring the two elements within the array. Below is an example if you didn't destructure
  // const arrState = useState(false);
  // arrState[0] // same as using modal variable
  return (
    <main>
      {/* Using the styled components that were pre-defined in the styles/appStyle.js file. */}
      <styles.Container>
        <styles.Title>Hello World</styles.Title>
      </styles.Container>
      <IsEven number="4" />

      <Modal visible={modal}>
        {/* This p tag will be added to the Modal's props.children array */}
        <p>Im the modal</p>
      </Modal>

      <button
        onClick={() => {
          // this onClick will change the modal state from true/false and toggle the visibility of the Modal component
          setModal(!modal);
        }}
      >
        {modal ? 'Turn Off' : 'Turn On'}
      </button>

      <Component property="good" />

      <Hello language="esp" />
    </main>
  );
}
