const Hello = (props) => {
  // Here we are using a switch statement to determine which JSX code to render
  // The parent of this component (App) will give it a prop of language and it will use that to determine which JSX code to render. See ln. 60 on the App.js file.
  switch (props.language) {
    case 'eng':
      return <h1>Hello</h1>;
    case 'esp':
      return <h1>Hola</h1>;
    default:
      return <h1> No Language Detected </h1>;
  }
};

export default Hello;
