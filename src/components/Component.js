const Component = (props) => {
  const result = {
    good: <h1>Good</h1>,
    bad: <h1>Bad</h1>,
    ugly: <h1>Ugly</h1>,
  };
  // Example of destructuring
  // const { good, bad, ugly } = result

  // Here we are using the property prop (ln. 58 in App.js) to dynamically access the JSX code in the results object using bracket notation.
  // We us bracket notation because it allows us to use variables to access different keys. Dot notation is literal and will not work with variables
  return result[props.property];
};

export default Component;
