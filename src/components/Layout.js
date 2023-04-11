const Layout = (props) => {
  return (
    <div className={'layout'}>
      <header>
        <h1>Tips and Tricks Lesson</h1>
      </header>
      <main>
        <h2>We learning</h2>
        {/* Render the App and everything inside the App */}
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
