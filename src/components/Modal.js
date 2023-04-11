const Modal = (props) => {
  // Conditionally Rendering the className of this div based off the modal state value
  const divClass = props.visible ? 'active' : 'modal';

  return (
    <div className={divClass}>
      {/* Rendering the p tag in the App. See ln. 46 in the App.js file  */}
      {props.children}
    </div>
  );
};

export default Modal;
